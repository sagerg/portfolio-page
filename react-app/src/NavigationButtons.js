import React from 'react';
import {
  Button,
  ButtonGroup,
} from '@material-ui/core';

const NAV_CHOICES = ["about", "projects", "socials"];

class NavigationButtons extends React.Component {
  render() {
    return (
      <div className="nav">
        <ButtonGroup variant="text" size="large" color="secondary" aria-label="large outlined primary button group">
          {NAV_CHOICES.map((item, i)=>{
            return (<Button key={i} onClick={(e) => this.props.handler(e,item)}>{item.toUpperCase()}</Button>);
          })}
        </ButtonGroup>
      </div>
    );
  }
}

export default NavigationButtons;