import AppHeader from "../AppHeader"
import PostAddForm from "../PostAddForm"
import PostList from "../PostList/PostList"
import PostStatusFilter from "../PostStatusFilter"
import SearchPanel from "../SearchPanel/SearchPanel"

import './App.css'

const data = [
    {label: 'Learn React JS with me', important: true, id: 'qs'},
    {label: 'Learn Vue JS with me', important: false, id: 'qa'},
    {label: 'Learn Angular JS with me', important: false, id: 'qz'}
]

const App = () => {
    return (
        <div className="App">
            <AppHeader />
            <div className="search-panel d-flex">
                <SearchPanel />
                <PostStatusFilter />
            </div>
            <PostList posts={data} />
            <PostAddForm />
        </div>
    )
}

export default App