import logo from './logo.svg';
import './App.css';
import React from 'react';
import Container from '@material-ui/core/Container';
import Projects from './Projects';
import Socials from './Socials';
import About from './About';
import NavigationButtons from './NavigationButtons';
import DarkModeToggle from './DarkModeToggle';

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
          <Container>
            <DarkModeToggle />
            <NavigationButtons handler={this.handler}/>
          </Container>
          <div className="content">
            {this.state.active === "about" && <About />}
            {this.state.active === "socials" && <Socials />}
            {this.state.active === "projects" && <Projects />}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
