import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Button, ButtonGroup } from '@material-ui/core';

const URL = {
  "github": "https://github.com/sagerg",
  "linkedin": "https://www.linkedin.com/in/sagegarcia/",
  "twitter": "https://twitter.com/SageGarcia_",
  "email": "mailto:sage.garcia@umbc.edu"
};

const TITLE = {
  "github": "github.com/sagerg",
  "linkedin": "linkedin.com/in/sagegarcia/",
  "twitter": "twitter.com/SageGarcia_",
  "email": "sage.garcia@umbc.edu"
}

const HEADER = `
Let's chat
`;

const CONTENT = `
`;

class Socials extends React.Component {
  render() {
    return (
      <div>
        <h1>{HEADER}</h1>
        <div className="content">
          <ButtonGroup
            orientation="vertical"
            color="secondary"
            aria-label="vertical contained primary button group"
            variant="text"
          >
            <Button href={URL["github"]}>
              <GitHubIcon />
              &#160;{TITLE["github"]}
            </Button>
            <Button href={URL["linkedin"]}>
              <LinkedInIcon />
              &#160;{TITLE["linkedin"]}
            </Button>
            <Button href={URL["twitter"]}>
              <TwitterIcon />
              &#160;{TITLE["twitter"]}
            </Button>
            <Button href={URL["email"]}>
              <EmailIcon />
              &#160;{TITLE["email"]}
            </Button>
          </ButtonGroup>
        </div>
      </div>
    );
  }
}

export default Socials;