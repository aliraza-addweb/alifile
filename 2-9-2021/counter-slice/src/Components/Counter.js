import { useSelector, useDispatch } from "react-redux";
import { counterSlicesActions } from "../Store/index";

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);
    const show = useSelector(state => state.counter);
    const CountHandler = () => {
        dispatch(counterSlicesActions.increse(5))
    }
    const incrementHandler = () => {
        dispatch(counterSlicesActions.increment())
    }
    const decrementHandler = () => {
        dispatch(counterSlicesActions.decrement())
    }
    return (
        <div>
            {show && <div>
                {counter}
            </div>}
            <button onClick={incrementHandler}>increment</button>
            <button onClick={CountHandler}>count</button>
            <button onClick={decrementHandler}>decrement</button>
        </div>
    )
}
export default Counter;