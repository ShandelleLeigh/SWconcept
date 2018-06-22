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
  };

  AutoBoxes = () => {
    let value = 'value';
    const items = [
      {name:'Job Role', value:'job_role', type: 'text', as:'input'},
      {name:'Start Date', value:'start_date', type: 'text', as:'input'},
      {name:'Active Requests', value:'active_requests', type: 'text', as:'input'},
      {name:'Closed Requests', value:'closed_requests', type: 'text', as:'input'},
      {name:'Assessment', value:'assessment', type: 'text', as:'input'},
      {name:'Preferred Tel. No', value:'pref_tel_no', type: 'text', as:'input'},
      {name:'Preferred Email', value:'pref_email', type: 'text', as:'input'}
    ];
    return items.map(item => {
      let name = item.name
      let value = item.value
      let type = item.type
      return (
        <Form.Field>
          <Input
            type='text'
            key={name}
            placeholder={name}
            name={name}
            // value={value}
          />
        </Form.Field>
      )
    })
  }

  MoreAutoBoxes = () => {
    let value = 'value';
    const items = [
      {name:'Main Organization', value:'main_org', type: 'text', as:'input'},
      {name:'Main Site', value:'main_site', type: 'text', as:'input'},
      {name:'Charge Center', value:'charge_center', type: 'text', as:'input'},
    ];
    return items.map(item => {
      let name = item.name
      let value = item.value
      let type = item.type
      return (
        <Form.Field>
          <Input
            type='text'
            key={name}
            placeholder={name}
            name={name}
            // value={value}
          />
        </Form.Field>
      )
    })
  }


  AutoDropBoxes = () => {
    let handleOpChange = (e) => {
      this.setState =({ [items.name]: [items.options.value]})
    }
    const items = [
      {name:'SLA', value:'sla', options: [
          {name:'SLA', value:''},
					{name:'HR', value:'HR'},
					{name:'Hardware', value:'Hardware'},
					{name:'Problem Management', value:'Problem Management'},
        ]},
      {name:'Impact', value:'impact', options: [
          {name:'Impact', value:''},
          {name:'None', value:'none'},
          {name:'Low', value:'low'},
          {name:'Medium', value:'medium'},
          {name:'High', value:'high'},
          {name:'Critical', value:'critical'},
        ]},
      {name:'Urgency', value:'urgency', options: [
          {name:'none', value:'none'},
          {name:'low', value:'low'},
          {name:'medium', value:'medium'},
          {name:'high', value:'high'},
          {name:'extreme', value:'extreme'},
        ]},
      {name:'Origin', value:'origin', options: [
          {name:' ', value:' '},
          {name:'AutoResponder', value:'AutoResponder'},
          {name:'Email', value:'Email'},
          {name:'Event', value:'Event'},
          {name:'SelfService', value:'SelfService'},
          {name:'Telephone', value:'Telephone'},
        ]},
      {name:'Contract', value:'contract', options: [
          {name:' ', value:' '},
          {name:'Part of Contract', value:'Part of Contract'},
          {name:'Out of Contract', value:'Out of Contract'},
        ]},
      {name:'Process', value:'process', options: [
          {name:' ', value:' '},
          {name:'HVAC', value:'HVAC'},
        ]},
    ];

    return items.map(item => {
      let name = item.name
      let value = item.value
      let type = item.type
      return (
        <Form.Field>
          <select
            key={name}
            className="ui dropdown"
            type='text'
            name={name}
            // value={name}
            onChange={this.handleOpChange}
          > {
            item.options.map(option => {
              let name = option.name
              let value = option.value
              let enabled = option.enabled
              let index = option.index
              return (
                <option
                  key={name + index + 1}
                  // value={value}
                  name={name}
                  label={name}
                  onClick={this.handleItemClick}
                  enabled={enabled}
                  onChange={this.handleOpChange}
                >{name}</option>
              )
            })
          }
          </select>
        </Form.Field>
      )
    })
  };

  AssessmentIcon = () => {
    let name = 'Overall satisfaction undetermined'
    let value = 'orange'
    return (
      <Form.Field>
        <Image
          as='icon'
          // value={value}
          name={name}
          label={name}
        >{name}</Image>
      </Form.Field>
    )
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

  resetComponent = () => this.setState({
    isLoading: false, results: [], searchValue: ''
  });

  //handleResultSelect = (e, { result }) => this.setState({ value: result.title })
  searchResults = [];
  handleResultSelect = (e, { result }) => {
    console.log(result)
    // let result.
    this.resetComponent
    this.setState({ searchValue: result.title })
  };

  //TODO: make debouce/timeout method to delay quering db until pause in typing.
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
        <Grid.Row style={styles.littleSpace}>
          <Header as='h1' textAlign='center' style={styles.littleSpace}>Log New Call</Header>
        </Grid.Row>

        <Grid.Row style={styles.noSpace}>
          <Grid.Column style={styles.noRightSpace} computer={4} tablet={8} mobile={16}>
            <Segment>
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
                {/*
                <Form.Field>
                  <Input/>
                </Form.Field>
                <Form.Field>
                  <Input/>
                </Form.Field>
                */}
                <Form.Field>
                  <select
                    className="ui dropdown"
                    placeholder='Call Type'
                    type='text'
                    name='callType'
                    onChange={this.handleChange}
                    value={this.state.callType}
                    //onBlur={this.handleBlur}
                  >
                    <this.DropOptions/>
                  </select>
                </Form.Field>
                <Form.Field>
                  <textarea
                    placeholder='Call Summary'
                    className='area'
                    rows='1'
                    type='textArea'
                    name='callSummary'
                    onChange={this.handleChange}
                    // value={this.state.callSummary.value}
                    //onBlur={this.handleBlur}
                    required='true'
                  ></textarea>
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
                <this.AutoDropBoxes/>
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
            </Segment>
          </Grid.Column>
          <Grid.Column style={styles.noRightSpace, styles.noLeftSpace} computer={4} tablet={8} mobile={16}>
            <Segment><Form>
              <this.AutoBoxes/>
              <this.MoreAutoBoxes/>
            </Form></Segment>
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

export default LogNewCall;
