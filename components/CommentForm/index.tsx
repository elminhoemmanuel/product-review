import React, { SyntheticEvent, useEffect, useState } from 'react'
import Header from '../Common/Header'
import Input from '../Common/Input'
import TextBox from '../Common/TextBox'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import PriBtn from '../Common/PriBtn'
import { FormComment } from "../../utils/types/comments"
import { addComment } from 'redux/slices/comments';
import { useAppDispatch, useAppSelector } from 'redux/hooks'

type RatingType = {
    rating: number
} & React.SyntheticEvent

const CommentForm = () => {

    const dispatch = useAppDispatch();
    const { comments } = useAppSelector(state => state.comments);
    const [ratingVal, setRatingVal] = useState(0);
    const [ratingObj, setRatingObj] = useState<FormComment | null>(null);

    const handleRating = (e: RatingType): void => {
        setRatingVal(e.rating);
    }

    const handleSubmit = (e: React.SyntheticEvent): void => {
        e.preventDefault();
        if (ratingObj?.name !== undefined && ratingObj?.email !== undefined && ratingObj?.comment !== undefined) {
            dispatch(addComment({ name: ratingObj?.name, email: ratingObj?.email, comment: ratingObj?.comment, rating: ratingVal }))
            alert("Your comment has been recorded")
            handleResetValues();
        } else {
            alert("Comment could not be added")
        }


    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setRatingObj({
            ...ratingObj,
            [name]: value,
        });
    };

    const handleResetValues = (): void => {
        setRatingObj({ name: "", email: "", comment: "" });
        setRatingVal(0);
    }


    return (
        <form className='my-6' onSubmit={handleSubmit} >
            <Header text="Drop a Comment" size="sm" />

            <div className='my-3'>
                <Input value={ratingObj?.name} onChange={handleInputChange} name="name" type="text" placeholder='Name' required />
            </div>

            <div className='my-3'>
                <Input value={ratingObj?.email} onChange={handleInputChange} name="email" type="email" placeholder='Email' required />
            </div>

            <div className='mt-3 mb-5'>
                <TextBox value={ratingObj?.comment} onChange={handleInputChange} name="comment" placeholder='Comment' required />
            </div>

            <div className='mt-3 mb-8 flex items-center'>
                <p className='mr-4'>Rate this Product</p>
                <Rater total={5} rating={ratingVal} onRate={handleRating} />
            </div>

            <div className='my-3'>
                <PriBtn type="submit" disabled={!ratingVal ? true : false} >Submit</PriBtn>
            </div>


        </form>
    )
}

export default CommentForm