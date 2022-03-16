import React from 'react'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { Comment } from "../../utils/types/comments"
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

interface CommentCardProps {
    comment: Comment
}

const CommentCard = ({ comment }: CommentCardProps) => {

    return (
        <div className='text-sm px-5 py-3 mb-3 rounded-md border border-ckdarkblue'>
            <div className='pb-3 flex items-center justify-between'>
                <div className=''>
                    <h3 className='text-lg text-ckdarkblue font-bold mb-2'>{comment?.name}</h3>
                    <p className=''>{comment?.email}</p>
                </div>

                <div>
                    <Rater total={5} rating={comment?.rating} interactive={false} />
                </div>
            </div>

            <div className='py-2 text-ckdarkblue'>
                <p>{comment?.comment}</p>
            </div>
        </div>
    )
}

export default CommentCard