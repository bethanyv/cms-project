import sanityClient from '../lib/sanity';
import { useState, useEffect } from "react";
import { Trip } from '../lib/types/types';
import TripComponent from './TripComponents';

const TripsComponent = () => {
    const [trips, setTrips] = useState<Trip[]>();
    const query = '*[_type == "trip"] {place, startDate, endDate, savingsNeeded, reason, notes}'

    const fetchData = () => {
        sanityClient
            .fetch(query, {})
            .then((trips: []) => {
                console.log('Trips:', trips)
                setTrips(trips);
            })
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className="trips">
            {
                trips && (
                    <div>
                        {
                            trips.map((trip: Trip) => {
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
                    </div>
                )
            }
        </div>
    );
}

export default TripsComponent;