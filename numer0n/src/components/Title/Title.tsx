import React, { Component } from "react"
import TitleState from "../../models/StateTypes/TitleState";


const SINGLE_MODE: string = "SINGLE_MODE";
const VS_MODE: string = "VS_MODE";

export default class Title extends Component<any, TitleState>{
    private static readonly _singlemode = "SingleMode"
    constructor(props: any) {
        super(props);
        
        this.handleClick = this.handleClick.bind(this);
    }

    private handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (e.currentTarget.name === SINGLE_MODE)
        {
            
        }
        else if (e.currentTarget.name === VS_MODE) {
            
        }
        else {
            // エラー
        }
    };

    render() {
        return (
            <React.Fragment>
                <div className="background">
                    <div className="title">Numer0n（仮）</div>
                    <button className="single-mode" name={SINGLE_MODE} onClick={this.handleClick}>Single Mode</button>
                    <button className="vs-mode" name={VS_MODE}>VS Mode</button>
                </div>
            </React.Fragment>
        )
    }
}

