import React, { Component } from 'react';
import GuestName from './GuestName/GuestName';
import Time from './Time/Time';
import Covers from './Covers/Covers';
import Duration from './Duration/Duration';
import Date from './Date/Date';
import Tabel from './Tabel/Tabel';
import './_ReservationDetails.scss';

class ReservationDetails extends Component {
    state = {};

    handleClick = () => {
        this.props.bookTable()
    };

    render() {
        return (
            <aside>
                <GuestName
                    isDate={this.props.isDate}
                    addGuestNameBtn={this.props.addGuestNameBtn}
                    addGuestBtn={this.props.addGuestBtn}
                    title={this.props.title}
                    firstName={this.props.firstName}
                    lastName={this.props.lastName}
                    email={this.props.email}
                    phoneNr={this.props.phoneNr}
                />
                <div className="one">
                    <div>Reservation details</div>
                </div>
                <Date
                    calendarDate={this.props.calendarDate}
                    selectDateBtn={this.props.selectDateBtn}
                    isGuest={this.props.isGuest}
                />
                <Time
                    timeDown={this.props.timeDown}
                    timeUp={this.props.timeUp}
                    hour={this.props.hour}
                    minutes={this.props.minutes}
                />
                <Covers
                    covers={this.props.covers}
                    coversDown={this.props.coversDown}
                    coversUp={this.props.coversUp}
                />
                <Duration
                    duration={this.props.duration}
                    durationMin={this.props.durationMin}
                    durationDown={this.props.durationDown}
                    durationUp={this.props.durationUp}
                />
                <Tabel tableNr={this.props.tableNr} />
                <div className="reserv__btn">
                    <button onClick={() => this.handleClick()}>Book a table</button>
                </div>
            </aside>
        );
    }
};

export default ReservationDetails;