import PostList from '../components/posts/PostsList'
import DummyPosts from '../components/DummyPosts.json';
import {useState} from 'react';
import ReactModal from 'react-modal'
import CreateNewPost from '../components/posts/CreateNewPost'
import Header from '../components/Header';
import Meta from '../components/Meta';
import HomePageS from '../styles/HomePage.module.css';
import ModalS from '../styles/Modal.module.css'
import LeftBar from '../components/Homepage/leftbar'
import CenterBar from '../components/Homepage/centerbar'
import RightBar from '../components/Homepage/rightbar'

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
            <Meta/>
            <Header/>
            <ReactModal isOpen={modalIsOpen} contentLabel="onRequestClose Example" onRequestClose={setModalIsOpenToFalse} className={ModalS.content} overlayClassName={ModalS.overlay}>
                <button onClick={setModalIsOpenToFalse}>x</button>
                <CreateNewPost onAddQuestion={addPostHandler}/>
            </ReactModal>
            <div className={HomePageS.contentCenter}>
                <div className={HomePageS.grid}>

                    <div className={`${HomePageS.sideBarLeft} borderShadow`}>
                        <LeftBar/>
                    </div>

                    <div className={`${HomePageS.centerPost} borderShadow`}>
                        <CenterBar setModalIsOpenToTrue={setModalIsOpenToTrue}/>
                    </div>

                    <div className={`${HomePageS.sideBarRight}`}>
                        <RightBar/>
                    </div>

                </div>
            </div>
        </>
    )
};

export default HomePage;