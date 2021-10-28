import React from "react";
import "./PostListItem.css";

export default class PostListItem extends React.Component {

  render() {
      const {label, onDelet, onToggleLiked, onToggleImportant, like, important} = this.props
      
        let classnames = "app-list-item  d-flex justify-content-between";
        if (important) {
            classnames += " important";
        }

        if(like) {
            classnames += ' like';
        }

    return (
      <div className={classnames}>
        <span className="app-list-item-label" onClick={onToggleLiked}>{label}</span>
        <div className="d-flex justify-content-center align-items-center">
          <button className="btn-star btn-sm" onClick={onToggleImportant}>
            <i className="fas fa-star"></i>
          </button>
          <button className="btn-trash btn-sm" onClick={onDelet}>
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-heart"></i>
        </div>
      </div>
    );
  }
}
