import React from 'react';
import PostItem from '../componentes/PostItem'


const UserPostItem = (props) => {
    return (
        <PostItem user={true} {...props.post} history={props.history}/>
    )
}

export default UserPostItem;