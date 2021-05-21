import React, {useContext} from 'react'
import Styles from './NavBar.module.css';
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

import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CloseIcon from '@material-ui/icons/Close';
import {useTheme } from '@material-ui/core/styles';

const drawerWidth = 0;
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        width: drawerWidth
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    closeMenuButton: {
        marginRight: 'auto',
        marginLeft: 0,
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

    const dummyCategories = ['Hokusai', 'Hiroshige', 'Utamaro', 'Kuniyoshi', 'Yoshitoshi']
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
  function handleDrawerToggle() {
      setMobileOpen(!mobileOpen)
    }
  const drawer = (
      <div>
        <List>
          {dummyCategories.map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );

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
          <IconButton 
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}>
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

        /*<div className={Styles.navBarWrapper}>
            <ul className={Styles.navBar}>
                <li><Link to="/">Home</Link></li>
                {!userObject && <li><Link to="/login">Login</Link></li>}
                {userObject && <li onClick={logout}>Logout</li>}
            </ul>    
        </div>*/
        
    )
}

export default NavBar
