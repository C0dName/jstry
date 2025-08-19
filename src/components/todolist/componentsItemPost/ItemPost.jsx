import React from 'react';
import classes from "./ItemPost.module.css";

const ItemPost = ({posts, onRemove, onToggleComplete}) => {
    return (
        <div style={{marginTop: '10px'}}>
            {posts.map((post) =>
                <div className={classes.postGlobal}
                     key={post.id}>
                    <div className={classes.postItem}
                         style={{
                             textDecoration: post.isCompleted ? 'line-through' : 'none',
                             opacity: post.isCompleted ? 0.7 : 1
                         }}>
                        <p style={{marginRight: '5px'}}>№ {post.id}.</p>
                        <p>{post.title}:</p>
                        <p style={{marginLeft: '5px'}}>{post.body}</p>
                    </div>
                    <div className={classes.postBtnPosition}>
                        <button onClick={() => onToggleComplete(post.id)}
                            className={classes.postBtn}>
                            Выполнено
                        </button>
                        <button onClick={() => onRemove(post.id)}
                            className={classes.postBtn}>
                            Удалить
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ItemPost;