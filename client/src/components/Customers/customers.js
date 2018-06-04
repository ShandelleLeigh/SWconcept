import React, { Component, Fragment, Segment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    Header, Button, Grid, Input,
    Form, Dropdown, Select, option,
  } from 'semantic-ui-react';
//import logNewCall from '../../actions/calls.js';


class Customers extends Component{
  state = {
    "isLoading": false,
    "searchResults": [],
    "sBarValue": "asdfasdfasdf"
  };

  // handleChange = (e ) => {
  //   this.setState({ [e.target.name]: e.target.value });
  //   console.log(e.target.name+' '+e.target.value);
  // }
  //
  // handleBlur = (e ) => {
  //   console.log("on blur")
  // }
  //
  // handleClick = (e) => {
  // 
  // }

  SearchBar = () => {

  }

  render() {
    const {customerName, callType, callDescription, hardwareInvolved} = this.state
    return (
      <Grid>
        <Grid.Row>
          <this.SearchBar/>
        </Grid.Row>
        <Grid.Column computer={4}>
            <Header as='h1' textAlign='center'>Customer Table</Header>

        </Grid.Column>
      </Grid>
    );
  }
}

const styles = {

}

export default Customers;
