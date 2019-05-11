import React, {Component} from 'react';
import AirBnbs from './_data/airbnbs.json';
import VacayRentalCard from './VacayRentalCard';

class CartContainer extends Component {

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
                    buttonText="Remove"
                />
            );
        });

        return(
            <div className="cart">
                <h2>Cart</h2>  
                <ul>{RentalList}</ul>
            </div>
            
        );
    }

}

export default CartContainer;