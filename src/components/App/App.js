import React from "react";
import AppHeader from "../AppHeader";
import PostAddForm from "../PostAddForm";
import PostList from "../PostList/PostList";
import PostStatusFilter from "../PostStatusFilter";
import SearchPanel from "../SearchPanel/SearchPanel";

import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { label: "Learn React JS with me", important: false, like: false, id: 1 },
        { label: "Learn Vue JS with me", important: false, like: false, id: 2 },
        { label: "Learn Angular JS with me", important: false, like: false, id: 3 },
      ],
      term: '',
      filter: 'all',
    };
    this.deletItem = this.deletItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onToggleImportant = this.onToggleImportant.bind(this)
    this.onToggleLiked = this.onToggleLiked.bind(this)
    this.onUpdateSearch = this.onUpdateSearch.bind(this)
    this.searchPost = this.searchPost.bind(this)
    this.filterPost = this.filterPost.bind(this)
    this.onFilterSelect = this.onFilterSelect.bind(this)

    this.maxId = 4;
  }

  deletItem(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);
      const before = data.slice(0, index);
      const after = data.slice(index + 1);
      const newArr = [...before, ...after];

      return {
        data: newArr,
      };
    });
  }

  addItem(body) {
    const newItem = {
      label: body,
      important: false,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  }

  onToggleImportant (id) {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id)

      const oldItem = data[index]

      const newItem = {...oldItem, important: !oldItem.important}

      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

      return {
        data: newArr
      }
    })
  }

  onToggleLiked (id) {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id)
      
      const oldItem = data[index]
      
      const newItem = {...oldItem, like: !oldItem.like}

      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

      return {
        data: newArr
      }
    })
  }

  searchPost (items, term) {
    if(term.length === 0) {
      return items
    }

     return items.filter((item) => {
      return item.label.indexOf(term) > -1
    })
  }

  onUpdateSearch(term) {
    this.setState({term})
  }

  filterPost (items, filter) {
    if(filter === 'like') {
      return items.filter(item => item.like)
    }else {
      return items
    }
  }

  onFilterSelect(filter) {
    this.setState({filter})
  }

  render() {
    const {term, data, filter} = this.state
    const liked = data.filter(item => item.like).length
    const allPosts = data.length
    const visiblePosts = this.filterPost(this.searchPost(data, term), filter)

    return (
      <div className="App">
        <AppHeader liked={liked} allPosts={allPosts} />
        <div className="search-panel d-flex">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <PostStatusFilter filter={filter} onFilterSelect={this.onFilterSelect} />
        </div>
        <PostList 
          posts={visiblePosts} 
          onDelet={this.deletItem} 
          onToggleImportant={this.onToggleImportant}
          onToggleLiked={this.onToggleLiked}
        />
        <PostAddForm onAdd={this.addItem} />
      </div>
    );
  }
}
