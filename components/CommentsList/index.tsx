import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import CommentCard from '../CommentCard';
import Header from '../Common/Header';

const CommentsList = () => {

    const dispatch = useAppDispatch();
    const { comments } = useAppSelector(state => state.comments);
    const dummy = {name:"jim", email:"jim@gmail.com", rating:3, comment:"Make sense"}

    useEffect(() => {
      
    }, [comments])
    
    return (
        <div className='mt-16 mb-8'>
            <Header text="Latest comments" size="sm" />

            {
                comments.map(item => (
                    <CommentCard key={item.name} comment={item} />
                ))
            }
        </div>
    )
}

export default CommentsList