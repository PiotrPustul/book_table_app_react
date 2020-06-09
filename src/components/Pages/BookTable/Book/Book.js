import React, { Component } from 'react';
import './_Book.scss';
import ReservationDetails from '../ReservationDetails/ReservationDetails';
import TabelView from '../TabelView/TabelView';

class Book extends Component {
  state = {
    calendarDate: new Date(),
    hour: 12,
    minutes: 0,
    covers: 0,
    duration: 1,
    durationMin: 0,
    tableNr: '',
    isTable: false,
    activeTable: null,
    isGuest: false,
    isDate: false,
    addNewGuest: {
      addGuestBtn: false,
      title: '',
      firstName: '',
      lastName: '',
      email: '',
      phoneNr: ''
    },
    newGuest: [],
    bookTable: [],
    choseTable: [],
    divArr: []
  };

  addGuestOnChange = (e) => {
    const value = e.target.value;
    this.setState({
      [e.target.name]: value
    })
  };

  addGuest = () => {
    let copyNewGuest = [...this.state.newGuest];
    copyNewGuest.push(this.state.title, this.state.firstName, this.state.lastName, this.state.email, Number(this.state.phoneNr))
    this.setState({
      newGuest: copyNewGuest,
      addGuestBtn: true,
      isGuest: false
    })
  };

  addGuestNameBtn = () => {
    this.setState({
      isGuest: !this.state.isGuest
    })
  };

  timeDown = () => {
    this.setState({
      minutes: this.state.minutes - 15,
    })
    if (this.state.minutes <= 0) {
      return this.setState({
        hour: this.state.hour - 1,
        minutes: 45
      })
    }
  };

  timeUp = () => {
    this.setState({
      minutes: this.state.minutes + 15,
    })
    if (this.state.minutes >= 45) {
      return this.setState({
        hour: this.state.hour + 1,
        minutes: 0
      })
    }
  };

  coversDown = () => {
    this.setState({
      covers: this.state.covers - 1
    })
  };

  coversUp = () => {
    this.setState({
      covers: this.state.covers + 1
    })
  };

  durationDown = () => {
    this.setState({
      durationMin: this.state.durationMin - 15,
    })
    if (this.state.durationMin <= 0) {
      return this.setState({
        duration: this.state.duration - 1,
        durationMin: 45
      })
    }
  };

  durationUp = () => {
    this.setState({
      durationMin: this.state.durationMin + 15,
    })
    if (this.state.durationMin >= 45) {
      return this.setState({
        duration: this.state.duration + 1,
        durationMin: 0
      })
    }
  };

  selectTable = (id, array) => {
    array.forEach(div => {
      if (id === div.id) {
        div.classList.toggle("tableActive");
        this.setState({
          tableNr: this.state.tableNr === id ? '' : id
        })
      }
      if (id !== div.id) {
        div.classList.toggle("tableInactive");
      }
    })
    this.setState({
      divArr: [...array]
    })
  };

  selectDateBtn = () => {
    this.setState({
      isDate: !this.state.isDate
    })
  };

  dateFromCalendar = (calendarDate) => {
    this.setState({ calendarDate, isDate: false })
    console.log(this.state.calendarDate);
  };

  bookTable = (arr) => {
    let newArr = [...this.state.bookTable];
    newArr.push(this.state.calendarDate, this.state.title, this.state.firstName, this.state.lastName, this.state.email, this.state.phoneNr, this.state.hour, this.state.minutes, this.state.duration, this.state.durationMin, this.state.covers, this.state.tableNr);
    // alert(newArr)
    alert(`Reservation details: 
    Name: ${this.state.title} ${this.state.firstName} ${this.state.lastName}
    Date: ${this.state.calendarDate.toLocaleString().slice(0, 10)}
    Time: ${this.state.hour}:${this.state.minutes < 10 ? `${this.state.minutes}0` : `${this.state.minutes}`}
    Covers: ${this.state.covers}
    Duration: ${this.state.duration}:${this.state.durationMin}
    Tabel: ${this.state.tableNr}
    `)
    this.setState({
      bookTable: newArr,
      addGuestBtn: false,
      title: '',
      firstName: '',
      lastName: '',
      email: '',
      phoneNr: ''
    })
    this.clearDivArr(this.state.divArr)
  };

  clearDivArr = (arr) => {
    const arrCopy = [...arr];
    arrCopy.forEach(div => {
      if (div.classList.contains("tableActive")) {
        div.classList.remove("tableActive");
        div.classList.add("tableBooked");
      }
      if (div.classList.contains("tableInactive")) {
        div.classList.remove("tableInactive");
      }
      console.log(div.classList.value);
    })
    this.setState({
      divArr: arrCopy
    })
  };

  render() {
    return (
      <div className="book__container">
        <ReservationDetails
          calendarDate={this.state.calendarDate}
          isGuest={this.state.isGuest}
          isDate={this.state.isDate}
          addGuestNameBtn={this.addGuestNameBtn}
          selectDateBtn={this.selectDateBtn}
          timeDown={this.timeDown}
          timeUp={this.timeUp}
          hour={this.state.hour}
          minutes={this.state.minutes}
          covers={this.state.covers}
          coversDown={this.coversDown}
          coversUp={this.coversUp}
          duration={this.state.duration}
          durationMin={this.state.durationMin}
          durationDown={this.durationDown}
          durationUp={this.durationUp}
          selectTable={this.selectTable}
          tableNr={this.state.tableNr}
          addGuestBtn={this.state.addGuestBtn}
          title={this.state.title}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          email={this.state.email}
          phoneNr={this.state.phoneNr}
          bookTable={this.bookTable}
        />
        <TabelView
          isGuest={this.state.isGuest}
          isDate={this.state.isDate}
          addGuest={this.addGuest}
          addGuestOnChange={this.addGuestOnChange}
          dateFromCalendar={this.dateFromCalendar}
          calendarDate={this.state.calendarDate}
          newGuest={this.state.newGuest}
          selectTable={this.selectTable}
          tableNr={this.state.tableNr}
          activeTable={this.state.activeTable}
          choseTable={this.state.choseTable}
        />
      </div>
    );
  }
};

export default Book;
