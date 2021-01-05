import React from 'react';
import PropTypes from 'prop-types';
import GuestInputForm from "./GuestInputForm";

const Header = props => {
    return (
        <header>
            <h1>RSVP</h1>
            <p>Built with React</p>
            <GuestInputForm
                newGuestSubmitHandler={props.newGuestSubmitHandler}
                handleNameInput={props.handleNameInput}
                pendingGuest={props.pendingGuest}

            />
        </header>
    );
};

Header.propTypes = {
    newGuestSubmitHandler: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string.isRequired,
    handleNameInput: PropTypes.func.isRequired
};
export default Header;