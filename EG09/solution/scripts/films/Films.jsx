import React from 'react';
import { Link } from 'react-router';
import FilmLinks from './FilmLinks';

export default class Films extends React.Component {
  render() {
    return (
      <div>
        <h2>A long time ago in a galaxy far, far way...</h2>
        <FilmLinks />
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
