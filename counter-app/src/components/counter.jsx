import React, { Component } from 'react'

class Counter extends Component {    
    render() {
        const {counter, onDelete, onIncrement, } = this.props;  // Destructuring props for easier access to counter object properties.
        return (
            <div>
                <h1 className={this.getClassBages()}>{this.formatCount()}</h1>
                <button onClick={() => onIncrement(counter)} className='flex flex-column btn btn-secondary btn-sm'>Increment</button>
                <button onClick={() => onDelete(counter.id)} className='btn btn-danger btn-sm m-2'>Delete</button>
            </div>

        );
    }
    getClassBages() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? 'warning' : 'primary';
        return classes;
    }

    formatCount() {
        const {value} = this.props.counter
        return value === 0 ? 'Zero' : value; 
    }
}


 
export default Counter;