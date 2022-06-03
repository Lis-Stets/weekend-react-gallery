import { useState } from 'react';
import GalleryList from '../GalleryList/GalleryList';

function Body( props ){
    const [images, setImages] = useState( [] );
    return(
        <div>
            <h2>Gallery of Me</h2>
            <GalleryList imageArray={ images } />
            <img src="images/goat_small.jpg"/>
            <p>{ JSON.stringify( props ) }</p>
        </div>
    )
}

export default Body;