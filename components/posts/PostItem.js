import PostItemS from '../../styles/PostItem.module.css'
function PostItem(props) {
    return (
        <li>
            <div className={`${PostItemS.container} borderShadow`}>
                <div>
                    <img src={props.imgUrl} alt={props.title} />
                </div>
                <div>
                    <p>{props.tag}</p>
                    <h3>{props.title}</h3>
                    <p>{props.question}</p>
                </div>
            </div>
        </li>
    );
}

export default PostItem;