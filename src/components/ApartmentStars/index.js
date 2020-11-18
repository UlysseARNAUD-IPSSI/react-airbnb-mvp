// import logo from '../../assets/logo.svg';
import './index.css';

function ApartmentStars(props) {
    console.log('ApartmentStars constructor')

    const {rank} = props

    const content = !!rank ? "★★★★★" : ""

    const style = {
        "--rating": rank ?? "100"
    }

    return (
        <div className="apartment-stars" style={style}>{content}</div>
    )
}

export default ApartmentStars;
