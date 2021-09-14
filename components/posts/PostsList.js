import PostItem from './PostItem'

const PostsList = (props) => {
    return(
        <ul>
            {props.posts.map((post) => (
                <PostItem
                    key={post.id}
                    id={post.id}
                    image={post.imgUrl}
                    title={post.title}
                    question={post.question}
                    tag={post.tag}
                />
            ))}
        </ul>
    )
}
export default PostsList;