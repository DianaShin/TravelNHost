import React from 'react';
import Autosuggest from 'react-autosuggest';
import { hashHistory } from 'react-router';

const getSuggestionValue = suggestion => suggestion.name;
const getSuggestionId = suggestion => suggestion.id;

const renderSuggestion = suggestion => {
  return <div className='search-list-item'>
    {suggestion.name}
  </div>;
};

class Search extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        value: '',
        suggestions: []
    };
    this.onChange = this.onChange.bind(this);
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(event, { newValue }) {
    this.setState({
      value: newValue
    });
  }

  handleSubmit(){
    const match = (this.props.destinations.filter(destination =>
      destination.name.toLowerCase() === this.state.value.toLowerCase()));
    if (match.length === 1) {
      const id = match[0].id;
      return this.props.history.push(`/destinations/${id}`);
    }
  }

  // Autosuggest will call this function every time you need to update suggestions
  onSuggestionsFetchRequested({ value }) {
    this.setState({
      suggestions: this._getSuggestions(value)
    });
  }

  onSuggestionsClearRequested() {
    this.setState({
      suggestions: []
    });
  }

  _getSuggestions(value) {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    return inputLength === 0 ? [] : this.props.destinations.filter(destination =>
      destination.name.toLowerCase().slice(0, inputLength) === inputValue
    );
  }

  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: this.props.text,
      value: value,
      onChange: this.onChange
    };

    const renderInputComponent = inputProps => (
      <div>
        <input className='search-bar' {...inputProps } />
      </div>
    );
    return (
      <div className='search-bar'>
        <form  onSubmit={this.handleSubmit}>
          <div className='search-input-box'>
            <Autosuggest
              suggestions = {suggestions}
              onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
              onSuggestionsClearRequested={this.onSuggestionsClearRequested}
              getSuggestionValue={getSuggestionValue}
              renderSuggestion={renderSuggestion}
              inputProps = {inputProps}
              renderInputComponent = {renderInputComponent}
            />
          <button type="submit" title="Explore-places">
             <i className="fa fa-search" aria-hidden="true"></i>
          </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
