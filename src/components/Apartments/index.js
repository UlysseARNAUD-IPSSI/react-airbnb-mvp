// import logo from '../../assets/logo.svg';
import './index.css';

import ApartmentsSearchBar from "../ApartmentsSearchBar";
import ApartmentsList from "../ApartmentsList";
import React from "react";

class Apartments extends React.Component {

    state = {
        apartments: [],
        apartmentsSearched: [],
        searchQuery: undefined,
        visibility: 'available',
        disableSearchBar: true
    }

    constructor(props) {
        super(props)

        const {visibility, searchQuery} = props;

        const apartments = localStorage.getItem('apartments_cache');

        this.state = {
            apartments: apartments || this.state.apartments,
            searchQuery: searchQuery || this.state.searchQuery,
            visibility: visibility || this.state.visibility
        }

        this.handleChangeInput = this.handleChangeInput.bind(this)
        this.handleChangeVisibility = this.handleChangeVisibility.bind(this)

        this.updateVisibility = this.updateVisibility.bind(this)
        this.updateApartmentsSearched = this.updateApartmentsSearched.bind(this)
    }

    componentDidMount() {
        console.log('Apartments : componentDidMount()')

        this.disableApartmentsSearchBarInput()
        this.disableApartmentsSearchBarVisibility()

        fetch('/apartments.json')
            .then(response => response.json())
            .then(response => {
                localStorage.setItem('apartments_cache', JSON.stringify(response))
                this.updateApartments(response)
            })
            .catch(err => {
            })
            .finally(() => {
                setTimeout(() => {
                    this.updateApartmentsSearched()
                    this.enableApartmentsSearchBarInput()
                    this.enableApartmentsSearchBarVisibility()
                }, 3000)
            })
    }

    componentDidUpdate() {
        console.log('Apartments : componentDidUpdate()')
    }

    render() {
        console.log('Apartments : render()')

        const {searchQuery} = this.props
        const {apartmentsSearched, visibility} = this.state

        return (
            <section className="apartments">
                <ApartmentsSearchBar
                    handleChangeInput={this.handleChangeInput}
                    handleChangeVisibility={this.handleChangeVisibility}
                    visibility={visibility} searchQuery={searchQuery}/>
                <ApartmentsList apartments={apartmentsSearched}/>
            </section>
        )
    }

    updateApartments(apartments) {
        console.log('Apartments : updateApartments()')

        this.setState({apartments})
    }

    updateApartmentsSearched() {
        console.log('Apartments : updateApartmentsSearched()')

        const {visibility, apartments, searchQuery} = this.state

        let apartmentsSearched

        if (['', null, undefined].includes(searchQuery)) {
            console.log('foo', {visibility})
            apartmentsSearched = ('available' !== visibility)
                ? apartments
                : apartments.filter(apartment => {
                    return "true" === apartment.isAvailable
                })
        } else {
            console.log('bar')
            apartmentsSearched = apartments.filter(function (apartment) {
                return (_removeAccent(apartment.name.trim()).toLowerCase()).includes(_removeAccent(searchQuery).toLowerCase())
                    && (
                        ('available' === visibility && "true" === apartment.isAvailable)
                        || ('all' === visibility)
                    )
            })
        }

        localStorage.setItem('apartments_searched_cache', JSON.stringify(apartmentsSearched))

        this.setState({apartmentsSearched})

        /*
         * @see https://stackoverflow.com/a/37511463
         */
        function _removeAccent(string) {
            return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        }
    }

    updateSearchQuery(searchQuery) {
        this.setState({searchQuery})
    }

    updateVisibility(visibility) {
        this.setState({visibility})
        this.forceUpdate()
    }

    handleChangeInput(event) {
        console.log('Apartments : handleChangeInput()')

        const {target} = event
        const searchQuery = target.value.trim()

        this.updateSearchQuery(searchQuery)

        this.updateApartmentsSearched()
    }

    handleChangeVisibility(event) {
        console.log('Apartments : handleChangeVisibility()')

        const {target} = event
        const {checked} = target

        const visibility = true === checked ? 'all' : 'available'

        this.updateVisibility(visibility)

        this.updateApartmentsSearched()
    }

    disableApartmentsSearchBarInput() {
        const apartmentsSearchBarInput = document.querySelector('.apartments-search-bar_input input')
        apartmentsSearchBarInput.setAttribute('disabled', '')
    }

    enableApartmentsSearchBarInput() {
        const apartmentsSearchBarInput = document.querySelector('.apartments-search-bar_input input')
        apartmentsSearchBarInput.removeAttribute('disabled')
    }

    disableApartmentsSearchBarVisibility() {
        const apartmentsSearchBarVisibility = document.querySelector('.apartments-search-bar_visibility button')
        apartmentsSearchBarVisibility.setAttribute('disabled', '')
    }

    enableApartmentsSearchBarVisibility() {
        const apartmentsSearchBarVisibility = document.querySelector('.apartments-search-bar_visibility button')
        apartmentsSearchBarVisibility.removeAttribute('disabled')
    }
}


export default Apartments
