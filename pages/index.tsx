import CommentForm from '@/components/CommentForm';
import CommentGraph from '@/components/CommentGraph';
import CommentsList from '@/components/CommentsList';
import Header from '@/components/Common/Header';

export default function Home() {
    return (
        <div className='2xl:max-w-screen-2xl 2xl:mx-auto w-full px-5 md:px-12 py-12'>
            <Header text="Product Review App" size="lg" />

            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <CommentForm />
                <CommentGraph />
            </div>

            <CommentsList />
        </div>
    )
}
