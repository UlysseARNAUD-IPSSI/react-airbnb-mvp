// import logo from '../../assets/logo.svg';
import './index.css';

function ApartmentName(props) {
    const {name, isAvailable} = props

    const style = {
        color: "true" === isAvailable ? 'green' : 'red'
    }

    const labelIsAvailable = (
        <span style={style}>⬤&nbsp;</span>
    )

    return (
        <div className="apartment-name">{!!name ? labelIsAvailable : null}{name}</div>
    )
}

export default ApartmentName;
