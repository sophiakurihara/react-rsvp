import React from 'react';
import PropTypes from 'prop-types'

import ConfirmedFilter from "./ConfirmedFilter";
import Counter from "./Counter";
import GuestList from "./GuestList";

const MainContent = props => {
    return (
        <div className="main">
            <ConfirmedFilter
                toggleFilter={props.toggleFilter}
                isFiltered={props.isFiltered}
            />
            <Counter
                totalInvited={props.totalInvited}
                numberAttending={props.numberAttending}
                numberUnconfirmed={props.numberUnconfirmed}
            />
            <GuestList
                guests={props.guests}
                toggleConfirmation={props.toggleConfirmation}
                toggleEditing={props.toggleEditing}
                setName={props.setName}
                isFiltered={props.isFiltered}
                removeGuest={props.removeGuest}
                pendingGuest={props.pendingGuest}
            />
        </div>
    );
};

MainContent.propTypes = {
    numberAttending: PropTypes.number,
    numberUnconfirmed: PropTypes.number,
    totalInvited: PropTypes.number,
    guests: PropTypes.array.isRequired,
    toggleConfirmation: PropTypes.func.isRequired,
    toggleEditing: PropTypes.func.isRequired,
    setName: PropTypes.func.isRequired,
    isFiltered: PropTypes.bool.isRequired,
    pendingGuest: PropTypes.string.isRequired,
    toggleFilter: PropTypes.func.isRequired,
    removeGuest: PropTypes.func.isRequired
};
export default MainContent;