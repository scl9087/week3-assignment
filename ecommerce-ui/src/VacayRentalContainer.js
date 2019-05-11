import React, {Component} from 'react';
import AirBnbs from './_data/airbnbs.json';
import VacayRentalCard from './VacayRentalCard';

class VacayRentalContainer extends React.Component {

    render() {
        const RentalList = AirBnbs
        .map((listing, index) => 
          <VacayRentalCard 
              listing={listing}
              key={index}
              index={index} 
              buttonText={'book'} 
              onSelectListing={this.props.onBookListing(index)}            
          />
        );

        return (
            <div className="vacation-listings">
                <h1>Vacation Listings</h1>
                <ul>{RentalList}</ul>
            </div>
        );
    }
}

export default VacayRentalContainer;