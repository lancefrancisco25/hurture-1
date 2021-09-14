import {useState} from 'react';
import ReactModal from 'react-modal'
import CreateNewPost from '../components/posts/CreateNewPost'
import Header from '../components/Header';
import Meta from '../components/Meta';
import MenuBar from '../components/Homepage/MenuBar'
import PostSection from '../components/Homepage/PostSection'
import BuddyBar from '../components/Homepage/BuddyBar'
import HomePageS from '../styles/HomePage.module.css';
import ModalS from '../styles/Modal.module.css'
import GridS from '../styles/grid.module.css'

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

                    <div className={`${HomePageS.menuBar} borderShadow`}>
                        <MenuBar/>
                    </div>

                    <div className={`${HomePageS.postsSection} `}>
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