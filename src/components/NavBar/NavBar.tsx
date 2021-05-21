import {useContext} from 'react'
import {Link} from 'react-router-dom'
import axios, { AxiosResponse } from 'axios';
import { myContext } from '../../Context';
import { IUser } from '../../types/mainTypes';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const drawerWidth = 0;
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    appBar: {
        flexGrow: 1,
        boxShadow: 'none',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        [theme.breakpoints.up('sm')]: {
          width: `calc(100% - ${drawerWidth}px)`,
          marginLeft: drawerWidth,
        },
      }
  }));

const NavBar = () => {
    const userObject = useContext(myContext) as IUser
    const classes = useStyles();
    const logout = () => {
        axios.get("https://oauth-template.herokuapp.com/auth/logout", {
            withCredentials: true
        }).then((res: AxiosResponse) => {
            if(res.data === "done"){
                window.location.href = "/"
            }
        })
    }
    return (
        <div className={classes.appBar}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          {!userObject &&<Button component={Link} to="/login" color="inherit" >Login</Button>}
          {userObject && <Button color="inherit">Logout</Button>}
        </Toolbar>
      </AppBar>
    </div>
   
    )
}

export default NavBar
