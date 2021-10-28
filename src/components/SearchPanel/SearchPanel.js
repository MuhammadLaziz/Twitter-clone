import React from 'react'
import './SearchPan.css'

export default class SearchPanel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      term: '',
    }
    this.onUpdateSearch = this.onUpdateSearch.bind(this)
  }

  onUpdateSearch(e) {
    const term = e.target.value
    this.setState({term: term})
    this.props.onUpdateSearch(term)
  }

  render () {
    return (
      <input
        type="text"
        placeholder="Search by posts"
        className="form-control search-input"
        onChange={this.onUpdateSearch}
      />
    )
  }
}

