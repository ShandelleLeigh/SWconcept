import React, { Component, Fragment, } from 'react';
//import { withRouter } from 'react-router-dom';
//import { connect } from 'react-redux';
import {
    Header, Button, Grid, Input,
    Form, option,
  } from 'semantic-ui-react';
//import logNewCall from '../../actions/calls.js';


class LogNewCall extends Component{
  state = {
    call:'', action:'', validity: false,
    customerName: '', callType:'',
    callDescription:'', hardwareInvolved:'',
  };

  // validations = () => {
  //   if (value != '' ){
  //     alert('Fill out required fields')
  //   } else {
  //     this.setState({validations: true})
  //     alert('Requirements met')
  //   }
  //   console.log('validation')
  // }
  callString = '';

  autoFill = () => {
    let fields = [
      {cust_id: 'AnnaB', cust_name: 'Anna Bishop', companyname: 'Ares Computer Services', site: 'London'  },
      {cust_id: 'lenam', cust_name: 'Lena Mikkelsson', companyname: 'Ares Computer Services', site: 'London'  },
      {cust_id: 'stever', cust_name: 'Steve Robinson', companyname: 'Ares Computer Services', site: 'London'  },
      {cust_id: 'mikeS', cust_name: 'Michaels S', companyname: 'Ares Computer Services', site: 'London'  },

    ];

    return fields.map( field =>
      <Fragment>
        <textbox
          key={field.cust_id}
          value={field.cust_id}
          name={field.cust_id} />
        <textbox
          key={field.cust_id}
          value={field.companyname}
          name={field.companyname} />
        <textbox
          key={field.cust_id}
          value={field.site}
          name={field.site} />
      </Fragment>
    )
  };

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
    return(
    <p>{this.callString}</p>
    )
  }

  handleChange = (e ) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.name+' '+e.target.value);
  }

  handleBlur = (e ) => {
    console.log("on blur")
  }

  handleClick = (e) => {
    // let validations = this.state.validations
    // this.state.action = 'save'
    // validations === true ?
    // console.log(this.state) :
    // console.log('validations not met. '+ this.state.hardwareInvolved)
    this.getFormText();
  }

  saveCall = (e) => {
    e.preventDefault();
    if( this.state.call === 'new' ){
      //logNewCall();
    }
      return(
        <Fragment>
          {this.getFormText}
        </Fragment>
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

  render() {
    const {customerName, callType, callDescription, hardwareInvolved} = this.state
    return (
      <Grid>
        <Grid.Column computer={4}>
            <Header as='h1' textAlign='center'>Log New</Header>
            <Form>
              <Form.Field>
                <Input
                  placeholder='Customer Name'
                  icon='user circle outline'
                  type='text'
                  name='customerName'
                  labelPosition='left'
                  onChange={this.handleChange}
                  value={this.state.customerName}
                  //onBlur={this.handleBlur}
                  required='true'
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
                  required='true'
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
                  required='true'
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
                  required={false}
                />
              </Form.Field>
              <Form.Field>
                <Button
                  onClick={this.handleClick}
                  value='save'
                >Save</Button>
              </Form.Field>
            </Form>
        </Grid.Column>
        <Grid.Column>
          {/* }{this.autoFill} */}
        </Grid.Column>
      </Grid>
    );
  }
}

const styles = {
  //someStyle: {
  //  marginRight: '0',
  //  }
}



export default LogNewCall;
