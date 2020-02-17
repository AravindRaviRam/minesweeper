import React,{Component} from 'react';
import logo from './logo.svg';
import Particles from 'react-particles-js';
import GameBoard from './components/GameBoard/GameBoard'
import './App.css';
import 'tachyons'
const particlesOptions={
  particles: {
                  number:{
                  value:100,
                  density:{
                    enable:true,
                    value_area:900
                  }
                  }
                }
}

class App extends Component{
  constructor(){
    super()
    this.state={
        height:8,
        width:8,
        mines:10,
    }
  }

  render(){
    return(
      <div>

      <audio id="myAudio">
        <source src="horse.ogg" type="audio/ogg"/>
        <source src="horse.mp3" type="audio/mpeg"/>
        Your browser does not support the audio element.
      </audio>

           <Particles className="particles"
                params={particlesOptions} />
        <h1 className='f1 tc'>minesweeper</h1>
        
          <div class="boardStyle">
              <GameBoard height={this.state.height} width={this.state.width} mines={this.state.mines} />
          </div>
        

      </div>
      
      )
  }


}




export default App;
