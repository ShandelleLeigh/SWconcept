import React, { Component, Fragment,  } from 'react';
import { Header, Grid, Segment } from 'semantic-ui-react';

class Dash extends Component {
  render() {
    return (
      <Fragment>
        <Header as='h1' textAlign='left'>  Dashboard</Header>
        <Grid>
          <Grid.Column computer={8}>
            <div as='Segment' >
              <Header as='h1' textAlign='center'>Stats</Header>
                <Segment>
                  <p>Words words words words words words words words
                    words words words words words words words words
                    words words words words words words words words
                    words words words words words words words words
                    words words words words words words words words
                  </p>
                </Segment>
                <Segment>
                  <p>Words words words words words words words words
                    words words words words words words words words
                    words words words words words words words words
                    words words words words words words words words
                    words words words words words words words words
                  </p>
                </Segment>

            </div>
          </Grid.Column>
          <Grid.Column computer={8}>
            <div as='Segment' >
              <Header as='h1' textAlign='center'>Graphs</Header>
              <Segment>
                <p>Words words words words words words words words
                  words words words words words words words words
                  words words words words words words words words
                  words words words words words words words words
                  words words words words words words words words
                </p>
              </Segment>
              <Segment>
                <p>Words words words words words words words words
                  words words words words words words words words
                  words words words words words words words words
                  words words words words words words words words
                  words words words words words words words words
                </p>
              </Segment>

            </div>
          </Grid.Column>
        </Grid>
      </Fragment>
    )
  };
};

export default Dash;
