import TagFilterS from '../../styles/TagBar/TagFilterBar.module.css'
import TagFilterItem from "./TagFilterItem";
import dummyTags from '../DummyJsonFiles/DummyTags.json'
import {useEffect, useState} from "react";

const TagFilterBar = () => {
    useEffect(() => {
        return () => {
            setTags(dummyTags)
        };
    }, [dummyTags]);


    const [tags, setTags] = useState([])
    return(
        <div className={`${TagFilterS.container} borderShadow`}>
            <ul>
                {tags.map((tag) => (
                    <TagFilterItem
                        key={tag.name}
                        tagName={tag.name}
                    />
                ))}
            </ul>
        </div>
    )
}

export default TagFilterBar;