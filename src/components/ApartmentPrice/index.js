// import logo from '../../assets/logo.svg';
import './index.css';

function ApartmentPrice(props) {
    return (
        <div className="apartment-price">{props.price ? props.price + ' €' : null}</div>
    )
}

export default ApartmentPrice;
