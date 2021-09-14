import PostList from '../components/posts/PostsList'
import DummyPosts from '../components/DummyPosts.json';
import {useState} from 'react';
import Modal from 'react-modal'
import CreateNewPost from '../components/posts/CreateNewPost'
import Header from '../components/Header';
import HomePageS from '../styles/HomePage.module.css'

const HomePage = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
    }

    const addPostHandler = (enteredData) => {
        console.log(enteredData)
    }

    return(
        <>
            <Header/>
            <div>
                <button onClick={setModalIsOpenToTrue}>Click to Open Modal</button>
                <PostList posts={DummyPosts}/>

                <Modal isOpen={modalIsOpen} className={HomePageS.Modal} overlayClassName={HomePageS.Overlay} >
                    <button onClick={setModalIsOpenToFalse}>x</button>
                    <CreateNewPost onAddQuestion={addPostHandler}/>
                </Modal>
            </div>
        </>
    )
};

export default HomePage;