import React, {useState} from 'react';
import classes from "./TodoList.module.css";
import ItemPost from "./componentsItemPost/ItemPost";

const TodoList = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [posts, setPosts] = useState([
        {id: 1, title: 'Найти', body: 'Карбюратор, фильтр', isCompleted: false},
        {id: 2, title: 'Купить', body: 'Молоко, яики, хлеб', isCompleted: false},
        {id: 3, title: 'Позвонить', body: 'Зинаиде Васильевне', isCompleted: false},
    ]);
    const addNewItem = () => {
        if (!title.trim() || !body.trim()) return;
        const maxId = posts.length > 0 ? Math.max(...posts.map(post => post.id)) : 0;
        const newPost = {
            id: maxId + 1,
            title,
            body
        }
        setPosts([...posts, newPost]);
        setTitle('')
        setBody('')
    }
    const removePost = (id) => {
        setPosts(posts.filter(post => post.id !== id));
    };
    const toggleComplete = (id) => {
        setPosts(posts.map(post =>
            post.id === id ? { ...post, isCompleted: !post.isCompleted } : post
        ));
    };

    return (
        <div className={classes.todoGlobal}>
            <h1>Список задач</h1>
            <div className={classes.inputGlobal}>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value) }
                    className={classes.inputEnter}
                    type="text"
                    placeholder='Название'/>
                <input
                    value={body}
                    onChange={(e) => setBody(e.target.value) }
                    className={classes.inputEnter}
                    type="text"
                    placeholder='Описание'/>
                <button
                    onClick={addNewItem}
                    style={{width: '100px',
                    borderRadius: '5px',
                    cursor: 'pointer'}}>
                    Добавить
                </button>
            </div>
            <div className={classes.postItems}>
            <ItemPost  posts={posts}
                       onRemove={removePost}
                       onToggleComplete={toggleComplete}
            />
            </div>
            
        </div>
    );
};

export default TodoList;