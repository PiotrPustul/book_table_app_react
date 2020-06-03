import React from 'react';
import './_TabelView.scss';
import FormGuestName from '../FormGuestName/FormGuestName';
import Calendar from '../Calendar/Calendar';

// const TabelView = ({ tableNr, dateFromCalendar, calendarDate, isGuest, isDate, addGuest, addGuestOnChange, newGuest }) => {
//     const myFunction = () => {
//         const div1 = document.getElementById('1')
//         div1.classList.toggle("tableActive");
//         this.setState({
//             tableNr: 1
//         })
//         // const index = Array.prototype.indexOf.call(this.parentElement.children, this);
//         // index.indexOf("id")
//         // const index = document.getElementsByClassName('first__row').findIndex(el => el.id === id);
//         // console.log(index);
//     }

//     return (
//         <main>
//             {isGuest && !isDate &&
//                 <FormGuestName
//                     addGuest={addGuest}
//                     addGuestOnChange={addGuestOnChange}
//                     newGuest={newGuest}
//                 />}

//             {isDate && !isGuest &&
//                 <Calendar
//                     calendarDate={calendarDate}
//                     dateFromCalendar={dateFromCalendar}
//                 />}

//             {!isGuest && !isDate &&
//                 <div className="tabel__view">
//                     <div className="first__row">
//                         <div onClick={myFunction} id="1">1</div>
//                         <div onClick={myFunction} id="2">2</div>
//                         <div id="3">3</div>
//                         <div id="4">4</div>
//                         <div id="5">5</div>
//                     </div>
//                     <div className="second__row">
//                         <div id="11">11</div>
//                         <div id="12">12</div>
//                         <div id="13">13</div>
//                         <div id="14">14</div>
//                     </div>
//                     <div className="first__row">
//                         <div id="6">6</div>
//                         <div id="7">7</div>
//                         <div id="8">8</div>
//                         <div id="9">9</div>
//                         <div id="10">10</div>
//                     </div>
//                 </div>}
//         </main>
//     );
// };

// export default TabelView;

class TabelView extends React.Component {
    state = {
        arr: []
    };

    myFunction = (e) => {
        const tableArr = document.querySelectorAll("div.table")
        this.props.selectTable(e.target.id, tableArr);
        console.log(e.target.id);
    };

    componentDidMount() {
        const abc = document.querySelectorAll("div.table")
        console.log(abc);
    };

    render() {
        const { choseTable, dateFromCalendar, calendarDate, isGuest, isDate, addGuest, addGuestOnChange, newGuest } = this.props;
        return (
            <main>
                {isGuest && !isDate &&
                    <FormGuestName
                        addGuest={addGuest}
                        addGuestOnChange={addGuestOnChange}
                        newGuest={newGuest}
                    />}

                {isDate && !isGuest &&
                    <Calendar
                        calendarDate={calendarDate}
                        dateFromCalendar={dateFromCalendar}
                    />}

                {!isGuest && !isDate &&
                    <div className="tabel__view">
                        <div className="first__row">
                            <div onClick={this.myFunction} className="table" id="1">1</div>
                            <div onClick={this.myFunction} className="table" id="2">2</div>
                            <div onClick={this.myFunction} className="table" id="3">3</div>
                            <div onClick={this.myFunction} className="table" id="4">4</div>
                        </div>
                        <div className="second__row">
                            <div onClick={this.myFunction} className="table" id="9">9</div>
                            <div onClick={this.myFunction} className="table" id="10">10</div>
                            <div onClick={this.myFunction} className="table" id="11">11</div>
                        </div>
                        <div className="first__row">
                            <div onClick={this.myFunction} className="table" id="5">5</div>
                            <div onClick={this.myFunction} className="table" id="6">6</div>
                            <div onClick={this.myFunction} className="table" id="7">7</div>
                            <div onClick={this.myFunction} className="table" id="8">8</div>
                        </div>
                    </div>}
            </main>
        );
    }
}

export default TabelView;