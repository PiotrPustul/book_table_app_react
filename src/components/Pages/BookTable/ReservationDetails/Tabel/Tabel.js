import React, { Component } from 'react'

class Tabel extends Component {
    state = {}
    render() {
        const { tableNr } = this.props;
        return (
            <div className="two">
                <div className="two__btns__first">Table</div>
                <div className="two__btns__second" style={{ fontSize: "20px" }}>{tableNr}</div>
                <div className="two__btns__third"></div>
            </div>
        );
    }
};

export default Tabel;