import { render, screen } from '@testing-library/react'
import { within } from '@testing-library/dom'
import CommentCard from '@/components/CommentCard';

const sampleComment = {
    name:"John test",
    email:"john@test.com",
    rating:4,
    comment:"It's a good product"
}

test("On render, check that comment name is displayed correctly", () => {
    const { getByTestId } = render(<CommentCard comment={sampleComment} />);
    const { getByText } = within(screen.getByTestId('comment-name'))
    expect(getByText("John test")).toBeInTheDocument()
});

test("On render, check that comment email is displayed correctly", () => {
    const { getByTestId } = render(<CommentCard comment={sampleComment} />);
    const { getByText } = within(screen.getByTestId('comment-email'))
    expect(getByText("john@test.com")).toBeInTheDocument()
});

test("On render, check that the comment is displayed correctly", () => {
    const { getByTestId } = render(<CommentCard comment={sampleComment} />);
    const { getByText } = within(screen.getByTestId('comment-body'))
    expect(getByText("It's a good product")).toBeInTheDocument()
});