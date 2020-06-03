import React, { Component } from 'react'

class Date extends Component {
    state = {}

    handleClick = () => {
        this.props.selectDateBtn()
    };

    render() {
        const { isGuest, calendarDate } = this.props;
        const date = calendarDate.toLocaleString().slice(0, 10)

        return (
            <div className="two">
                <div className="two__btns__first">Date</div>
                <div className="two__btns__second">{date}</div>
                <div className="two__btns__third">
                    <button
                        disabled={isGuest ? true : false}
                        onClick={() => this.handleClick()}>></button>
                </div>
            </div>
        );
    };
};

export default Date;