import React from "react";

// import logo from '../../assets/logo.svg';
import './index.css';

class ApartmentsSearchBarVisibility extends React.Component {

    state = {
        visibility: 'available'
    }

    constructor(props) {
        super(props)

        const {handleChange, visibility} = props

        this.state = {
            visibility: visibility ?? this.state.visibility
        }

        this.handleClick = this.handleClick.bind(this)
        this.handleChange = handleChange
    }

    handleClick(event) {
        event.preventDefault()
        event.target.nextElementSibling.click()
    }

    handleChange(event) {
        console.log('ApartmentsSearchBarVisibility : handleChange()')

        const {target} = event
        const {checked} = target
        const visibility = checked ? 'all' : 'available'

        this.setState({ visibility })

        const button = target.previousElementSibling;
        button.innerHTML = this.getButtonText()
    }

    render() {
        return (
            <div className="apartments-search-bar_visibility">
                <button role="button" onClick={this.handleClick}>{this.getButtonText()}</button>
                <input type="checkbox" name="show-all" onChange={this.handleChange}/>
            </div>
        )
    }

    getButtonText() {
        const {visibility} = this.state
        return 'all' !== visibility ? 'Show all' : 'Show available'
    }

}

export default ApartmentsSearchBarVisibility;
