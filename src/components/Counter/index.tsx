import React, {useState} from 'react';

import './styles.scss';

export const Counter: React.FC = () => {
    const [count, setCount] = useState(0);

    const inc = () => {
        setCount(count + 1);
    };

    const dec = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <button onClick={inc}>+</button>
            {count}
            <button onClick={dec}>-</button>
        </div>
    )
}