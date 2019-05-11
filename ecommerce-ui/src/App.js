import React, {Component} from 'react';
import AirBnbs from './_data/airbnbs.json';
import VacayRentalContainer from './VacayRentalContainer';
import CartContainer from './CartContainer';
import './App.css';
import './vacayCard.css';

class App extends Component {

  state = {
    rentals: AirBnbs,
    selectedRentals: []
  }

  render() {

    return (
      <div className="App">
        <VacayRentalContainer rentals={this.state.rentals}/>
        <hr/>
        <CartContainer rentals={this.state.selectedRentals}/>
      </div>
    )
  }
}

export default App;