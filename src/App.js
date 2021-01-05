import React, { Component } from 'react';
import './App.css';

import Header from "./Header";
import MainContent from "./MainContent";

class App extends Component {

    state = {
        isFiltered: false,
        pendingGuest: "",
        guests: [
            {
                name: 'Treasure',
                isConfirmed: false,
                isEditing: false
            },
            {
                name: 'Nic',
                isConfirmed: true,
                isEditing: false
            },
            {
                name: 'Matt',
                isConfirmed: false,
                isEditing: true
            }
        ]
    };


    toggleGuestPropertyAt = (property, indexToChange) =>
        this.setState({
            guests: this.state.guests.map((guest,index) => {
                if (index === indexToChange){
                    return {
                        ...guest,
                        [property]: !guest[property]
                    }
                }
                return guest;
            })
        });

    toggleConfirmationAt = index => {
        this.toggleGuestPropertyAt("isConfirmed",index)
    };

    // handler is written at the top level of the App
    removeGuestAt = index => {
        this.setState({
            guests: [
                ...this.state.guests.slice(0, index),
                ...this.state.guests.slice(index + 1)
            ]
        })
    }
    toggleEditingAt = index => {
        this.toggleGuestPropertyAt("isEditing",index)
    };

    setNameAt = (name, indexToChange) => {
        this.setState({
            guests: this.state.guests.map((guest, index) => {
                if (index === indexToChange) {
                    return {
                        ...guest,
                        name
                    };
                }
                return guest;
            })
        })
    };

    toggleFilter = () => {
        this.setState({ isFiltered: !this.state.isFiltered })
    };

    handleNameInput = e => {
        this.setState({
            pendingGuest: e.target.value
        });
    }

    newGuestSubmitHandler = e => {
        e.preventDefault();
        this.setState({
            guests: [{
                name: this.state.pendingGuest,
                isConfirmed: false,
                isEditing: false
            },
                ...this.state.guests
            ],
            pendingGuest: ""
        });
    }
    getTotalInvited = () => this.state.guests.length;
    getAttendingGuests = () =>
        this.state.guests.reduce(
            (total, guest) => guest.isConfirmed ? total + 1 : total ,
            0);
   // getUnconfirmedGuests = () =>
    render() {
        const totalInvited = this.getTotalInvited();
        const numberAttending = this.getAttendingGuests();
        console.log(numberAttending)
        const numberUnconfirmed = totalInvited - numberAttending;

        return (
            <div className="App">
                <Header
                    newGuestSubmitHandler={this.newGuestSubmitHandler}
                    handleNameInput={this.handleNameInput}
                    pendingGuest={this.state.pendingGuest}
                />
                <MainContent />
            </div>
        );
    }
}

export default App;
