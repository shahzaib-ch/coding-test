import React, { Component } from 'react';
import Toggle from './components/ToggleButton';
import './App.css';
import './index.css';
import MovieContent from './components/MovieContent';
import UpcomingMoviesList from './components/UpcomingMoviesList';
import { withRouter } from 'react-router-dom';
import Row from './components/Row';
import ReactDom from 'react-dom';

const LoadMovieContent = (props) => {
    if(props.movieData != undefined && props.movieData.Response !== "False"){
      return (<MovieContent data={props.movieData}/>);
    }else {
      return (<p className="error">Movie not found!</p>);
    }
};

class App extends Component {

  // constructor
  constructor(props){
    super(props)
    this.state = {
      searchValue: "",
      value: false,
      movieData: null,
      similiarMovies: null
    };
  }

  //search using omdb api
  search = () => {
    const api_key = 'e4e6936b';
    var url = `https://www.omdbapi.com/?t=${this.state.searchValue}&apikey=${api_key}`;
    // check if it is id
    if(this.state.value){
      url = `https://www.omdbapi.com/?i=${this.state.searchValue}&apikey=${api_key}`;
    }
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({ movieData:data });
        this.findMovieByID  ();
      })
      .catch(e => {
        console.log('error', e);
        alert(e);
      });
    console.log(this.state.movieData);
  }

  findMovieByID() {
    const api_key = '6732eb841e1056100ab93412a4d5ef84';
    var url = `https://api.themoviedb.org/3/find/${this.state.movieData.imdbID}?api_key=${api_key}&language=en-US&external_source=imdb_id`;
    console.log(url);
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if(data.movie_results.length > 0){
        this.getSimiliarMovies(data.movie_results[0].id);
       }
      }).catch(e => {
        console.log('error', e);
        this.setState({similiarMovies: null});
        alert(e);
      });
  }

  getSimiliarMovies(id) {
    const api_key = '6732eb841e1056100ab93412a4d5ef84';
    var url = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${api_key}&language=en-US&page=1`;
    console.log(url);
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({similiarMovies: data.results});
      }).catch(e => {
        console.log('error', e);
        this.setState({similiarMovies: null});
        alert(e);
      });
  }

 // handling events
  handleSearchValueChange = event => {
    this.setState({searchValue: event.target.value});
  }

  handleToggleValue = (value) => {
    this.setState({
      value: !value,
  });
}

handlePageChange =() => {
    this.props.history.push('/upcoming');
}

  render() {

    let similiarView;
    console.log(this.state.similiarMovies);
    if(this.state.similiarMovies === null || this.state.similiarMovies === undefined){
      similiarView = <p className="error"></p>;
    }else {
      similiarView =  (
         this.state.similiarMovies.map((movie, index) => (
         <Row movie={movie} key={movie.id}/>
         ))
       )
    }

    return (
      <div>
      <div className="header">
        <p className="header-title"><b>Want Movie Details?</b></p>
       <div className="form">
        <input type="text" name="name" placeholder="Search using IMDB ID or name of movie" onChange={this.handleSearchValueChange} value={this.state.searchValue}/>
        <Toggle handler = {this.handleToggleValue} status={this.state.value}/>
        <button onClick={this.search} > Search </button>
        <button className="upcomingBtn" onClick={this.handlePageChange}>Upcoming Movies</button>
       </div>
       </div>

       <div>
         { this.state.movieData == null? <p className="error">Search movie now !</p> : <LoadMovieContent movieData={this.state.movieData}/>  }
       </div>
       <div className="similiar-content">
         {this.state.similiarMovies == null? null:<h1 className="similiar-title">Similiar Movies</h1>}
         {similiarView}
       </div>
    </div>
  );
  }
}
export default withRouter(App);
