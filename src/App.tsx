import React ,{Component} from 'react';
import './App.css';
import Title from './components/Title/Title';
import { StatusEnum } from './config/Enums';
import AppState from './models/StateTypes/AppState';
import SingleMode from './components/SingleMode/SingleMode';
import VSMode from './components/VSMode/VSMode';

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
          return <Title UpdateStatus={this.UpdateStatus}/>
        }
        else if(this.state.status===StatusEnum.Single_Mode){
          return <SingleMode/>
        }
        else if(this.state.status===StatusEnum.VS_Mode){
          return <VSMode/>
        }
        else {
          return <Title/>
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
