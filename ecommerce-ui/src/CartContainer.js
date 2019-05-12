import React, {Component} from 'react';
import VacayRentalCard from './VacayRentalCard';

class CartContainer extends Component {

    render() {
        const RentalList = this.props.rentalProperties
        .map((listing, index) => 
          <VacayRentalCard 
              listing={listing}
              key={index}
              index={index} 
              buttonText={'Remove'} 
              onSelectListing={this.props.onDeleteListing(index)}            
          />
        );

        return(
            <div className="cart">  
                <h1>My Cart</h1>
                <ul>{RentalList}</ul>
            </div>            
        );
    }

}

export default CartContainer;