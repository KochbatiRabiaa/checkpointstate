

import './App.css';
import React , {Component} from 'react'
import photo1 from "./photo1.jpg"

class App extends Component {
 constructor(props){
   console.log("constructor() ")
   super(props)
   this.state = {
     person: [
           { fullName:'Kochbati Rabiaa',
             bio:'A master degree in analytical chemistry from the University of Tunis: Faculty of Sciences of Tunis.A wife and a mother of a beautiful twin',
             profession:'chemistry teacher',
             imgSrc: photo1
        }]
          
            ,
    isVisible : false,
    interval: null ,
    timer : 0,
  };
}
componentDidMount () {
 console.log("componentDidMount() ");
 this.setState({
  interval: setInterval(() => {
    this.setState ({timer : this.state.timer +1})

  }, 1000)
})

}

toggleVisibility=()=> {
  this.setState({
    isVisible: !this.state.isVisible
  })
 }
componentDidUpdate(){
  console.log("componentDidUpdate()")
  if(!this.state.isVisible)
  
  {
    this.setState.timer=0
  }
}

componentWillUnmount(){
  console.log("componentWillUnmount()")
  if (this.state.isVisible){
 clearInterval(this.state.interval)}
}




 render(){  
    console.log("render() ")
   return (
      <div>

      <button className='btn' onClick={this.toggleVisibility}> {this.state.isVisible ? 'hide the profile' : 'show the profile'}</button>
      {this.state.isVisible ? 
      (
       <div>    
         {this.state.person.map((person, index) => {
          return (
            
              <div  key={index}>
                 <img className ='img 'src ={person.imgSrc} alt="" />
                <div className='key'>  <p className='text'><div className='person'>Full Name:</div>{person.fullName}</p>
                  <p className='text'><div className='person'>Bio:</div>{person.bio}</p>
                  <p className='text'><div className='person'>Profession:</div>{person.profession}</p></div>
                 
              </div>
          )})
           
      }
      
     <h4 className='timer'>{this.state.timer}</h4>
      </div>) :(<h4 className='clic '>Clic on the button to show the profile</h4>)
      
      }                                                        
     
     </div>
    )
  }
 }
 

export default App;
