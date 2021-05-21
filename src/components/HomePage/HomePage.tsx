import React, {useEffect, useState, useContext} from 'react'
import axios from 'axios'
import Coin from '../Coin/Coin';
import { Grid} from '@material-ui/core';
import { myContext } from '../../Context'
import { IUser } from '../../types/mainTypes'
 

const HomePage = (props: any) => {
    const context = useContext(myContext) as IUser;
    const [coins, setCoins] = useState() as any
    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false').then((response) => {
            console.log(response.data)
            setCoins(response.data)
            console.log(response.data)
        })
    }, [])
    return (
        <div>
           {context ? <h1>Welcome back {context.username}</h1>: <h1>Welcome to my Website</h1>} 
           {coins && <Grid container spacing={1}>
                    {coins.map((coin: { name: any; image: any; current_price: any; }) => (
                        <Coin name={coin.name} image={coin.image} price={coin.current_price} />
                    ))}
                </Grid>}
        </div>
    )
}

export default HomePage
