import React from 'react';
import DialogUser from './DialogUser';

const Users = (props) => {

return(  
        <div >
            <DialogUser users ={props.users}/>
        </div>  
    )
};

export default Users;