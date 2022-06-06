import { useState, useEffect } from 'react';
import GalleryList from '../GalleryList/GalleryList';
import axios from 'axios';

function Body( props ){
    const [images, setImages] = useState( [] );
    // Make a GET call On page load
    useEffect( ()=>{
        getImages();
    }, [] ); // This empty array tells this to only run once

    const getImages=()=>{
        axios.get( '/gallery' ).then( ( response )=>{
            setImages( response.data );
        }).catch( ( err )=>{
            console.log( err );
            alert( 'error getting Gallery items' );
        })
    }
    return(
        <div>
            <h2>Gallery of Me</h2>
            <GalleryList imageArray={ images } />
        
        </div>
    )
}

export default Body;