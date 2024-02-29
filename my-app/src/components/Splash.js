import { Component } from "react";
import Logo from './loading.gif'; // route path ./
import'./Splash.css'

class Splash extends Component  {  //route

    

    render(){
       return(
       <div className ="splash">
            <img src = {Logo} alt = "Loading image"/>
        </div>
    )}

        
}
export default Splash;