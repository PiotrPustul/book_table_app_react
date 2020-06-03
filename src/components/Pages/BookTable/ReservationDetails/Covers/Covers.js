import React, { Component } from 'react';

class Covers extends Component {
    state = {}

    handleCoversDown = () => {
        this.props.coversDown()
    };

    handleCoversUp() {
        this.props.coversUp()
    };

    render() {
        const { covers } = this.props;
        return (
            <div className="two__btns">
                <div className="two__btns__first">Covers</div>
                <div className="two__btns__second">{covers}</div>
                <div className="two__btns__third">
                    <button disabled={covers === 0 ? true : null} onClick={() => this.handleCoversDown()}>-</button>
                    <button onClick={() => this.handleCoversUp()}>+</button>
                </div>
            </div>
        );
    }
}

export default Covers;