import PostListItem from "../PostListItem"
import './PostList.css'

const PostList = ({posts}) => {

    const element = posts.map((item) => {
        const {id, ...itemProps} = item
        return (
            <li key={id} className="list-group-item">
                <PostListItem {...itemProps} />
            </li>
        )
    })

    return (
        <ul className="app-list list-group">
            {element}
        </ul>
    )
}

export default PostList