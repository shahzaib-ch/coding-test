import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './../index.css';
import img from './../images/img.jpg';

class MovieContent  extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="content">
        <div className="detail">
          <div className="property">
            <p className="label">Title:</p>
            <p className="detail-text"><b>{this.props.data.Title}</b></p>
          </div>
          <div className="property">
            <p className="label">Released:</p>
            <p className="detail-text">{this.props.data.Released}</p>
          </div>
          <div className="property">
            <p className="label">Runtime:</p>
            <p className="detail-text">{this.props.data.Runtime}</p>
          </div>
          <div className="property">
            <p className="label">Writer:</p>
            <p className="detail-text">{this.props.data.Writer}</p>
          </div>
          <div className="property">
            <p className="label">Actors:</p>
            <p className="detail-text">{this.props.data.Actors}</p>
          </div>
          <div className="property">
            <p className="label">ImdbRating:</p>
            <p className="detail-text">{this.props.data.imdbRating}</p>
          </div>
          <div className="property">
            <p className="label">Imdb ID:</p>
            <p className="detail-text">{this.props.data.imdbID}</p>
          </div>
          <div className="property">
            <p className="label">Genre:</p>
            <p className="detail-text">{this.props.data.Genre}</p>
          </div>
          <div className="property">
            <p className="label">Language:</p>
            <p className="detail-text">{this.props.data.Language}</p>
          </div>
          <div className="property">
            <p className="label">Awards:</p>
            <p className="detail-text">{this.props.data.Awards}</p>
          </div>
          <div className="property">
            <p className="label">Plot:</p>
            <p className="detail-text">{this.props.data.Plot}</p>
          </div>

        </div>
        <img src={this.props.data.Poster} alt="movie image"/>
      </div>
    );
  }
}

export default MovieContent;
