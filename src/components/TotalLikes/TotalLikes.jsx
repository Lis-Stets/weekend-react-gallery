import { useState } from 'react';
// step 4 - import react redux stuff to let us access store
import {useDispatch, useSelector } from 'react-redux';

function TotalLikes( props ){
    const [hook, setHook] = useState( null );
    // step 5 connect to a reducer in store
    const totalLikes = useSelector( store => store.totalLikes );

    return(
        <div>
            <h2>TotalLikes</h2>
            <p>{ totalLikes }</p>
        </div>
    );
}

export default TotalLikes;