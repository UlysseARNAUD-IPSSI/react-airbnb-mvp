import React from "react"

// import logo from '../../assets/logo.svg';
import './index.css'


class ApartmentsSearchBarInput extends React.Component {

    constructor(props) {
        console.log('ApartmentsSearchBarInput: constructor()')

        super(props)

        const {handleChange} = props

        this.handleChange = handleChange
    }

    render() {
        console.log('ApartmentsSearchBarInput: render()')

        let apartments = localStorage.getItem('apartments_cache')
        if (!!apartments) apartments = JSON.parse(apartments)
        else apartments = []

        let apartmentsSearched = localStorage.getItem('apartments_searched_cache')
        if (!!apartmentsSearched) apartmentsSearched = JSON.parse(apartmentsSearched)
        else apartmentsSearched = []

        return (
            <div className="apartments-search-bar_input">
                <input
                    type="text" placeholder="Search"
                    onChange={this.handleChange}/>
                <span>Found {apartmentsSearched.length} out of {apartments.length}</span>
            </div>
        )
    }

}


export default ApartmentsSearchBarInput
