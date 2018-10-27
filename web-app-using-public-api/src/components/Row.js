import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './../index.css';

class Row extends Component {

  render() {
    if(this.props.movie !== null){
    return (
      <div className ="row" >
        <img className="movie-image" width="100px" height="150px" src={`${'https://image.tmdb.org/t/p/w300'}${this.props.movie.poster_path}`}/>
        <div className="movie-row-detail">
          <div className="row-property">
            <p className="row-label">Title:</p>
            <p className="row-detail-text"><b>{this.props.movie.title}</b></p>
          </div>
          <div className="row-property">
            <p className="row-label">Release date:</p>
            <p className="row-detail-text">{this.props.movie.release_date}</p>
          </div>
          <div className="row-property">
            <p className="row-label">Overview:</p>
            <p className="row-detail-text">{this.props.movie.overview}</p>
          </div>
        </div>
    </div>
    );
  }else {
    return(
      <div></div>
    );
  }
 }

}

export default Row;
