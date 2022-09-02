import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";




function Profile(props) {

    return (
        <div>
            < ProfileInfo/>
            < MyPostsContainer state = {props.state}
                posts = {props.state.profilePage}
                               store = {props.store}/>
        </div>
    )
}

export default Profile;