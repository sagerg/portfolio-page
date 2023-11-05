import React from 'react';
import { Container, Grid, Typography, Button } from '@material-ui/core';
import photo from './common/photo.jpeg';
import TextLoop from "react-text-loop";
import Fade from '@material-ui/core/Fade';

const CONTENT = `
I'm a senior majoring in Computer Science at the University of Maryland Baltimore County.
I started my journey in software development as a UX designer and community manager at User Experience Society, a student-run organization based in Manila.
I briefly worked at Apple as a Technical Expert. My work consisted of end-to-end troubleshooting, repairing, and testing customers' devices.
During the summer after my junior year, I joined the Software Engineer Program at JPMorgan Chase & Co. as an intern where I worked on web applications using React and Flask. The Agile model, test driven development, and deployment via CI/CD pipelines with Jenkins were all core components of my work at Chase.
I'm currently an organizer for HackUMBC where I closely work with external organizations to bring unique opportunities to our hackathon's attendees.
`;

const INTRO_LOOP = [
  'Sage Garcia',
  'an aspiring developer',
  'a UI/UX enthusiast',
  'an Agile practitioner',
  'an OSS supporter',
  'an AI/ML follower',
];

class About extends React.Component {
  render() {
    return (
      <div>
        <Container>
        <Fade in timeout={500}>
          <Grid container spacing={5}>
            <Grid item md={6} xs={12}>
              <Container><img src={photo} alt="author"></img></Container>
            </Grid>
            <Grid item md={6} xs={12}>
              <Container>
                <Typography variant="h4" gutterBottom>
                  {"Hey, I'm "}
                  <TextLoop interval={3000}>
                    {
                      INTRO_LOOP.map((item, index) => {
                        return <span key={index}>{item}</span>;
                      })
                    }
                  </TextLoop>
                  <span className="blinking-span-el text-primary" style={{color: '#f44336'}}>|</span>
                </Typography>
                <Typography variant="body1">{CONTENT}</Typography>
                <Button 
                  variant="contained" 
                  href='https://drive.google.com/drive/folders/1bxxtJBY2PnjHJT06OzvJkUtfW6BFflw-?usp=sharing' 
                  style={{marginTop: '30px'}}
                >
                  Resume PDF
                </Button>
              </Container>
            </Grid>
          </Grid>
        </Fade>
        </Container>
      </div>
    );
  }
}

export default About;