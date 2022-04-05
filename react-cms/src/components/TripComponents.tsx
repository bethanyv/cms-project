import sanityClient from '../lib/sanity';
import { useState, useEffect } from "react";
import { Trip } from '../lib/types/types';

const TripComponent = ({ place, startDate, endDate, savingsNeeded, reason, notes }: Trip) => {

    return (
        <div key={place} className="trip-entry">
            <div className='trip-header'>{place}</div>
            <div>For {reason}</div>
            <div>Leaving on {startDate} and coming back {endDate}!</div>
            <div>Need to save {savingsNeeded} by {startDate}</div>
        </div>
    );
}

export default TripComponent;