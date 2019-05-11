import React, {Component} from 'react';
import PropTypes from 'prop-types';

class VacayRentalCard extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        houseType: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        payment: PropTypes.number,
        isSuperhost: PropTypes.bool,
        stars: PropTypes.number.isRequired,
        reviews: PropTypes.number.isRequired,
    }

    render() {

        return(
            <li className="listing">
                <div className="img-container"><img src={this.props.image} alt=""/></div>
                <div className="content">
                    <p>{this.props.houseType} · {this.props.city}, {this.props.country}</p>
                    <h2>{this.props.title}</h2>
                    <h3><strong>${this.props.payment}</strong>/night</h3>
                    <h4>{this.props.stars} {this.props.reviews} · {this.props.isSuperhost}</h4>
                    <button>{this.props.buttonText}</button>
                    {/* <button onClick={() => onClick(index)}>{buttonText}</button> */}
                </div>
            </li>
        );
    }

}

export default VacayRentalCard;