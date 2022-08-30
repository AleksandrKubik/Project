import React from 'react';
import s from './Post.module.css';
import {FaHeart} from "react-icons/fa";

function Post(props){
    return (
        <div>
            <div className={s.item}>
                <img
                    src='https://avatars.mds.yandex.net/i?id=75a90ce2d4a1251737d66f55c134ae26-4461245-images-thumbs&n=13'></img>
                {props.message}
                <div>
                    <span><FaHeart className={s.heart}/> {props.likesCount}</span>
                </div>
            </div>
        </div>
    );
}

export default Post;