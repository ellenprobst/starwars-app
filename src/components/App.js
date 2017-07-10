import React, { Component } from 'react';
import { ajax } from 'jquery';
import Selection from './selectionDisplay.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      searchResult: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.getData = this.getData.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.currentTarget.value
    });
  }

  getData(e) {
    e.preventDefault();
    ajax({
      url: `http://swapi.co/api/${this.state.category}/?search=${this.state.search}`,
    })
    .then((data) => {
      this.setState({
        searchResult: data.results
      })
    })
  }

  

  render() {
    return (
      <div className="App">
        <h1>Starwars API demo</h1>
        <div className="search">
          <p>I'm looking for: </p>
          <form onSubmit={this.getData}>       
            <Selection value={ "people" } checked={ this.state.category } change={ this.handleChange }/>
            <Selection value={ "planets" } checked={ this.state.category } change={ this.handleChange }/>
            <Selection value={ "starships" } checked={ this.state.category } change={ this.handleChange }/>
            <input type="text" name="search" onChange={this.handleChange}/>
            <button>Go!</button>
          </form>
        </div>
        <div className="results">Results</div>
        <div className="details"></div>
      </div>

    );
  }
}

export default App;
