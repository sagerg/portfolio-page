import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Button, ButtonGroup, Typography } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';

const CONTENT = {
  "github": 
    {
      "url": "https://github.com/sagerg",
      "title": "github.com/sagerg",
      "icon": <GitHubIcon />
    },
  "linkedin": 
    {
      "url": "https://www.linkedin.com/in/sagegarcia/",
      "title": "linkedin.com/in/sagegarcia",
      "icon": <LinkedInIcon />
    },
  "twitter": 
    {
      "url": "https://twitter.com/SageGarcia_",
      "title": "twitter.com/SageGarcia_",
      "icon": <TwitterIcon />
    },
  "email": 
    {
      "url": "mailto:sage.garcia@umbc.edu",
      "title": "sage.garcia@umbc.edu",
      "icon": <EmailIcon />
    }
};

const HEADER = "Let's have a chat. Shoot me a tweet, DM, or an email below";

class Socials extends React.Component {
  render() {
    return (
      <div>
        
        <Typography variant="h5" gutterBottom>
          {HEADER}
          <span className="blinking-span-el text-primary" style={{color: '#f44336'}}>|</span> 
        </Typography>
        <div className="content">
        <Fade in timeout={500}>
          <ButtonGroup
            orientation="vertical"
            color="secondary"
            aria-label="vertical contained primary button group"
            variant="outlined"
          >
            {
              Object.keys(CONTENT).map((key, index) => {
                return (
                  <Button key={index} href={CONTENT[key]["url"]}>
                    {CONTENT[key]["icon"]}
                    &#160;{CONTENT[key]["title"]}
                  </Button>
                );
              })
            }
          </ButtonGroup>
        </Fade>
        </div>
      </div>
    );
  }
}

export default Socials;