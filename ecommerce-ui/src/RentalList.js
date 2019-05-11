import React, {Component} from 'react';
import AirBnbs from './_data/airbnbs.json';
import VacayRentalCard from './VacayRentalCard.js';

class RentalList extends Component {
    render() {
        const RentalListings = AirBnbs
        .map((listing, index) => {
            return (
                <VacayRentalCard 
                    title={listing.title} 
                    houseType={listing.houseType} 
                    image={listing.image} 
                    city={listing.location.city}
                    country={listing.location.country} 
                    payment={listing.payment.cost} 
                    isSuperhost={listing.host.isSuperhost} 
                    stars={listing.rating.stars}
                    reviews={listing.rating.reviews} 
                    key={index}
                    index={index}
                    onClick={this.props.onBookListing}
                    buttonText="Book"
                />
            );
        });

        return (
            {RentalListings}
        );
    }
}

export default RentalList;