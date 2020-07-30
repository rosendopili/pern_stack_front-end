import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props); 
    this.state = {
      projects: [], 
      dataLoaded: false
    }
  }
  componentDidMount = () => {
    fetch("http://3.128.207.142:3030/projects")
      .then(res => {
        return res.json();
      })
      .then(res => {
        console.log(res);
        this.setState({
          projects: res,
          dataLoaded: true,
      })
    })
  }

  render(){
    return (
      <div className="App">
        <h1> Projects </h1>


        {this.state.projects.length > 0 && this.state.projects.reverse().map(project => {
          return(
            <div className="projectCard">
            <h2 className="projectName">{project.name}</h2>
            <img className="projectImage" src={project.url} alt="project"/> 
            <p className="projectDescription">
              {project.description}
            </p>
            </div>
          )      
        })}
      </div>
    );
  }
}

export default App;
