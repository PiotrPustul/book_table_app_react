import React, { Component } from 'react';

class Time extends Component {
    state = {}

    handleTimeDown = () => {
        this.props.timeDown()
    }

    handleTimeUp = () => {
        this.props.timeUp()
    }

    render() {
        const { minutes, hour } = this.props;
        return (
            <div className="two__btns">
                <div className="two__btns__first">Time</div>
                <div className="two__btns__second">{hour < 22 ? (minutes < 10 ? (`${hour} : ${minutes}0`) : (`${hour} : ${minutes}`)) : (<h4 style={{ color: "red" }}>Reservation closed</h4>)}</div>
                <div className="two__btns__third">
                    <button
                        disabled={hour === 12 && minutes === 0 ?
                            true : null}
                        onClick={() => this.handleTimeDown()}>
                        <i className="fas fa-minus-circle" ></i>
                    </button>
                    <button
                        disabled={hour === 22 ? true : null}
                        onClick={() => this.handleTimeUp()}><i className="fas fa-plus-circle"></i>
                    </button>
                </div>
            </div >
        );
    }
}

export default Time;