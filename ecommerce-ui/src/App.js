import React, {Component} from 'react';
import AirBnbs from './_data/airbnbs.json';
import CartContainer from './CartContainer';
import VacayRentalContainer from './VacayRentalContainer.js';
import VacayRentalCard from './VacayRentalCard.js';
import PropTypes from 'prop-types';
import './App.css';
import './vacayCard.css';

class App extends Component {

  constructor(props) {
    super();
    this.state = {
      rentalProperties: AirBnbs,
      selectedListings: []
    }
  }

  bookListing = (index) => {
    return () => {
      const selectedListing = this.state.rentalProperties[index];

      if (this.state.selectedListings.includes(selectedListing)) {
        alert('You have already selected that property to rent.');
        return;
      }
      
      this.setState(prevState => {
        return {
          selectedListings: [...prevState.selectedListings, selectedListing]
        };
      });
    }
  }

  deleteListing = (index) => {
    return () => {
      this.setState(prevState => {
        const selectedListings = [...prevState.selectedListings]; 
        selectedListings.splice(index,1);
        return {
          selectedListings
        };
      });
    }
  }

  render() {

    return (
      <div className="App">
        <CartContainer 
          rentalProperties={this.state.selectedListings}
          onDeleteListing={this.deleteListing}
        />
        <hr/>
        <VacayRentalContainer 
          rentalProperties={this.state.rentalProperties}
          onBookListing={this.bookListing}
        />
      </div>
    )
  }
}

export default App;