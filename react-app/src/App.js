import './App.css';
import React from 'react';
import Projects from './Projects';
import Socials from './Socials';
import About from './About';
import NavigationButtons from './NavigationButtons';
import DarkModeToggle from './DarkModeToggle';
import '@fontsource/roboto';

const SECTIONS = {
  "about": <About />,
  "socials": <Socials />,
  "projects": <Projects />
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);
    this.state = {
      active: "about"
    };
  }

  handler(e, view) {
    this.setState({active: view});
  } 
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <DarkModeToggle />
          <NavigationButtons handler={this.handler}/>
          <div className="content">
            {SECTIONS[this.state.active]}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
