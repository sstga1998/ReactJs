import React from 'react';
import FontAwesome from 'react-fontawesome';
import './SearchBar.css';

class SearchBar extends React.Component {
    render(){
        return(
            <div className="rmdb-searchbar">
                <div className="rmdb-searchbar-content">
                <FontAwesome className="rmdb-fa-search" name="search"  />
                <input
                    type="text"
                    className="rmdb-searchbar-input"
                    placeholder="Search"
                />
                </div>
            </div>
        );
    }
}
export default SearchBar;