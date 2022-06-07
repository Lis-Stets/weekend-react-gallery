import { useState } from 'react';
import axios from 'axios';
import './GalleryItem.css';


function GalleryItem( props ){
    const [show, setShow] = useState( true );

    const toggleShow = () =>{
        setShow( !show );
    }
    
    const likeImage = () =>{
        axios.put( `/gallery/like/${props.item.id}` ).then( ( response )=>{
            console.log( response.data );
        }).catch ( ( err )=>{
            console.log(err );
            alert( 'error adding like' );
        })
    }

    return(
        <div className='itemDiv'>
            {
                show?
                <img onClick={ toggleShow } src={props.item.path}/>
                :
                <p onClick={ toggleShow }>{props.item.description}</p>
            }
            <p></p>
            <button onClick={ likeImage } className='itemButton'>Like</button>
            <p className='itemLikes'>{props.item.likes}</p>
        </div>
        
    )
}

export default GalleryItem;