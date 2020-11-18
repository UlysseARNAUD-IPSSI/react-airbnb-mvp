// import logo from '../../assets/logo.svg';
import './index.css';

import ApartmentCover from "../ApartmentCover";
import ApartmentName from "../ApartmentName";
import ApartmentPrice from "../ApartmentPrice";
import ApartmentStars from "../ApartmentStars";

function Apartment(props) {
    console.log('Apartment constructor')

    const {cover, name, price, rank, isAvailable} = props

    let isLoading = false
    if (0 === Object.keys(props).length)  isLoading = true

    return (
        <article className={`apartment${isLoading ? ' is-loading' : ''}`}>
            <ApartmentCover cover={cover} />
            <ApartmentName isAvailable={isAvailable} name={name} />
            <ApartmentPrice price={price} />
            <ApartmentStars rank={rank} />
        </article>
    )
}

export default Apartment;
