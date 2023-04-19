import React from "react";
import { ReactNode } from "react";
import Botao from "./button";

interface Props {
    Modalshow:any;
    
  
}
interface state{
    Clicando:boolean;
}
   
export default class Exemplo extends React.Component<Props,state>{

    constructor(porps:Props){
        super(porps)
        this.state = {
            Clicando:false
        }

    }
    tagClicar = () =>
    this.setState({
        Clicando:!this.state.Clicando
    })

  
 
    render() {
    
   
        return (
           
            <div className="modal fade" id="modalExemplo" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Título do modal</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
                            <button type="button" className="btn btn-primary">Salvar mudanças</button>
                        </div>
                    </div>
                </div>
            </div>
            
        )
       
    }
}
       
