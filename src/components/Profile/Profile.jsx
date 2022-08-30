import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";



function Profile(props) {
    return (
        <div>
            < ProfileInfo/>
            < MyPosts posts={props.profilePage.postsData}
                      newPostText={props.profilePage.newPostText}
                      dispatch={props.dispatch}
            />
        </div>
    )
}

export default Profile;