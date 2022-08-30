import React from 'react';
import s from './ProfileInfo.module.css';


function ProfileInfo(props) {
    return (
        <div>
            <div className={s.banner}><img
                src='https://avatars.mds.yandex.net/i?id=ea922f54d8727c82c5365d3375cdfd7a-5221954-images-thumbs&n=13'/>
            </div>
            <div className={s.descriptionBlock}>
                <img
                    src='https://avatars.mds.yandex.net/i?id=75a90ce2d4a1251737d66f55c134ae26-4461245-images-thumbs&n=13'></img>
            </div>
        </div>
    )
}

export default ProfileInfo;