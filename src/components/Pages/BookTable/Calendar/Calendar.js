import React, { Component } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

// class CalendarNpm extends Component {
//     state = {
//         date: new Date(),
//     }

//     onChange = date => this.setState({ date })

//     render() {
//         return (
//             <div>
//                 <Calendar
//                     onChange={this.onChange}
//                     value={this.state.date}
//                 />
//             </div>
//         );
//     }
// }

// export default CalendarNpm;

class CalendarNpm extends Component {
    state = {
        // date: this.props.calendarDate
    };

    onChange = (date) => {
        this.props.dateFromCalendar(date)
        // console.log(date);
    };

    render() {
        return (
            <div>
                <Calendar
                    onChange={this.onChange}
                    value={this.props.calendarDate}
                />
            </div>
        );
    }
}

export default CalendarNpm;