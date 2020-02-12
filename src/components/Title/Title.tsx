import React, { Component } from "react";
import "./Title.scss";
import TitleState from "../../models/StateTypes/TitleState";
import { StatusEnum } from "../../config/Enums";



const SINGLE_MODE: string = "SINGLE_MODE";
const VS_MODE: string = "VS_MODE";

export default class Title extends Component<any, TitleState>{
    private static readonly _singlemode = "SingleMode"
    constructor(props: any) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    private handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(e.currentTarget.name);
        if (e.currentTarget.name === SINGLE_MODE)
        {
            this.props.UpdateStatus({status:StatusEnum.Single_Mode});
        }
        else if (e.currentTarget.name === VS_MODE) {
            this.props.UpdateStatus({status:StatusEnum.VS_Mode});
        }
        else {
            // エラー
            window.alert("エラー");
        }
    };

    render() {
        return (
            <React.Fragment>
                <div className="background">
                    <div className="title">Numer0n（仮）</div>
                    <button className="single-mode" name={SINGLE_MODE} onClick={this.handleClick}>Single Mode</button>
                    <button className="vs-mode" name={VS_MODE} onClick={this.handleClick}>VS Mode</button>
                </div>
            </React.Fragment>
        )
    }
}

