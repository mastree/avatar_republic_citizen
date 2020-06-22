import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import { green } from '@material-ui/core/colors';

export class Search extends Component {
  state = {
    title: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.giveId(this.state.title);
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