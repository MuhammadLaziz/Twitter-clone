import PostListItem from "../PostListItem"
import './PostList.css'

const PostList = () => {
    return (
        <ul className="app-list list-group">
            <PostListItem />
            <PostListItem />
            <PostListItem />
        </ul>
    )
}

export default PostList