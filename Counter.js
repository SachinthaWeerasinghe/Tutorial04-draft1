
import React, { useState } from 'react';
const Counter = (props) => {

const [count, setCount] = useState(props.initialCount);

const handleIncrement = () => {
setCount(count + props.step);
};


const handleDecrement = () => {
setCount(count - props.step);
};
return (
<div>
<h3>Counter: {count}</h3>
<button onClick={handleIncrement}>Increment</button>
<button onClick={handleDecrement}>Decrement</button>
</div>
);
};
export default Counter;
