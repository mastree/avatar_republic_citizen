import React, { Component } from 'react';
import Search from './components/Search';
import Header from './components/Header';
import GambarGraf from './components/GambarGraf'; 
import axios from 'axios';

class App extends Component {
  state = {
    id: null,
    person: null,
    activeLink: {},
    activeNode: {},
    personalInfo: {},
    data: {
      nodes: [],
      links: [],
    },
  };
  componentDidMount(){
    document.title = "Avatar Suspect Expander";
  }
  
  getColor(elem) {
    if (elem === "fire") return "red";
    else if (elem === "water") return "blue";
    else if (elem === "air") return "#b2f2ec";
    return "yellow";
  };

  linkToString(link) {
    let a = Math.min(link.source, link.target);
    let b = Math.max(link.source, link.target);
    return a + " " + b;
  }

  giveId = async title => {
    if (title === '') return;
    let temp = parseInt(title);
    if (title == temp) {
      await this.setState({ id: temp });
    } else return;
    this.updateGraph();
  };

  giveNewId = async title => {
    if (title === '') return;
    let temp = parseInt(title);
    if (title == temp) {
      await this.setState({ id: temp });
    } else return;
    this.newGraph();
  };

  newGraph = () => {
    axios.get("https://avatar.labpro.dev/friends/" + this.state.id)
      .then(res => {
        if (res.data.status === 200) {
          let pl = res.data.payload;
          this.setState({ activeLink: {} });
          this.setState({ activeNode: {} });
          this.setState({ personalInfo: {} });
          this.setState({ data: {nodes: [], links: []} });
  
          let nodes = [];
          let links = [];
          let sc = { id: pl.id, name: pl.name, element: pl.element };
          nodes.push(sc);
          let len = pl.friends.length;
          for (let i=0;i<len;i++) {
            let friend = pl.friends[i];
            nodes.push(friend);
            links.push({ source: sc.id, target: friend.id });
          }

          let nactiveLink = this.state.activeLink;
          let nactiveNode = this.state.activeNode;
          let npersonalInfo = this.state.personalInfo;
          let ndata = this.state.data;
          
          len = nodes.length;
          for (let i=0;i<len;i++) {
            let node = nodes[i];
            if (nactiveNode[node.id]) continue;
            nactiveNode[node.id] = true;
            npersonalInfo[node.id] = node;
            ndata.nodes.push({ id: node.id, color: this.getColor(node.element) });
          }
          len = links.length;
          for (let i=0;i<len;i++) {
            let link = links[i];
            let slink = this.linkToString(link);
            if (nactiveLink[slink]) continue;
            nactiveLink[slink] = true;
            ndata.links.push(link);
          }
          this.setState({ activeLink: nactiveLink });
          this.setState({ activeNode: nactiveNode });
          this.setState({ personalInfo: npersonalInfo });
          this.setState({ data: ndata });
        }
      })
      .catch((error) =>{
        console.log(error);
      });
  };
  updateGraph = () => {
    axios.get("https://avatar.labpro.dev/friends/" + this.state.id)
      .then(res => {
        if (res.data.status === 200) {
          let pl = res.data.payload;
  
          let nodes = [];
          let links = [];
          let sc = { id: pl.id, name: pl.name, element: pl.element };
          nodes.push(sc);
          let len = pl.friends.length;
          for (let i=0;i<len;i++) {
            let friend = pl.friends[i];
            nodes.push(friend);
            links.push({ source: sc.id, target: friend.id });
          }

          let nactiveLink = this.state.activeLink;
          let nactiveNode = this.state.activeNode;
          let npersonalInfo = this.state.personalInfo;
          let ndata = this.state.data;
          
          len = nodes.length;
          for (let i=0;i<len;i++) {
            let node = nodes[i];
            if (nactiveNode[node.id]) continue;
            nactiveNode[node.id] = true;
            npersonalInfo[node.id] = node;
            ndata.nodes.push({ id: node.id, color: this.getColor(node.element) });
          }
          len = links.length;
          for (let i=0;i<len;i++) {
            let link = links[i];
            let slink = this.linkToString(link);
            if (nactiveLink[slink]) continue;
            nactiveLink[slink] = true;
            ndata.links.push(link);
          }
          this.setState({ activeLink: nactiveLink });
          this.setState({ activeNode: nactiveNode });
          this.setState({ personalInfo: npersonalInfo });
          this.setState({ data: ndata });
        }
      })
      .catch((error) =>{
        console.log(error);
      });
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <Search giveId={this.giveNewId} />
        <GambarGraf giveId={this.giveId} personalInfo={this.state.personalInfo} data={this.state.data} />
      </React.Fragment>
    );
  }
}


export default App;