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

        props.onAddQuestion(enteredData);
    }
    return (
        <>
            <form onSubmit={submitHandler} >
                <TextField
                    id="outlined-full-width"
                    label="Label"
                    style={{ width: 200, height: 300}}
                    placeholder="Add a Title (required)"
                    helperText="Full width!"
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
            </form>
        </>
    )

}

export default CreateNewPost;
