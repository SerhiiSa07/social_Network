import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://bipbap.ru/wp-content/uploads/2021/07/1551512888_2-730x617.jpg" alt=""/>
                {props.message}
            <div>
                 <span>like</span> {props.likesCount }
            </div>
        </div>
    )
}

export default Post;