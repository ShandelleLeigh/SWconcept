import React, { Component, Fragment } from 'react';
import { Grid, Segment, Menu, Header, Divider } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';

class LeftNav extends Component {
  state = { activeItem: 'dash', name: 'dash' }

  handleItemClick = (e, { name }) => {
    this.state.activeItem = {name}
    console.log(this.state.activeItem)
  }

  menuItems = () => {
    const items = [
      {name:'home', path:'/'},
      {name:'dash', path:'/'},
      {name:'calls', path:'/calls'},
      {name:'fourth', path:'/'},
      {name:'fifth', path:'/'},
    ]
    return items.map(item => {
      let name = item.name
      return (
        <Menu.Item
          key={name}
          as={Link} to={item.path}
          name={name}
          onClick={this.handleItemClick}
        />
      )
    })
  }

  render() {
    return (
      <Fragment>
          <Menu vertical fluid pointing >
            {this.menuItems()}
          </Menu>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    activeItem: state.activeItem,
  }
}

export default connect(mapStateToProps)(LeftNav);
