import {useState} from 'react';
import ReactModal from 'react-modal'
import CreateNewPost from '../components/posts/CreateNewPost'
import Header from '../components/Homepage/Header';
import Meta from '../components/Homepage/Meta';
import MenuBar from '../components/Homepage/MenuBar'
import BuddyBar from '../components/Homepage/BuddyBar'
import TagFilterBar from "../components/TagBar/TagFilterBar";
import PostSection from '../components/Homepage/PostSection'
import HomePageS from '../styles/HomePage.module.css';
import MenuBarS from '../styles/MenuBar.module.css'
import ModalS from '../styles/Modal.module.css'
import GridS from '../styles/grid.module.css'
import PostsSectionS from '../styles/PostsSection.module.css'

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
            <div className={HomePageS.contentContainer}>
                <div className={GridS.grid}>
                    <div className={`${MenuBarS.container} borderShadow`}>
                        <MenuBar/>
                    </div>
                    <div className={`${PostsSectionS.container} `}>
                        <TagFilterBar/>
                        <PostSection setModalIsOpenToTrue={setModalIsOpenToTrue}/>
                    </div>
                    <div className={HomePageS.buddyBar}>
                        <BuddyBar/>
                    </div>
                </div>
            </div>
        </>
    )
};

export default HomePage;