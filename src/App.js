import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Search from './components/Search';
import About from './components/About';
import Header from './components/Header';
import GambarGraf from './components/GambarGraf'; 
import './App.css';

class App extends Component {
  state = {
    id: null,
    // Pass Id
    person: null
  };
  
  GetPersonWithID = async () => {
    const temp = await fetch("https://avatar.labpro.dev/friends/" + this.state.id, {
      method: "GET"
    });
    const json = await temp.json();
    if (json.status === 200) this.setState({ person: json });
  };

  giveId = async title => {
    console.log('masuk input: ', title);
    if (title === '') return;
    let temp = parseInt(title);
    if (title == temp) {
      console.log('masuk', temp);
      await this.setState({ id: temp });
    } else {
    }
    console.log('accepted request: ', this.state.id);
    this.GetPersonWithID();
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <Search giveId={this.giveId} />
                  <GambarGraf id={this.state.id} person={this.state.person} />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}


export default App;
