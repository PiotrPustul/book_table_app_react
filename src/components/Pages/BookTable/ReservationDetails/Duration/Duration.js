import React, { Component } from 'react';

class Duration extends Component {
    state = {}

    handleDurationDown = () => {
        this.props.durationDown()
    };

    handleDurationUp = () => {
        this.props.durationUp()
    };

    render() {
        const { duration, durationMin } = this.props;
        return (
            <div className="two__btns">
                <div className="two__btns__first">Duration</div>
                <div className="two__btns__second">{duration} h {durationMin < 10 ? `${durationMin}0` : `${durationMin}`} min</div>
                <div className="two__btns__third">
                    <button
                        disabled={duration <= 1 && durationMin === 0 ? true : null}
                        onClick={() => this.handleDurationDown()}>
                        <i className="fas fa-minus-circle"></i>
                    </button>
                    <button
                        disabled={duration >= 10 ? true : null}
                        onClick={() => this.handleDurationUp()}>
                        <i className="fas fa-plus-circle"></i>
                    </button>
                </div>
            </div>
        );
    }
}

export default Duration;