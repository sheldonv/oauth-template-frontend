import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardMedia, CardContent, CardActions, Typography, Grid} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    cardMedia: {
        width: 30,
        height: 30,
        margin: theme.spacing(0,3,0,0)
    },
    card: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: theme.spacing(0,0,0,3)
    },
    cardContent: {
        display: 'flex',
        alignItems: 'center'
    },
    cardPrice: {
        margin: theme.spacing(3)
    },
    title: {
        width: 100,
        [theme.breakpoints.up('sm')]: {
            width: 200
        }
    },
}))

const Coin = (props: any) => {
    const classes = useStyles({}) as any;
    return (
        <Grid item xs={12}>
            <Card  className={classes.card}>
                <CardMedia
                    className={classes.cardMedia}
                    image={props.image}
                    title="Paella dish"
                />
                <CardContent className={classes.cardContent}>
                    <Typography className={classes.title} variant="h6">
                        {props.name}
                    </Typography>
                    <Typography className={classes.cardPrice}>
                        {props.price}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
        
    )
}

export default Coin