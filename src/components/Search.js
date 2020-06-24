import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class Search extends Component {
  state = {
    title: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.giveId(this.state.title);
    console.log("submit");
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
      return (
        <React.Fragment>
          <form onSubmit={this.onSubmit} style={searchStyle}>
            <TextField
              id="inputField"
              name="title"
              label="Masukkan id citizen.."
              fullWidth
              variant="outlined"
              value={this.state.title}
              onChange={this.onChange}
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
            >
              { 'Search' }
            </Button>
          </form>
        </React.Fragment>
      )
  }
}

const searchStyle = {
  padding: '10px',
}

export default Search;