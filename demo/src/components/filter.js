import React, { Component } from 'react';

class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stops_all: true,
      stops_list: [
        {id: 0, selected: true, title: 'Без пересадок'},
        {id: 1, selected: true, title: '1 пересадка'},
        {id: 2, selected: false, title: '2 пересадки'},
        {id: 3, selected: false, title: '3 пересадки'}
      ]
    };
  }

  changeSelection = (id) => {
    var state = this.state.stops_list.map(function(d) {
      return {
        id: d.id,
        selected: (d.id === id ? !d.selected : d.selected),
        title: d.title
      };
    });

    this.setState({ stops_list: state });
  }

  handleChange = () =>{
    this.setState({
      stops_all: !this.state.stops_all
    });
  }

  render() {
    let checkboxes =  this.state.stops_list.map((d, idx) => {
      return (
        <div key={idx} className="checkboxes-list__item">
          <div className="checkboxes-list__label">
            <input 
              className="checkbox"
              id={`stops_${d.id}`}
              defaultChecked={this.state.stops_list[idx].selected}
              onChange={this.changeSelection.bind(this, d.id)}
              type="checkbox"/>
            <label htmlFor={`stops_${d.id}`}>{d.title}</label>
          </div>
          <div className="checkboxes-list__extra"><a className="checkboxes-list__extra-uncheck-other" href="#">Только</a></div>
        </div>

        )
    })

    return (
      <div className="filter">
        <div className="filter__header">Количество пересадок</div>
        <div className="filter__controls checkboxes-list">
          <div className="checkboxes-list__item">
            <div className="checkboxes-list__label">
              <input 
                className="checkbox"
                id="stops_all" 
                defaultChecked={this.state.stops_all}
                onChange={this.handleChange}
                type="checkbox"/>
              <label htmlFor="stops_all">Все</label>
            </div>
          </div>
          {checkboxes}
        </div>
      </div>
    );
  }
}

export default Filter;
