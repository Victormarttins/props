import React from "react";
import Botao from "../controller/button";
import Exemplo from "../controller/Modal";
interface Props{
    Modalshow:any;
    Click:boolean;
}
 interface state{
 
 }

export default class HomeView extends React.Component<Props,state>{
    render(){
        return(
          <Botao Modashow={this.props.Click}>
            <Exemplo Modalshow={this.props.Modalshow} >

            </Exemplo>

           
          </Botao>
          
        
        )
        
    }

}