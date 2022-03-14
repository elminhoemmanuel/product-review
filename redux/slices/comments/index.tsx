import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { prevComments } from 'utils/data/comments'
import { Comment } from 'utils/types/comments'
 
 
// Define a type for the slice state
interface CommentState {
 comments: Comment[]
}
 
// Define the initial state using that type
const initialState: CommentState = {
 comments: [...prevComments],
}
 
export const commentsSlice = createSlice({
 name: 'comments',
 initialState,
 reducers: {
   addComment: (state, action:PayloadAction<Comment>) => {
     state.comments = [ action.payload, ...state.comments ]
   }
 },
})
 
export const { addComment } = commentsSlice.actions
 
export const commentsReducerName = commentsSlice.name
 
export const commentsReducer = commentsSlice.reducer
