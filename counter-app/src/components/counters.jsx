import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    render() { 
        const { counters, onIncrement, onDelete, onReset } = this.props;  // Destructuring props for easier access to counters and event handlers.
        return (
            <div>
                <button onClick={onReset} className='btn btn-primary btn-sm m-2'>Reset</button>
                {counters.map(counter => <Counter key={counter.id}
                    counter={counter}
                    onDelete={onDelete}
                    onIncrement={onIncrement} />)}
            </div>
        )
    }
}
 
export default Counters;