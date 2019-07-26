import React from "react";
import "./App.css";
import MovieRow from "./MovieRow";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("this is a initializer");

    const movies = [
      { id: 0, title: "Avengers: Infinity War" },
      { id: 1, title: "Avengers: EndGame" }
    ];

    var movieRows = [];
    movies.forEach(movie => {
      console.log(movie.title);
      const movieRow = <MovieRow movie={movie} />;
      movieRows.push(movieRow);
    });

    this.state = {
      rows: movieRows
    };
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
        />
        {this.state.rows}
      </div>
    );
  }
}

export default App;
