import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { Comment, RatingsScore } from 'utils/types/comments';
import dynamic from 'next/dynamic'
import Header from '../Common/Header';

const Chart = dynamic(() => import('react-apexcharts'))

const CommentGraph = () => {

    const dispatch = useAppDispatch();
    const { comments } = useAppSelector(state => state.comments);

    const handleRatingScores = (comments: Comment[]): number[] => {
        let usedRating: RatingsScore = { ones: 0, twos: 0, threes: 0, fours: 0, fives: 0 }
        for (let i = 0; i < comments.length; i++) {
            switch (comments[i].rating) {
                case 1:
                    usedRating.ones = usedRating.ones + 1
                    break;
                case 2:
                    usedRating.twos = usedRating.twos + 1
                    break;
                case 3:
                    usedRating.threes = usedRating.threes + 1
                    break;
                case 4:
                    usedRating.fours = usedRating.fours + 1
                    break;
                case 5:
                    usedRating.fives = usedRating.fives + 1
                    break;

                default:
                    break;
            }
        }
        return handleCreateSeries(usedRating)
    }

    const handleCreateSeries = (val: RatingsScore): number[] => {
        let numArr:number[] = []
        if (val) {
            for (const key in val) {
                numArr.push(val[key as keyof RatingsScore])
            }
        }

        return numArr
    }

    const options = {
        chart: {
            id: "basic-bar",
        },
        xaxis: {
            categories: ["1-Star", "2-Stars", "3-Stars", "4-Stars", "5-Stars"]
        },
        colors:["#0B1242"]
    }

    const series = [
        {
            name: "Product review Trend",
            data: handleRatingScores(comments)
        }
    ]

    useEffect(() => {
    }, [comments])

    return (
        <div className=''>
            <div className='my-3'><Header text="Reviews Trend" size="sm" /></div>

            <Chart
                options={options}
                series={series}
                type="bar"
                width="100%"
                height="320px"
            />
        </div>
    )
}

export default CommentGraph