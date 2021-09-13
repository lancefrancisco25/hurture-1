import { useRef } from 'react';

const CreatePostForm = (props) => {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const descriptionInputRef = useRef();


    return (
        <div>
            <h1>Form for adding a Post</h1>
        </div>
    );
}

export default CreatePostForm;