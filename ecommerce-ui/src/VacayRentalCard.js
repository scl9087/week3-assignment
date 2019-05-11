import React, {Component} from 'react';
import PropTypes from 'prop-types';


class VacayRentalCard extends Component {

    render() {
        const index = this.props.index;
        const listing = this.props.listing;
        const starRating = listing.rating.stars

        return(
            <li className="listing">
                <div className="img-container"><img src={listing.image} alt=""/></div>
                <div className="content">
                    <p>{listing.houseType} · {listing.location.city}, {listing.location.country}</p>
                    <h2>{listing.title}</h2>
                    <h3><strong>${listing.payment.cost}</strong>/night</h3>
                    <h4><span className="stars">{listing.rating.stars} <i class="fa fa-star" aria-hidden="true"></i></span> ({listing.rating.reviews}) · {listing.host.isSuperhost}</h4>
                    <button onClick={() => this.props.onSelectListing(index)}>{this.props.buttonText}</button>
                </div>
            </li>
        );
    }

}

export default VacayRentalCard;