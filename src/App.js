import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';
import Login from './Login';
import AppNav from './components/AppNav';

class App extends Component {
  render(){
  return (
      <div className="App">
          <AppNav />
      </div>
    );
  }
}
// para estilos se conviertan en clases
export default withStyles({
  button:{
    backgroundColor:'red'
  }
}) (App);
