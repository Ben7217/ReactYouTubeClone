import React, { Component } from 'react';

class SearchBar extends Component { // only class base components have state
    constructor(props) { // constructor function called automatically whenever new instance of class is created
        super(props); //calling parent method

        this.state = { term: '' };
    }
    render() {
        return (
            <div className="search-bar">
            <input
                value = {this.state.term}
                onChange ={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}
export default SearchBar;