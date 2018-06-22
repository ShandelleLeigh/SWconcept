import React, { Component, Fragment, } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Header, Grid, Segment, Table } from 'semantic-ui-react';

//TODO:  Link this to the database to gather calls assigned to the group of logged in user.

class UnassignedCalls extends Component {
  callsTable = () => {
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
        <Segment style={styles.segmnt}>
          <Header as='h1' textAlign='center'>Unassigned Calls</Header>
          <this.callsTable/>
        </Segment>
      </Fragment>
    );
  }
};

const styles = {
  segmnt: {
    height: '100%',
  },
};

export default UnassignedCalls;
