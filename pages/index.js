import PostList from '../components/posts/PostsList'

const HomePage = () => {
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
        <>
            <h1>The Homepage</h1>
            <PostList post={DummyPost}/>
        </>
    )
}

export default HomePage;