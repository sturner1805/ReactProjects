import React from 'react';
import { Footer } from './main/Footer';
import { Header } from './main/Header';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main className="row">
            {this.props.children}
        </main>
        <Footer />
      </div>
    );
  }
}
