import React, { Component, Fragment, } from 'react';
//import { withRouter } from 'react-router-dom';
//import { connect } from 'react-redux';
import {
    Header, Button, Grid, Input,
    Form, option, Search, Dropdown, Segment, Image
  } from 'semantic-ui-react';
//import logNewCall from '../../actions/calls.js';
import getCustomerData from '../../actions/searchDB.js';
import _ from 'lodash';

class UpdateCall extends Component{
  state = {  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.name+' '+e.target.value);
  }

  setTargetValue = (e) => this.setState({searchValue: e.target.value});

  render() {
    const {customerName, callType, callDescription, hardwareInvolved} = this.state
    return (
      <Grid>
        <Grid.Row style={styles.littleSpace}>
          <Header as='h1' textAlign='center' style={styles.littleSpace}>Update Call</Header>
        </Grid.Row>

        <Grid.Row style={styles.noSpace}>
          <Grid.Column style={styles.noRightSpace} computer={4} tablet={8} mobile={16}>
            <Segment>
              <Form>
                <Form.Field> </Form.Field>
                <Form.Field>
                  <Input />

                </Form.Field>
                <Form.Field>
                  <textarea
                    placeholder='Update Summary'
                    className='area'
                    rows='3'
                    type='textArea'
                    name='Update Summary'
                    onChange={this.handleChange}
                    required='true'
                  ></textarea>
                </Form.Field>
              </Form>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

const styles = {
  noSpace: {
    margin: '0',
    padding: '0',
  },
  noRightSpace: {
    rightMargin: '0',
    rightPadding: '0',
  },
  noLeftSpace: {
    leftMargin: '0',
    leftPadding: '0',
  },

  littleSpace: {
    margin: '3px',
    padding: '3px',
  },
}

export default UpdateCall;
