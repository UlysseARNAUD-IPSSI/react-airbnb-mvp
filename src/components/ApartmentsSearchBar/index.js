// import logo from '../../assets/logo.svg';
import './index.css';

function ApartmentsSearchBar() {
    return (
        <aside className="apartments-search-bar">
            <form>
                <div className="apartments-search-bar_input">
                    <input type="text" placeholder="Search" />
                    <span>Found 0 out of 4</span>
                </div>
                <div className="apartments-search-bar_visibility">
                    <button role="button">Show all</button>
                    <input type="checkbox" name="show-all"/>
                </div>
            </form>
        </aside>
    )
}

export default ApartmentsSearchBar;
