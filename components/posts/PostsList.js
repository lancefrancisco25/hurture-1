import PostItem from '../posts/PostItem'

const PostsList = (props) => {
    return(
        <ul>
            {props.post.map((post) => (
                <PostItem
                    key={post.id}
                    id={post.id}
                    image={post.imgUrl}
                    title={post.title}
                    description={post.description}
                />
            ))}
        </ul>
    )
}
export default PostsList;