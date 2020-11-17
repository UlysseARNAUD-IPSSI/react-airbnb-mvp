// import logo from '../../assets/logo.svg';
import './index.css';

import ApartmentCover from "../ApartmentCover";
import ApartmentName from "../ApartmentName";
import ApartmentPrice from "../ApartmentPrice";
import ApartmentStars from "../ApartmentStars";

function Apartment() {
    return (
        <article className="apartment">
            <ApartmentCover />
            <ApartmentName />
            <ApartmentPrice />
            <ApartmentStars />
        </article>
    )
}

export default Apartment;
