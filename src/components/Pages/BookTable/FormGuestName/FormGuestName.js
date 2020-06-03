import React, { Component } from 'react';
import './_FormGuestName.scss';

class GuestName extends Component {
    state = {}

    handleClick = () => {
        this.props.addGuest()
    };

    handleChange = (e) => {
        this.props.addGuestOnChange(e)
    };

    render() {
        return (
            <div className="GuestName__container">
                <div className="Form__container">
                    <div>
                        <div className="Form__title">
                            <div>Personal details</div>
                            <button onClick={() => this.handleClick()}>Add guest</button>
                        </div>
                        <div className="FormFirstLine">
                            <div>
                                <label>Title</label>
                                <input type="text" name="title" onChange={this.handleChange} />
                            </div>
                            <div>
                                <label>First name</label>
                                <input type="text" name="firstName" onChange={this.handleChange} />
                            </div>
                            <div>
                                <label>Last name</label>
                                <input type="text" name="lastName" onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="FormSecondLine">
                            <div>
                                <label>Email</label>
                                <input type="email" name="email" onChange={this.handleChange} />
                            </div>
                            <div>
                                <label>Phone</label>
                                <input type="number" name="phoneNr" onChange={this.handleChange} />
                            </div>
                        </div>
                        {/* <div className="Form_add_guest">

                        </div> */}
                    </div>
                </div>
            </div>
        );
    }
};

export default GuestName;


    // handleOnChangeTitle = (e) => {
    //     this.props.addGuestOnChangeTitle(e)
    // };

    // handleOnChangeFirstName = (e) => {
    //     this.props.addGuestOnChangeFirstName(e)
    // };

// const GuestName = ({ addGuest }) => {

//     function handleClick() {
//         addGuest()
//     }
//     return (
//         <div className="GuestName__container">
//             <div className="Form__container">
//                 <div>
//                     <div className="Form__title">
//                         <div>Personal details</div>
//                         <button onClick={handleClick}>Add guest</button>
//                     </div>
//                     <div className="FormFirstLine">
//                         <div>
//                             <label>Title</label>
//                             <input type="text" name="title" />
//                         </div>
//                         <div>
//                             <label>First name</label>
//                             <input type="text" name="FirstName" />
//                         </div>
//                         <div>
//                             <label>Last name</label>
//                             <input type="text" name="LastName" />
//                         </div>
//                     </div>
//                     <div className="FormSecondLine">
//                         <div>
//                             <label>Email</label>
//                             <input type="email" name="email" />
//                         </div>
//                         <div>
//                             <label>Phone</label>
//                             <input type="number" name="phone" />
//                         </div>
//                     </div>
//                     {/* <div className="Form_add_guest">

//                     </div> */}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default GuestName;