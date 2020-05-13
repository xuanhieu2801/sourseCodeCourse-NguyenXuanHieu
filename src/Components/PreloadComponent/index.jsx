import React, { Component } from 'react';
import './PreloadCss.css'

export default class Preload extends Component {


    constructor(props){
            super(props);
            this.state={
                Preload :"Preload"
            }
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                Preload : "Preload hidden"
            })
        },2000)
    }
    render() {
        return (
            <div className={this.state.Preload}>
                <div className="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>
        )
    }
}
