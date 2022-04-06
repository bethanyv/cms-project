interface TripProps {
    place: string;
    startDate: string;
    endDate: string;
    savingsNeeded: number;
    reason: string;
    notes: string;
}

const TripComponent = ({ place, startDate, endDate, savingsNeeded, reason, notes }: TripProps) => {

    return (
        <div key={place} className="trip-entry space-top-md">
            <div className="trip-header">{place}</div>
            <div>For {reason}</div>
            <div>Leaving on {startDate} and coming back {endDate}!</div>
            <div>Need to save {savingsNeeded} by {startDate}</div>
        </div>
    );
}

export default TripComponent;