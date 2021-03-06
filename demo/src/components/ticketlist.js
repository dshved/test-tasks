import React, { Component } from 'react';

import axios from 'axios';

class TicketList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tickets: [],
      loading: true,
      error: null
    };
  }


  componentDidMount() {
    axios.get(`https://raw.githubusercontent.com/KosyanMedia/test-tasks/master/aviasales/tickets.json`)
      .then(res => {
        const tickets = res.data.tickets.sort(function (a, b) { return a.price - b.price;});

        this.setState({
          tickets,
          loading: false,
          error: null
        });
      })
      .catch(err => {

        this.setState({
          loading: false,
          error: err
        });
      });
  }

  renderLoading() {
    return <div>Загрузка....</div>;
  }

  renderDate(date) {
    function getWeekDay(date) {
      date = date || new Date();
      var days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
      var day = date.getDay();
      return days[day];
    }

    function getMonth(date) {
      date = date || new Date();
      var months = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
      var month = date.getMonth();
      return months[month];
    }
    let newDate = new Date(date);
    let day = newDate.getDate();
    let year = newDate.getFullYear();
    let week = getWeekDay(newDate);
    let month = getMonth(newDate);
    return `${day} ${month} ${year}, ${week}`;
  }


  prettyPrice(price) {
    return price.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
  }

  renderStops(count) {
    count = Math.abs(count);
    count %= 100;
    if (count >= 5 && count <= 20) {
      return `${count} пересадок`;
    }
    count %= 10;
    if (count === 0) {
      return;
    }
    if (count === 1) {
      return `${count} пересадка`;
    }
    if (count >= 2 && count <= 4) {
      return `${count} пересадки`;
    }
    return `${count} пересадок`;
  }

  renderError() {
    return (
      <div>
        Ой: {this.state.error.message}
      </div>
    );
  }

  renderPosts() {
    if(this.state.error) {
      return this.renderError();
    }

    return (
      <div className="ticket__list">
        {this.state.tickets.map((ticket, index) =>
          <div className="ticket__item" key={index}>
            <div className="ticket__buy">
              <div className="ticket__airline-logo">
              <img src={`http://pics.avs.io/124/33/${ticket.carrier}.png`} alt="Airline-logo"/></div>
              <button className="ticket__button">
                <span className="ticket__button-text">Купить </span>
                <span className="ticket__button-text">за {this.prettyPrice(ticket.price)} Р</span></button>
            </div>
            <div className="ticket__content fly-segment">
              <div className="fly-segment__origin">
                <div className="fly-segment__time">{ticket.departure_time}</div>
                <div className="fly-segment__city">{ticket.origin}, {ticket.origin_name}</div>
                <div className="fly-segment__date">{this.renderDate(ticket.departure_date)}</div>
              </div>
              <div className="fly-segment__destination">
                <div className="fly-segment__time">{ticket.arrival_time}</div>
                <div className="fly-segment__city">{ticket.destination_name}, {ticket.destination}</div>
                <div className="fly-segment__date">{this.renderDate(ticket.arrival_date)}</div>
              </div>
              <div className="fly-segment__stops">{this.renderStops(ticket.stops)}</div>
            </div>
          </div>
        )}
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.state.loading ?
          this.renderLoading()
          : this.renderPosts()}
      </div>
    );
  }
}

export default TicketList;
