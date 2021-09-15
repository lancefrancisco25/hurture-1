import PostsList from '../../components/posts/PostsList'
import DummyPosts from '../../components/DummyJsonFiles/DummyPosts.json';
const PostsPage = () => {

    return(
        <div>
            <h1>A Page just with the newest posts</h1>
            <PostsList posts={DummyPosts}/>
        </div>
    )
}
export default PostsPage;