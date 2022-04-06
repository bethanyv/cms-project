import { useState, useEffect } from "react";
import { Trip } from '../lib/types/types';
import TripComponent from './TripComponent';
import { mockTripsResponse, mockUpdatedTripResponse } from '../lib/utils/mockResponses';
import { allTripsQuery } from "../lib/utils/queries";

const TripsComponent = () => {
    const [trips, setTrips] = useState<Trip[]>();
    // const query = allTripsQuery;

    const fetchData = async () => {
        setTrips(mockTripsResponse);
        setTimeout(() => setTrips(mockUpdatedTripResponse), 5000);
        // setTrips(await sanityClient.fetch(query, {}));
        // console.log('Trips:', trips);
    }

    const renderTrips = () => {
        return trips?.map((trip: Trip) => {
            return <TripComponent
                place={trip.place}
                startDate={trip.startDate}
                endDate={trip.endDate}
                savingsNeeded={trip.savingsNeeded}
                reason={trip.reason}
                notes={trip.notes}
            />
        })
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className="trips">
            <div className="trips-header">Upcoming trips</div>
            {
                trips && (
                    <div className="trip-list">
                        {renderTrips()}
                    </div>
                )
            }
        </div>
    );
}

export default TripsComponent;