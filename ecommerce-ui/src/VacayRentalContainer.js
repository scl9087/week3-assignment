import React, {Component} from 'react';
import AirBnbs from './_data/airbnbs.json';
import VacayRentalCard from './VacayRentalCard';

class VacayRentalContainer extends Component {
    
    render() {
        const RentalList = AirBnbs
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
                    onClick={this.props.onBookFlight}
                    buttonText="Book"
                />
            );
        });
        
        return (
            <div className="vacation-listings">
                <h1>Vacation Listings</h1>
                <ul>{RentalList}</ul>
            </div>
        );
    }
}

export default VacayRentalContainer;