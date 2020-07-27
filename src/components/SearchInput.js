import React from 'react';


export default class SearchInput extends React.Component {
    render() {
        return(
            <div>
                <label>Search</label>
                <input 
                type="text" 
                onChange={e => this.props.searchBook(e.target.value)}
                
                />
                <button type="submit">Submit</button>
            </div>
        )
    }
} 