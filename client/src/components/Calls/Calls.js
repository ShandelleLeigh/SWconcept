import React, { Component, Fragment, } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Header, Grid, Segment, Table } from 'semantic-ui-react';
import { Switch, Route } from 'react-router-dom';
import AssignedToMe from './AssignedToMe';
import UnassignedCalls from './UnassignedCalls';
//import LogNewCall from './LogNewCall';
//import {getCustomerData} from '../../actions/calls.js';

class Calls extends Component {
  activeCalls = () => {
    return (
        <Table basic='very' striped singleLine>
          <Table.Header>
            <Table.Row>
              <Table.Cell>Call Type</Table.Cell>
              <Table.Cell>Customer Name</Table.Cell>
              <Table.Cell>Urgency</Table.Cell>
              <Table.Cell>Details</Table.Cell>
              <Table.Cell>Assignment</Table.Cell>
            </Table.Row>
          </Table.Header>
            <Table.Row>
              <Table.Cell>Incedent</Table.Cell>
              <Table.Cell>Michael S</Table.Cell>
              <Table.Cell>1 Hour</Table.Cell>
              <Table.Cell>Laptop</Table.Cell>
              <Table.Cell>Me</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Servce Request</Table.Cell>
              <Table.Cell>Alan C</Table.Cell>
              <Table.Cell>3 Hour</Table.Cell>
              <Table.Cell>Printer</Table.Cell>
              <Table.Cell>Unassigned</Table.Cell>
            </Table.Row>
          </Table>
    )
  }

  render() {
    return (
      <Fragment>
        <Grid>
          <Grid.Column style={styles.segmnt} computer={8}>
            <AssignedToMe />
            <UnassignedCalls />
          </Grid.Column>
          <Grid.Column computer={8}>
            <Segment style={styles.segmnt}>
              <Header as='h1' textAlign='center'>Notifications</Header>
              <Segment>
                <Header as='h3' textAlign='center'>Known Issues</Header>
                  <p>Email Network is spotty.  Getting Fixed.</p>
                <Header as='h3' textAlign='center'>Other</Header>
                  <p>Pot luck Friday</p>
              </Segment>
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
            </Segment>
          </Grid.Column>
        </Grid>
      </Fragment>
    );
  }
};

const styles = {
  segmnt: {
    height: '100%',
  },
};

export default Calls;
