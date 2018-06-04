import React, { Component } from 'react';
import { Menu, Header, Divider, Image, Grid, } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';

class NavBar extends Component {
  state = { call: ''}

  rightNavs = () => {
    const { user, dispatch, history } = this.props;

    if (user.id) {
      return (
        <Menu.Menu>
          <Menu.Item
            name='Logout'
            onClick={() => dispatch(handleLogout(history))}
            style={styles.right}
          />
        </Menu.Menu>
      );
    }
    return (
      <Menu.Menu>
        <Link to='/register'>
          <Menu.Item name='Register' style={styles.right}/>
        </Link>
        <Link to='/login'>
          <Menu.Item name='Login' style={styles.right}/>
        </Link>
      </Menu.Menu>
    );
  }

  render() {
    return (
      <div>
        <Menu pointing secondary>
          <Grid style={styles.width} computer={16}>
            <Grid.Column computer={8}>
              <Link to='/'>
                <img
                 style={styles.companyName}
                 src={process.env.PUBLIC_URL + 'btct_logo.png'}
                 src='/btct_logo.png'
                 alt='Company Logo'
              />
              </Link>
            </Grid.Column >
            <Grid.Column
             style={styles.controlledHeight}
             computer={8}>
              { this.rightNavs() }
            </Grid.Column>
          </Grid>
        </Menu>
      </div>
    );
  }
}

const styles = {
  companyName: {
    height: '33px',
    padding: '5px',
  },
  navBar: {
    height: '33px',
  },
  width: {
    width: '100%',
    margin: '0px',
    padding: '0px',
    height: '50px',
  },
  controlledHeight: {
    height: '10%',
    margin: '0px',
  },
  right: {
    align: 'right',
    float: 'right',
    justify: 'right',
    paddingRight: '10px',
    marginRight: '0px',
  },
  noSpace: {
    margin: '0',
    paddingLeft: '0',
  },
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));
