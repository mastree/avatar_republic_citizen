import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import { Graph } from "react-d3-graph";

class GambarGraf extends Component {
  // graph payload (with minimalist structure)
  // constructor(){
  //   super();
    // const data = {
    //     nodes: [{ id: "Harry" }, { id: "Sally" }, { id: "Alice" }],
    //     links: [
    //         { source: "Harry", target: "Sally" },
    //         { source: "Harry", target: "Alice" },
    //     ],
    // };
    
    // the graph configuration, you only need to pass down properties
    // that you want to override, otherwise default ones will be used
    // const myConfig = {
    //     nodeHighlightBehavior: true,
    //     node: {
    //         color: "lightgreen",
    //         size: 120,
    //         highlightStrokeColor: "blue",
    //     },
    //     link: {
    //         highlightColor: "lightblue",
    //     },
    // };
    
    // // graph event callbacks
    // const onClickGraph = function() {
    //     window.alert(`Clicked the graph background`);
    // };
    
    // const onClickNode = function(nodeId) {
    //     window.alert(`Clicked node ${nodeId}`);
    // };
    
    // const onDoubleClickNode = function(nodeId) {
    //     window.alert(`Double clicked node ${nodeId}`);
    // };
    
    // const onRightClickNode = function(event, nodeId) {
    //     window.alert(`Right clicked node ${nodeId}`);
    // };
    
    // const onMouseOverNode = function(nodeId) {
    //     window.alert(`Mouse over node ${nodeId}`);
    // };
    
    // const onMouseOutNode = function(nodeId) {
    //     window.alert(`Mouse out node ${nodeId}`);
    // };
    
    // const onClickLink = function(source, target) {
    //     window.alert(`Clicked link between ${source} and ${target}`);
    // };
    
    // const onRightClickLink = function(event, source, target) {
    //     window.alert(`Right clicked link between ${source} and ${target}`);
    // };
    
    // const onMouseOverLink = function(source, target) {
    //     window.alert(`Mouse over in link between ${source} and ${target}`);
    // };
    
    // const onMouseOutLink = function(source, target) {
    //     window.alert(`Mouse out link between ${source} and ${target}`);
    // };
    
    // const onNodePositionChange = function(nodeId, x, y) {
    //     window.alert(`Node ${nodeId} is moved to new position. New position is x= ${x} y= ${y}`);
    // };
  // }
  state = {
    hoverOn: null
  };
  render

  allFriend() {
    return this.props.person.payload.friends.map((friend, i) => (
      <li key={i}>     
        { friend.id }<br/>
        { friend.name }<br/>
        { friend.element }<br/>
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
        { this.state.hoverOn.id }<br/>
        { this.state.hoverOn.name }<br/>
        { this.state.hoverOn.element }<br/>
      </React.Fragment>
    );
  }

  // Graph onAction
  onMouseOverNode = function(nodeId) {
      // window.alert(`Mouse over node ${nodeId}`);
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
          // focusedNodeId: 1,
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
          // automaticRearrangeAfterDropNode: true,
          node: {
              color: "lightgreen",
              size: 120,
              highlightStrokeColor: "blue",
          },
          link: {
              highlightColor: "lightblue",
          },
          minZoom: 1,
          maxZoom: 2,
          focusZoom: 2,
      };
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
                      // onClickNode={this.onClickNode}
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
                  <Box p={1} bgcolor="grey.300">
                    { this.hoveredNode() }
                  </Box>
                </Box>
              </Box>
              <Box p={1} bgcolor="grey.300">
                { this.props.person.payload.id }<br/>
                { this.props.person.payload.name }<br/>
                { this.props.person.payload.element }<br/>
                { this.allFriend() }
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

export default GambarGraf;