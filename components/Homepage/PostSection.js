import PostList from '../posts/PostsList'
import DummyPosts from '../DummyJsonFiles/DummyPosts.json';

function postSection({setModalIsOpenToTrue}) {
    return (
        <>
            <button onClick={setModalIsOpenToTrue}>Click to Open Modal</button>
            <PostList posts={DummyPosts}/>
        </>
    )
}

export default postSection
