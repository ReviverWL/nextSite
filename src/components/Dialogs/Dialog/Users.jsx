import React from 'react';
import DialogUser from './DialogUser';

const Users = (props) => {

return(  
        <div >
            <DialogUser store={props.store}/>
        </div>  
    )
};

export default Users;