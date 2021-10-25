import AppHeader from "../AppHeader"
import PostAddForm from "../PostAddForm"
import PostList from "../PostList/PostList"
import PostStatusFilter from "../PostStatusFilter"
import SearchPanel from "../SearchPanel/SearchPanel"

import './App.css'

const App = () => {
    return (
        <div className="App">
            <AppHeader />
            <div className="search-panel d-flex">
                <SearchPanel />
                <PostStatusFilter />
            </div>
            <PostList />
            <PostAddForm />
        </div>
    )
}

export default App