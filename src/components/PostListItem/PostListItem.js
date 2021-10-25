import React from "react";
import "./PostListItem.css";

export default class PostListItem extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            important: false,
            like: false,
        }
        this.onImportant = this.onImportant.bind(this)
        this.onLike = this.onLike.bind(this)
    }

    onImportant () {
        this.setState(({important}) => ({important: !important}))
    }

    onLike () {
        this.setState(({like}) => ({like: !like}))
    }

  render() {
      const {label} = this.props
      const {important, like} = this.state
        let classnames = "app-list-item  d-flex justify-content-between";
        if (important) {
            classnames += " important";
        }

        if(like) {
            classnames += ' like';
        }

    return (
      <div className={classnames}>
        <span className="app-list-item-label" onClick={this.onLike}>{label}</span>
        <div className="d-flex justify-content-center align-items-center">
          <button className="btn-star btn-sm" onClick={this.onImportant}>
            <i className="fas fa-star"></i>
          </button>
          <button className="btn-trash btn-sm">
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-heart"></i>
        </div>
      </div>
    );
  }
}
