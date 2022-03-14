import CommentsList from '@/components/CommentsList';

export default function Home() {
    return (
        <div className='2xl:max-w-screen-2xl 2xl:mx-auto w-full md:w-4/5 mx-auto px-5 py-12'>
            <h1 className='text-2xl text-ckdarkblue font-bold mb-10'>Product Review App</h1>

            <CommentsList />
        </div>
    )
}
