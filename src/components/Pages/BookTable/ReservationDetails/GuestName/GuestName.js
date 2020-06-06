import React, { Component } from 'react';

class GuestName extends Component {
    state = {}

    handleClick = () => {
        this.props.addGuestNameBtn();
    };

    render() {
        const { isDate, addGuestBtn, title, firstName, lastName, } = this.props;
        return (
            <>
                <div className="one">
                    <div>Guest</div>
                </div>
                <div className="two">
                    {addGuestBtn ?
                        <div>
                            <span style={{ textTransform: "uppercase" }}>{title} {firstName} {lastName}</span>
                        </div> :
                        <div>Guest name</div>}
                    <button
                        disabled={isDate ? true : false}
                        onClick={() => this.handleClick()}><i className="fas fa-arrow-alt-circle-right"></i></button>
                </div>
            </>
        );
    }
};

export default GuestName;
