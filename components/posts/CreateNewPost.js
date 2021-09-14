import {useRef} from "react";
import { TextField } from '@material-ui/core';


const CreateNewPost = ({props}) => {
    const imageInputRef = useRef();
    const titleInputRef = useRef();
    const questionInputRef = useRef();
    const tagInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredQuestion = questionInputRef.current.value;
        const enteredTag = tagInputRef.current.value;

        const postData = {
            title: enteredTitle,
            image: enteredImage,
            question: enteredQuestion,
            tag: enteredTag,
        };

        props.onAddQuestion(postData);
    }
    return (
        <>
            <form onSubmit={submitHandler} >
                <div>
                    <h2>Create A New Post</h2>
                <TextField
                    id="outlined-full-width"
                    style={{marginBottom: 20, marginTop: 20,}}
                    fullWidth
                    placeholder="Add a Title (required)"
                    label="Title"
                    InputLabelProps={{shrink: true,}}
                    variant="outlined"
                    autoFocus={true}
                />
                <TextField
                    id="outlined-multiline-static"
                    style={{marginBottom: 40, marginTop: 20, }}
                    fullWidth
                    multiline
                    rows={8}
                    label="Your Question"
                    InputLabelProps={{shrink: true,}}
                    placeholder="Type ur question or whatever"
                    variant="outlined"
                />
                    <hr/>
                </div>
            </form>
        </>
    )

}

export default CreateNewPost;
