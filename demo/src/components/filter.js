import React, { Component } from 'react';

class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }
  render() {
    console.log(this.state.loading);
    return (
      <div className="filter">
        <div className="filter__header">Количество пересадок</div>
        <div className="filter__controls checkboxes-list">
          <div className="checkboxes-list__item">
            <div className="checkboxes-list__label">
              <input className="checkbox" id="stops_all" type="checkbox"/>
              <label htmlFor="stops_all">Все</label>
            </div>
          </div>
          <div className="checkboxes-list__item">
            <div className="checkboxes-list__label">
              <input className="checkbox" id="stops_0" type="checkbox"/>
              <label htmlFor="stops_0">Без пересадок</label>
            </div>
            <div className="checkboxes-list__extra"><a className="checkboxes-list__extra-uncheck-other" href="#">Только</a></div>
          </div>
          <div className="checkboxes-list__item">
            <div className="checkboxes-list__label">
              <input className="checkbox" id="stops_1" type="checkbox"/>
              <label htmlFor="stops_1">1 пересадка</label>
            </div>
            <div className="checkboxes-list__extra"><a className="checkboxes-list__extra-uncheck-other" href="#">Только</a></div>
          </div>
          <div className="checkboxes-list__item">
            <div className="checkboxes-list__label">
              <input className="checkbox" id="stops_2" type="checkbox"/>
              <label htmlFor="stops_2">2 пересадки</label>
            </div>
            <div className="checkboxes-list__extra"><a className="checkboxes-list__extra-uncheck-other" href="#">Только</a></div>
          </div>
          <div className="checkboxes-list__item">
            <div className="checkboxes-list__label">
              <input className="checkbox" id="stops_3" type="checkbox"/>
              <label htmlFor="stops_3">3 пересадки</label>
            </div>
            <div className="checkboxes-list__extra"><a className="checkboxes-list__extra-uncheck-other" href="#">Только</a></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Filter;
