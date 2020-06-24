import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Graph } from "react-d3-graph";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

const useStyles = (theme) => ({
  paper: {
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
});
const myConfig = {
  node: {
    size: 300,
  },
  link: {
    color: "black",
    highlightColor: "lightblue",
  },
  minZoom: 1,
  maxZoom: 1,
  height: 400,
  d3: {
    linkLength: 100,
  },
};

class GambarGraf extends Component {
  state = {
    hoverOn: null,
    showList: null,
  };
  
  renderIdentity(elem){
    const { classes } = this.props;
    if (elem)
      return (
        <Paper className={classes.paper}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar></Avatar>
            </Grid>
            <Grid item xs>
              <Typography component="subtitle2" variant="button">
                ID: { elem.id }<br/>
                NAME: { elem.name }<br/>
                ELEMENT: { elem.element }<br/>
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      );
    else
      return (
        <Paper className={classes.paper}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar></Avatar>
            </Grid>
            <Grid item xs>
              <Typography>
                <br/>
                <br/>
                <br/>
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      );
  }
  onClickNode = (nodeId) => {
    this.props.giveId(nodeId);
  };
  onMouseOverNode = (nodeId) => {
    this.setState({ hoverOn: this.props.personalInfo[nodeId] })
    this.setState({ showList: nodeId });
  };
  
  render() {
    if (this.props.data.nodes.length === 0) return <div></div>;
      
    return (
      <React.Fragment>
        <div style={{ width: '100%', alignContent: 'center' }}>
        <Box p={1} alignContent="center">
          <Box display="flex" flexDirection="column" p={1} m={1} bgcolor="background.paper">
            <Box p={1}>
              { this.renderIdentity(this.state.hoverOn) }
            </Box>
            <Box p={1}>
              <Typography variant="body2" color="textSecondary" align="left">
                tips: click node to expand
              </Typography>
            </Box>
            <Box p={1} bgcolor="grey.100">
              <Graph
                id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
                data={this.props.data}
                config={myConfig}
                onClickNode={this.onClickNode}
                onMouseOverNode={this.onMouseOverNode}
              />
            </Box>
          </Box>
        </Box>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(useStyles)(GambarGraf);