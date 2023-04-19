import React from "react";
interface Props{
  
  

}
interface state{
    Clicando:any
}

export default class Botao extends React.Component<Props,state>{



    render(){
        
        const {Cliclando} =this.state;

        return(

    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modalExemplo">
    Abrir modal
  Clicando={this.state.} 
   
    </button >
        )
    }
}