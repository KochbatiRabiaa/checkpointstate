
import './App.css';
import React , {Component} from 'react'


class App extends Component {
 constructor(props){
   console.log("constructor() ")
   super(props)
   this.state = {
     person: [
           { fullName:'Kochbati Rabiaa',
             bio:'A master degree in analytical chemistry from the University of Tunis: Faculty of Sciences of Tunis.A wife and a mother of a beautiful twin',
             profession:'chemistry teacher',
             imgSrc: require ("../src/photo1.jpg")
            }
          ]
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


componentDidUpdate(){
  console.log("componentDidUpdate()")
  if(!this.state.isVisible)
  
  {
    this.state.timer=0
  }
}

componentWillUnmount(){
  console.log("componentWillUnmount()")
  if (this.state.isVisible){
 clearInterval(this.state.interval)}
}

toggleVisibility=()=> {
  this.setState({
    isVisible: !this.state.isVisible
  })
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
            
              <div key={index}>
                  <p>Full Name:{person.fullName}</p>
                  <p>Bio:{person.bio}</p>
                  <p>Profession:{person.profession}</p>
                  <img src ={person.imgSrc} alt="" />
              </div>
          )})
           
      }
      
     <h4>{this.state.timer}</h4>
      </div>) :(<h4>Clic on the button to show the profile</h4>)
      
      }                                                        
     
     </div>
    )
  }
 }
 

export default App;
