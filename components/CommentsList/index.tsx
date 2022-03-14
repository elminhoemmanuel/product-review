import React from 'react'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { addComment } from 'redux/slices/comments';
import CommentCard from '../CommentCard';

const CommentsList = () => {

    const dispatch = useAppDispatch();
    const { comments } = useAppSelector(state => state.comments);
    const dummy = {name:"jim", email:"jim@gmail.com", rating:3, comment:"Make sense"}
    return (
        <div>
            <h1 className='text-lg text-ckdarkblue font-bold mb-4'>Latest Comments</h1>

            {
                comments.map(item => (
                    <CommentCard key={item.name} comment={item} />
                ))
            }
        </div>
    )
}

export default CommentsList