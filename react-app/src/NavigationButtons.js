import React from 'react';
import {
  Button,
  ButtonGroup,
} from '@material-ui/core';

class NavigationButtons extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ButtonGroup variant="text" size="large" color="secondary" aria-label="large outlined primary button group">
          <Button onClick={(e) => this.props.handler(e, "about")}>ABOUT</Button>
          <Button onClick={(e) => this.props.handler(e, "projects")}>PROJECTS</Button>
          <Button onClick={(e) => this.props.handler(e, "socials")}>SOCIALS</Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default NavigationButtons;