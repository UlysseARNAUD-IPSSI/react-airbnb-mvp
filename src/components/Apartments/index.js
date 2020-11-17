// import logo from '../../assets/logo.svg';
import './index.css';

import ApartmentsSearchBar from "../ApartmentsSearchBar";
import ApartmentsList from "../ApartmentsList";

function Apartments() {
    return (
        <section className="apartments">
            <ApartmentsSearchBar />
            <ApartmentsList />
        </section>
    )
}

export default Apartments;
