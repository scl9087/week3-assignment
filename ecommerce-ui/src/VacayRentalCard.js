import React, {Component} from 'react';

class VacayRentalCard extends Component {

    render() {
        const index = this.props.index;
        const listing = this.props.listing;
        const hasSuperHost = {display: this.props.listing.host.isSuperhost  ? 'inline-block' : 'none'};

        return(
            <li className="listing">
                <div className="img-container"><img src={listing.image} alt=""/></div>
                <div className="content">
                    <p>{listing.houseType} · {listing.location.city}, {listing.location.country}</p>
                    <h2>{listing.title}</h2>
                    <h3><strong>${listing.payment.cost}</strong>/night</h3>
                    <h4>
                        <span className="stars">
                            {listing.rating.stars} <i className="fa fa-star" aria-hidden="true"></i>
                        </span> 
                        ({listing.rating.reviews})  <span className="superhost" style={hasSuperHost}> · <i className="fas fa-trophy"></i> 
                            Superhost
                        </span>
                    </h4>
                    <button onClick={() => this.props.onSelectListing(index)}>{this.props.buttonText}</button>
                </div>
            </li>
        );
    }

}

export default VacayRentalCard;