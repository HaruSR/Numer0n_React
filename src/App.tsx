import React ,{Component} from 'react';
import './App.css';
import TitleScreen from './components/Title/TitleScreen';
import { StatusEnum } from './config/Enums';
import AppState from './models/StateTypes/AppState';
import SingleModeScreen from './components/SingleMode/SingleModeScreen';
import VSModeScreen from './components/VSMode/VSModeScreen';

class App extends Component <any,AppState>{
 
  constructor(props:any){
    super(props);
    this.state ={status:StatusEnum.Stanby_Mode};
    this.UpdateStatus = this.UpdateStatus.bind(this);
  }
  render() {
    return (
      <React.Fragment>
      {(()=>{
        if(this.state.status===StatusEnum.Stanby_Mode){
          return <TitleScreen UpdateStatus={this.UpdateStatus}/>
        }
        else if(this.state.status===StatusEnum.Single_Mode){
          return <SingleModeScreen/>
        }
        else if(this.state.status===StatusEnum.VS_Mode){
          return <VSModeScreen/>
        }
        else {
          return <TitleScreen/>
          // Error Page
        }
      })()}
      </React.Fragment>
    );
  }

  UpdateStatus =(state:AppState)=>{
    this.setState(state);
  }
}
export default App;
