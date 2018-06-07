import React, { Component, Fragment, } from 'react';
//import { withRouter } from 'react-router-dom';
//import { connect } from 'react-redux';
import {
    Header, Button, Grid, Input,
    Form, option, Search
  } from 'semantic-ui-react';
//import logNewCall from '../../actions/calls.js';
import getCustomerData from '../../actions/searchDB.js';
import _ from 'lodash';

class LogNewCall extends Component{
  state = {
    call:'', action:'', validity: false,
    customerName: '', cust_id:'', cust_org:'', cust_site:'',
    callType:'', callDescription:'', hardwareInvolved:'',
    isLoading: false, results: [], searchValue: '',
  };

  callString = '';
  searchEntered = {};

  getFormText = () => {
    let s = this.state
    let name = s.customerName
    let type = s.callType
    let desc = s.callDescription
    let hwin = s.hardwareInvolved
    this.callString += 'call_type?new&name?'+ name +'&type?'+ type +'&desc?'+desc
    hwin !== '' ? this.callString += 'hwin?' + hwin : this.callString += ''
    // this.callstring.replace(/(\s)/g, '_')
    console.log(this.callString)
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.name+' '+e.target.value);
  }
  // handleBlur = (e ) => { }
 handleClickSubmit = (e) => {
  if( this.state.call === 'new' ){/*Submit Form function}*/}
  }
  //TODO: get this handleClick to work, and print searchResults.data
  handleClick = (e) => { console.log(this.searchResults)}
  consoleLog = () => {
    let words = this.state.searchValue
    console.log('searchValue '+ words)
  }


  DropOptions = () => {
    const items = [
      {name:'Incedent', value:'incedent'},
      {name:'Problem', value:'problem'},
      {name:'Change request', value:'change_request'},
      {name:'Release request', value:'release_request'},
      {name:'Service request', value:'service_request'},
    ]
    return items.map(item => {
      let name = item.name
      let value = item.value
      return (
        <option
          key={name}
          value={value}
          name={name}
          label={name}
          onClick={this.handleItemClick}
        >{name}</option>
      )
    })
  }

  nameInput = () => {
    return (
      <Input
        placeholder='Customer Name'
        icon='user circle outline'
        type='text'
        name='customerName'
        labelPosition='left'
        onChange={this.handleChange}
        value={this.state.customerName}
        onKeyPress={this.handleKeyEnter}
        //required='true'
      />
    )
  }
  resetComponent = () => this.setState({ isLoading: false, results: [], searchValue: '' })
  //handleResultSelect = (e, { result }) => this.setState({ value: result.title })
  searchResults = [];
  //TODO: make debouce/timeout method to delay quering db until pause in typing.
  handleResultSelect = (e, { result }) => {
    console.log(result)
    // let result.
    this.resetComponent
    this.setState({ searchValue: result.title })
  };
  handleSearchChange = (e) => {
    const value = e.target.value
    this.setState({searchValue: value})
  };
  handleKeyEnter = (e) => {
    let value = e.target.value
    if (e.key === 'Enter') {
      console.log('queryCustData ' + value);
      this.setState({ isLoading: true })
    }
    //this.queryCustData();
  };

  setTargetValue = (e) => this.setState({searchValue: e.target.value});

  searchField = () => {
    const { isLoading, searchValue, results } = this.state
    return (
      <Search
        placeholder='Customer Name Search'
        loading={isLoading}
        onResultSelect={this.handleResultSelect}
        onSearchChange={this.handleSearchChange}
        onKeyPress={this.handleKeyEnter}
        results={results}
        value={searchValue}
        //{...this.props}
      />
    )
  };

  render() {
    const {customerName, callType, callDescription, hardwareInvolved} = this.state
    return (
      <Grid>
        <Grid.Column computer={4}>
            <Header as='h1' textAlign='center'>Log New</Header>
            <Form>
              <Form.Field>
                {/* <this.nameInput/> */}
                <this.searchField/>
              </Form.Field>
              <Form.Field>
                <Input
                  placeholder='Customer ID'
                  type='text'
                  name='cust_id'
                  labelPosition='left'
                  onChange={this.handleChange}
                  value={this.state.cust_id}
                  // required='true'
                />
              </Form.Field>
              <Form.Field>
                <Input
                  placeholder='Main Organization'
                  type='text'
                  name='cust_org'
                  labelPosition='left'
                  onChange={this.handleChange}
                  value={this.state.cust_org}
                  // required='true'
                />
              </Form.Field>
              <Form.Field>
                <Input
                  placeholder='Main Site'
                  type='text'
                  name='cust_site'
                  labelPosition='left'
                  onChange={this.handleChange}
                  value={this.state.cust_site}
                  // required='true'
                />
              </Form.Field>
              <Form.Field>
                <select
                  className="ui dropdown"
                  placeholder='Call Type'
                  type='text'
                  name='callType'
                  onChange={this.handleChange}
                  value={this.state.callType}
                  //onBlur={this.handleBlur}
                  // required='true'
                >
                  <this.DropOptions/>
                </select>
              </Form.Field>
              <Form.Field>
                <textarea
                  placeholder='Call Description'
                  className='area'
                  rows='2'
                  type='textArea'
                  name='callDescription'
                  onChange={this.handleChange}
                  value={this.state.callDescription.value}
                  //onBlur={this.handleBlur}
                  // required='true'
                ></textarea>
              </Form.Field>
              <Form.Field>
                <Input
                  placeholder='Hardware Involved'
                  type='text'
                  name='hardwareInvolved'
                  onChange={this.handleChange}
                  value={this.state.hardwareInvolved.value}
                  //onBlur={this.handleBlur}
                  // required={false}
                />
              </Form.Field>
              <Form.Field>
                <Button
                  onClick={this.handleClickSubmit}
                  value=' submit'
                >Submit</Button>
                <Button
                  onClick={this.handleClick}
                  value='printState'
                >Print State</Button>
              </Form.Field>
            </Form>
        </Grid.Column>
        <Grid.Column>
          {/*<this.autoFill/>*/}
        </Grid.Column>
      </Grid>
    );
  }
}

export default LogNewCall;
