// import logo from '../../assets/logo.svg';
import './index.css';

function ApartmentCover(props) {
    const {cover} = props

    const style = {
        backgroundImage: !!cover ? `url(${cover})` : null
    }

    return (
        <div className="apartment-cover" style={style}></div>
    )
}

export default ApartmentCover;
