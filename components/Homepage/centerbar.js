
import PostList from '../posts/PostsList'
import DummyPosts from '../DummyPosts.json';

function centerbar({setModalIsOpenToTrue}) {
    return (
        <div>
                <button onClick={setModalIsOpenToTrue}>Click to Open Modal</button>
                <PostList posts={DummyPosts}/>
                <h1> A centerbar.js components</h1>
        </div>
    )
}

export default centerbar
