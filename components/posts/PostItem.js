function PostItem(props) {
    return (
        <li>
            <div>
                <div>
                    <img src={props.imgUrl} alt={props.title} />
                </div>
                <div>
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                </div>
                <div>
                    <button>Show Details</button>
                </div>
            </div>
        </li>
    );
}

export default PostItem;