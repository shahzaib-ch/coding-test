import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './../index.css';
import Row from './Row';

class UpcomingMoviesList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list:null
    };
  }

  componentDidMount(){
    this.getUpcomingMovies();
  }

  getUpcomingMovies() {
    const api_key = '6732eb841e1056100ab93412a4d5ef84';
    var url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({list: data});
      }).catch(e => {
        console.log('error', e);
        alert(e);
      });
  }

  render() {
    if(this.state.list !== null){
    return (
      <div className="upcoming-movies">
        <div className="header-upcoming">
          <p className="header-upcoming-title"><b>Upcoming Movies In Theatres</b></p>
        </div>
        <div className="content-upcoming">
         {
          this.state.list.results.map((movie, index) => (
            <Row movie={movie} key={movie.id}/>
            ))
          }
        </div>
      </div>
    );
  } else {
    return (
      <div className="upcoming-movies">
        <div className="header-upcoming">
          <p className="header-upcoming-title"><b>Upcoming Movies</b></p>
        </div>
        <div className="content-upcoming">
          <p className="error">Loading</p>
        </div>
      </div>
    );
  }
}
}

export default UpcomingMoviesList;
