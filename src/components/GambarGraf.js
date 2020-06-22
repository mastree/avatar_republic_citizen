import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Graph } from "react-d3-graph";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';

const useStyles = (theme) => ({
  paper: {
    // maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
});

class GambarGraf extends Component {
  state = {
    hoverOn: null
  };
  
  renderIdentity(elem){
    const { classes } = this.props;
    return (
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar></Avatar>
          </Grid>
          <Grid item xs>
            <Typography>
              ID: { elem.id }<br/>
              NAME: { elem.name }<br/>
              ELEMENT: { elem.element }<br/>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    );
  }

  allFriend() {
    return this.props.person.payload.friends.map((friend, i) => (
      <li key={i}>     
        { this.renderIdentity(friend) }
      </li>
    ));
  }
  getColor(elem) {
    // let elem = e.element;
    if (elem == "fire") return "red";
    else if (elem == "water") return "blue";
    else if (elem == "air") return "#b2f2ec";
    return "yellow";
  };
  hoveredNode() {
    if (this.state.hoverOn === null) return <div></div>;
    return (
      <React.Fragment>
        {/* { this.state.hoverOn.id }<br/>
        { this.state.hoverOn.name }<br/>
        { this.state.hoverOn.element }<br/> */}
        {this.renderIdentity(this.state.hoverOn)}
      </React.Fragment>
    );
  };

  // Graph onAction
  onClickNode = function(nodeId) {
    this.props.giveId(nodeId);
  };
  onMouseOverNode = function(nodeId) {
    let len = this.props.person.payload.friends.length;
    let temp = null;
    for (let i=0;i<len;i++) {
      if (this.props.person.payload.friends[i].id == nodeId) temp = this.props.person.payload.friends[i];
    }
    if (temp === null) {
      temp = {
        id: this.props.person.payload.id,
        name: this.props.person.payload.name,
        element: this.props.person.payload.element,
      };
    }
    this.setState({ hoverOn: temp })
  };
  
  render() {
    if (this.props.person) {
      let data = {
          nodes: [],
          links: [],
          // focusedNodeId: "nodeIdToTriggerZoomAnimation",
      };
      data.nodes.push(
        { 
          id: this.props.person.payload.id, 
          color: this.getColor(this.props.person.payload.element),  
        }
        );
      let len = this.props.person.payload.friends.length;
      for (let i=0;i<len;i++) {
        data.nodes.push(
          { 
            id: this.props.person.payload.friends[i].id,
            color: this.getColor(this.props.person.payload.friends[i].element),
          }
          );
        data.links.push({ source: this.props.person.payload.id, target: this.props.person.payload.friends[i].id });
      }
      const myConfig = {
          nodeHighlightBehavior: true,
          highlightDegree: 1,
          linkHighlightBehavior: false,
          automaticRearrangeAfterDropNode: true,
          node: {
            size: 300,
            highlightStrokeColor: "black",
            highlightStrokeWidth: 2,
          },
          link: {
            color: "black",
            highlightColor: "lightblue",
          },
          minZoom: 1,
          maxZoom: 1,
          width: 600,
          height: 400,
          transision: 100,
      };
      const curNode = {
        id: this.props.person.payload.id,
        name: this.props.person.payload.name,
        element: this.props.person.payload.element,
      }
      return (
        <React.Fragment>
          <div style={{ width: '100%' }}>
            <Box display="flex" flexDirection="row" p={1} m={1} bgcolor="background.paper">
              <Box p={1}>
                <Box display="flex" flexDirection="column" p={1} m={1} bgcolor="background.paper">
                  <Box p={1} bgcolor="grey.100">
                    <Graph
                      id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
                      data={data}
                      config={myConfig}
                      onClickNode={this.onClickNode.bind(this)}
                      // onDoubleClickNode={this.onDoubleClickNode}
                      // onRightClickNode={this.onRightClickNode}
                      // onClickGraph={this.onClickGraph}
                      // onClickLink={this.onClickLink}
                      // onRightClickLink={this.onRightClickLink}
                      onMouseOverNode={this.onMouseOverNode.bind(this)}
                      // onMouseOutNode={this.onMouseOutNode}
                      // onMouseOverLink={this.onMouseOverLink}
                      // onMouseOutLink={this.onMouseOutLink}
                      // onNodePositionChange={this.onNodePositionChange}
                    />
                  </Box>
                  <Box p={1}>
                    { this.hoveredNode() }
                  </Box>
                </Box>
              </Box>
              <Box p={1}>
                <Box display="flex" flexDirection="column" p={1} m={1} bgcolor="grey.300">
                  <Box p={1}>
                    { this.renderIdentity(curNode) }
                    <Typography variant="h5">Friend List</Typography>
                  </Box>
                  <Box p={1} bgcolor="grey.700">
                    <List style={{maxHeight: 600, overflow: 'auto'}}>
                      <ul style={{ listStyleType: "none" }}>
                        { this.allFriend() }
                      </ul>
                    </List>
                  </Box>
                </Box>
              </Box>
              
            </Box>
          </div>
        </React.Fragment>
      );
    } else {
      console.log('masukelse');
      return <div></div>;
    }
  }
}

export default withStyles(useStyles)(GambarGraf);