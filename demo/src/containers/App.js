import React, { Component } from 'react';
import Header from './../components/header';
import TicketList from './../components/ticketlist';
import Filter from './../components/filter';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <main className="main">
          <div className="sidebar">
            <Filter />
          </div>
          <div className="content">
            <TicketList />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
