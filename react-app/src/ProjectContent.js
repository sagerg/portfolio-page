import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Siklab from './common/siklab.png';
import WebDev from './common/webdev.png';
import CallMadeIcon from '@material-ui/icons/CallMade';
import { Container, Grid, Button, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const CONTENT = {
  "projA": 
    {
      "title": "Siklab Pilipinas",
      "desc": `
      The Youth Assembly is an annual event hosted by Siklab Pilipinas in partnership with the U.N. aiming to equip young Filipinos with the skills and opportunities to change their communities.
      In 2018, I co-lead the design team during the development of the project’s proof-of-concept, collaborating directly with the client and co-designers to develop the appropriate UI/UX direction.
      `,
      "url": "https://siklab.org.ph/",
      "btn": "Siklab Pilipinas",
      "alt": "photo of siklab project",
      "photo": Siklab
    },
  "projB":
    {
      "title": "Health Journal",
      "desc": `
      The Health Journal is aimed at spreading mental and physical health awareness.
      This website provides helpful online posts for creating a balanced and productive environment for anyone to stay and work in.
      `,
      "url": "https://phpmysql.howardcc.edu/Users/sgarcia6599/",
      "btn": "The Health Journal",
      "alt": "photo of health journal project",
      "photo": WebDev
    },
  "projC":
    {
      "title": "Unix Password Manager",
      "desc": `
      Command line tool, written in C++ for UNIX systems, parses account username and passwords. Securely encrypts data locally using Base64 encoding and an implementation of Vigenère Cipher.
      `,
      "url": "https://github.com/sagerg/cmd-line-tools#password-manager",
      "btn": "Github Repo",
      "alt": "photo of pass manager",
      "photo": ""
    },
  "projD":
    {
      "title": "Electron Screen Recorder",
      "desc": `
      Electron.js based desktop app written in jQuery and JavaScript, built with Electron Forge. App records current or active screen in desktop and, when stopped, saves video as a webm file.
      `,
      "url": "https://github.com/sagerg/desktop-screen-recorder",
      "btn": "Github Repo",
      "alt": "photo of screen rec",
      "photo": ""
    },
};

const BTN_COLOR = "secondary";

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

class InnerContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: this.props.photo,
      altText: this.props.altText,
      mainContent: this.props.mainContent,
      btnName: this.props.btnName,
      url: this.props.url
    };
  }

  render() {
    return (
      <div>
        <Grid container spacing={5}>
          <Grid item lg={6} md={6} xs={12}>
            <Container><img src={this.state.photo} alt={this.state.altText}></img></Container>
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
            <Container>
              <Typography variant="body1" gutterBottom>{this.state.mainContent}</Typography>
              <Button variant="contained" color={BTN_COLOR} href={this.state.url}>
                {this.state.btnName}&#160;
                <CallMadeIcon />
              </Button>
            </Container>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default function ProjectContent() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      {
        Object.keys(CONTENT).map((key, index) => {
          return (
            <Accordion key={index} square expanded={expanded === "panel"+(index+1)} onChange={handleChange("panel"+(index+1))}>
              <AccordionSummary aria-controls={"panel"+(index+1)+"d-content"} id={"panel"+(index+1)+"d-header"}>
                  <Typography variant="h6">
                    {expanded === ("panel"+(index+1)) ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    {CONTENT[key]["title"]}
                  </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <InnerContent 
                  photo = {CONTENT[key]["photo"]}
                  altText = {CONTENT[key]["alt"]}
                  mainContent = {CONTENT[key]["desc"]}
                  btnName = {CONTENT[key]["btn"]}
                  url = {CONTENT[key]["url"]}
                />
              </AccordionDetails>
            </Accordion>
          );
        })
      }
    </div>
  );
}