import { useState } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList( props ){
    const [hook, setHook] = useState( null );
    return(
        <div>
            <h2></h2>

            {props.imageArray.map( item =>(<GalleryItem item = {item}/>))}
        </div>
    )
}

export default GalleryList;
