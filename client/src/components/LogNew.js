import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Header } from 'semantic-ui-react';

class LogNew extends Component {
  state = { call: 'new' }

  handleClick = (e) => {
    this.setState({call: 'save'})
    console.log(this.state)
  }

  render() {

    const newNew = console.log('LogNew');

    return (
      <Header as='h1' textAlign='center'>LogNew Component</Header>

    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default LogNew;
