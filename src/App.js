import React from "react";
import "./App.css";
import MovieRow from "./MovieRow";
import $ from "jquery";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    //this.performSearch(searchTerm);
  }

  performSearch(searchTerm) {
    const urlString =
      "https://api.themoviedb.org/3/search/movie?&api_key=da17eed40cc1258d79d206c8a72880dc&language=en-US&page=1&include_adult=false&query=" +
      searchTerm;
    $.ajax({
      url: urlString,
      success: searchResults => {
        console.log("Fetched data successfully");

        const results = searchResults.results;
        console.log(results[0]);
        let movieRows = [];

        results.forEach(movie => {
          //console.log(movie.title);
          const movieRow = <MovieRow key={movie.id} movie={movie} />;
          movieRows.push(movieRow);
        });

        this.setState({
          rows: movieRows
        });
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data");
      }
    });
    console.log("MoviesDB Search Performed");
  }

  searchChangeHandler(event) {
    console.log(event.target.value);
    const searchTerm = event.target.value;
    this.performSearch(searchTerm);
  }

  render() {
    return (
      <div className="App">
        <table className="titleBar ">
          <tbody>
            <tr>
              <td>
                <img alt="app icon" src="" />
              </td>
              <td width="8" />
              <td>
                <h3>MoviesDB Search</h3>
              </td>
            </tr>
          </tbody>
        </table>

        <input
          style={{
            fontSize: 24,
            display: "block",
            width: "99%",
            paddingTop: 8,
            paddingBottom: 8,
            paddingLeft: 16
          }}
          placeholder="Enter search term"
          onChange={this.searchChangeHandler.bind(this)}
        />
        {this.state.rows}
      </div>
    );
  }
}

export default App;
