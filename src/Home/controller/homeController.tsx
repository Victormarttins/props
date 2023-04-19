import React from "react";
import HomeView from "../View/homeView";
interface Props{
    Modalshow:any;
    Click:boolean;

}

export default class HomeController extends React.Component<Props>{
    render() {
        return(
            <HomeView Modalshow={this.props.Modalshow}></HomeView>
        )
        
    }

}