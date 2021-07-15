import React from 'react';
import photoA from './common/siklab.png';
import photoB from './common/webdev.png';
import { Container, Grid, Button } from '@material-ui/core';
import CallMadeIcon from '@material-ui/icons/CallMade';

const HEADER = `
Notable Projects
`;

const CONTENT = {
  "projA": `
  The Youth Assembly is an annual event hosted by Siklab Pilipinas in partnership with the U.N. aiming to equip young Filipinos with the skills and opportunities to change their communities.
  In 2018, I co-lead the design team during the development of the project’s proof-of-concept, collaborating directly with the client and co-designers to develop the appropriate UI/UX direction.
  `,
  "projB": `
  The Health Journal is aimed at spreading mental and physical health awareness. This website provides helpful online posts for creating a balanced and productive environment for anyone to stay and work in.
  `
};

const URL = {
  "siklab": "https://siklab.org.ph/",
  "health": "https://phpmysql.howardcc.edu/Users/sgarcia6599/"
};

const BTN_COLOR = `secondary`;

class Projects extends React.Component {
    render() {
      return (
        <div>
          <Container>
            <h1>{HEADER}</h1>
            <Grid container spacing={5}>
              <Grid item lg={6} sm={6} xs={12}>
                <Container><img src={photoA} alt="photo"></img></Container>
              </Grid>
              <Grid item lg={6} sm={6} xs={12}>
                <Container>
                  <h3>Youth Assembly 2018</h3>
                  <p>{CONTENT["projA"]}</p>
                  <Button variant="contained" color={BTN_COLOR} href={URL["siklab"]}>
                    Siklab Pilipinas&#160;
                    <CallMadeIcon />
                  </Button>
                </Container>
              </Grid>
            </Grid>

            <Grid container spacing={5}>
              <Grid item lg={6} sm={6} xs={12}>
                <Container>
                  <h3>Health Awareness Project</h3>
                  <p>{CONTENT["projB"]}</p>
                  <Button variant="contained" color={BTN_COLOR} href={URL["health"]}>
                    The Health Journal&#160;
                    <CallMadeIcon />
                  </Button>
                </Container>
              </Grid>
              <Grid item lg={6} sm={6} xs={12}>
                <Container><img src={photoB} alt="photo"></img></Container>
              </Grid>
            </Grid>
          </Container>
        </div>
      );
    }
  }

  export default Projects;