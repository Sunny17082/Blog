import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { formatISO9075 } from "date-fns";
import { UserContext } from '../UserContext';
import { Link } from 'react-router-dom';

function PostPage() {
    const [postInfo, setPostInfo] = useState(null);
    const { userInfo } = useContext(UserContext)
    const {id} = useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/post/${id}`)
        .then(response => {
            response.json().then(postInfo => {
                setPostInfo(postInfo);
            })
        })
    }, []);

    if(!postInfo) return "";

    const handleDelete = async () => {
        try {
            await fetch(`http://localhost:5000/post/${postInfo._id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };


    return (
        <div className='post-page'>
            <h1>{postInfo.title}</h1>
            <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
            <div className="author">by @{postInfo.author.username}</div>
            {userInfo.id === postInfo.author._id && (
                <div className='edit-row'>
                    <Link className='edit-btn' to={`/edit/${postInfo._id}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg> 
                        Edit this post
                    </Link>
                    <Link className="del-btn" onClick={handleDelete} to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </Link>
                </div>
            )}
            <div className="image">
                <img src={`http://localhost:5000/${postInfo.cover}`} alt="" />
            </div>
            <div className='content' dangerouslySetInnerHTML={{__html:postInfo.content}}/>
        </div>
    );
}

export default PostPage