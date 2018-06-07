import React, { Component, Fragment,  } from 'react';
import { Header, Grid, Segment, option, Search } from 'semantic-ui-react';
import _ from 'lodash';
import { connect } from 'react-redux';


class SearchField extends Component {
  state = {
    isLoading: false, results: [], searchValue: '',
  };

  componentDidMount () {
    // Search.addEventListener("onSearchChange", _.debounce(this.handleSearchChanges, 5000, {leading: true}) )
  }

  callString = '';

  searchResults = [];
  resetComponent = () => this.setState({ isLoading: false, results: [], searchValue: '' })
  handleResultSelect = (e, { result }) => {
    console.log(result)
    // let result.
    // this.setState({ searchValue: result.title })
  }

  debounceThis = (e) => {
    this.setState({serachValue: e.target.value})
    _.debounce(this.handleSearchChange(), 5000, {leading: true})
  }

  handleSearchChange = () => {
  this.setState({isLoading: true,
    // searchValue: e.target.value
  })
  console.log('Querying for Cust Data');
    // getCustomerData(e.target.value).then(
    //   response => {
    //     console.log(response);
    //     this.searchResults = response.data;
    //     this.setState({results: this.searchResults, isLoading: false})
    //   }
    // )
};

  render() {
    const { isLoading, searchValue, results } = this.state
    return (
      <Fragment>
      <Search
        placeholder='Customer Name Search'
        loading={isLoading}
        onResultSelect={this.handleResultSelect}
        onSearchChange={this.setState({searchValues: this.value})}
        onSearchChange={ _.debounce(this.handleSearchChanges, 5000, {leading: true}) }
        results={results}
        value={searchValue}
        //{...this.props}
      />
      </Fragment>
    )
  };
};


const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    results: state.results,
    searchValue: state.searchValue,
  }
}

export default connect(mapStateToProps)(SearchField)
