import PostsList from '../../components/posts/PostsList'
const PostsPage = () => {

    const DummyPost = [
        {
            id: "post-1",
            title: "Our first post",
            imgUrl: "https://cdn.pixabay.com/photo/2015/04/20/13/10/woman-731140_1280.jpg",
            description: "amazing Post",
        },
        {
            id: "post-2",
            title: "Our second post",
            imgUrl: "https://cdn.pixabay.com/photo/2015/04/20/13/10/woman-731140_1280.jpg",
            description: "amazing Post 2",
        }
    ]

    return(
        <div>
            <h1>A Page just with the newest posts</h1>
            <PostsList post={DummyPost}/>
        </div>
    )
}
export default PostsPage;