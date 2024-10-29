import React, { Component } from 'react';


class Navbar extends Component {
    render() {
    const {totalCounter} = this.props; 
        return (
            <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <span className='badge badge-pills badge-secondary'>{totalCounter}</span>
    </div>
</nav>
        );
    }
}
 
export default Navbar ;