import { useState } from 'react';

function GalleryItem( props ){
    const [show, setShow] = useState( true );

    const toggleShow = () =>{
        setShow( !show );
    }

    return(
        <div onClick={ toggleShow }>
            {
                show?
                <img src={props.item.path}/>
                :
                <p>{props.item.description}</p>
            }
        </div>
    )
}

export default GalleryItem;