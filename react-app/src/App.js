import './App.css';
import React from 'react';
import Projects from './Projects';
import Socials from './Socials';
import About from './About';
import NavigationButtons from './NavigationButtons';
import DarkModeToggle from './DarkModeToggle';

const TRADEMARK = `
© 2020 Sage Garcia
`;

const SECTIONS = [
  "about",
  "socials",
  "projects"
]

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
            {this.state.active === SECTIONS[0] && <About />}
            {this.state.active === SECTIONS[1] && <Socials />}
            {this.state.active === SECTIONS[2] && <Projects />}
          </div>
        </header>
        <footer>{TRADEMARK}</footer>
      </div>
    );
  }
}

export default App;
