import React,{Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import Login from '../Login';

class AppNav extends Component{
    render(){
        return(
            <div>
                <AppBar position="static">
                    <Toolbar className={this.props.classes.nav}>
                        <Typography color="inherit" variant="h6" component="h1" className={this.props.classes.grow}>
                            Albumes
                        </Typography>
                        <Login />
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}
export default withStyles({
    grow:{flexGrow:1,textAlign:'left'},
    nav:{
        color:'white'
    }
  }) (AppNav);