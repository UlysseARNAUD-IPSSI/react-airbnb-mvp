// import logo from '../../assets/logo.svg';
import styles from './index.css';

import Apartment from "../Apartment";


function ApartmentsList(props) {
    console.log('ApartmentsList constructor')

    const {apartments} = props

    let apartmentList;
    if (undefined === apartments) {
        apartmentList = (
            <>
                <Apartment/>
                <Apartment/>
                <Apartment/>
                <Apartment/>
                <Apartment/>
                <Apartment/>
                <Apartment/>
                <Apartment/>
                <Apartment/>
                <Apartment/>
                <Apartment/>
                <Apartment/>
                <Apartment/>
            </>
        )
    } else {
        apartmentList = (
            <>
                {apartments.map(apartment =>
                    <Apartment
                        key={createUUID()}
                        name={apartment.name}
                        cover={apartment.cover}
                        price={apartment.price}
                        rank={apartment.rank}
                        isAvailable={apartment.isAvailable}
                    />
                )}
            </>
        )
    }

    return (
        <section className="apartments-list">
            {apartmentList}
        </section>
    );
}

/*
 * @see https://www.w3resource.com/javascript-exercises/javascript-math-exercise-23.php
 */
function createUUID() {
    let dt = new Date().getTime();
    const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        const r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}

export default ApartmentsList;
