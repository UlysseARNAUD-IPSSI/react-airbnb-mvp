import React from "react";

// import logo from '../../assets/logo.svg';
import './index.css';
import ApartmentsSearchBarInput from "../ApartmentsSearchBarInput";
import ApartmentsSearchBarVisibility from "../ApartmentsSearchBarInpVisibility";

class ApartmentsSearchBar extends React.Component {

    state = {
        searchQuery: undefined,
        visibility: 'available'
    }

    constructor(props) {
        super(props)

        const {handleChangeInput, handleChangeVisibility,
            visibility, searchQuery} = props

        this.setState({
            visibility: visibility ?? this.state.visibility,
            searchQuery: searchQuery ?? this.state.searchQuery,
        })

        this.handleChangeInput = handleChangeInput
        this.handleChangeVisibility = handleChangeVisibility
    }

    render() {
        const {visibility} = this.state

        return (
            <aside className="apartments-search-bar">
                <form>

                    <ApartmentsSearchBarInput
                        handleChange={(event) => {
                            const {target} = event
                            const {value} = target

                            this.handleChangeInput(event)
                            this.updateSearchQuery(value)
                        }} />

                    <ApartmentsSearchBarVisibility
                        handleChange={(event) => {
                            const {target} = event
                            const {checked} = target
                            const visibility = checked ? 'all' : 'available'

                            this.handleChangeVisibility(event)
                            this.updateVisibility(visibility)

                            const button = target.previousElementSibling
                            button.innerText = this.getButtonText()
                        }}
                        visibility={visibility} />
                </form>
            </aside>
        )
    }

    componentDidUpdate() {
        console.log('ApartmentsSearchBar : componentDidUpdate()')
    }

    updateSearchQuery(searchQuery) {
        console.log('ApartmentsSearchBar : updateSearchQuery()')
        this.setState({searchQuery})
    }

    updateVisibility(visibility) {
        console.log('ApartmentsSearchBar : updateVisibility()')
        this.setState({visibility})
    }

    getButtonText() {
        const {visibility} = this.state
        return 'all' !== visibility ? 'Show all' : 'Show available'
    }
}

export default ApartmentsSearchBar;
