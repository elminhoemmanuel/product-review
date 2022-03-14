import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { increment, decrement } from 'redux/slices/counter';

export default function Home() {
    const dispatch = useAppDispatch();
    const { value } = useAppSelector( state => state.counter );
    return (
        <div >
            Product Review App
        </div>
    )
}
