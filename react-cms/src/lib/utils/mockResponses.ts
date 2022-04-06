import { Trip } from "../types/types"

export const mockTripsResponse: Trip[] = [
    {
        place: 'Colorado',
        startDate: '2022-05-19',
        endDate: '2022-05-21',
        savingsNeeded: 700,
        reason: 'Bran\'s Ring Dance',
        notes: '',
    },
    {
        place: 'Austin',
        startDate: '2022-05-25',
        endDate: '2022-05-28',
        savingsNeeded: 500,
        reason: 'Brooklynn & Sarah visiting!',
        notes: '',
    },
];

export const mockUpdatedTripResponse: Trip[] = [
    {
        place: 'Colorado',
        startDate: '2022-05-19',
        endDate: '2022-05-21',
        savingsNeeded: 700,
        reason: 'Bran\'s Ring Dance',
        notes: '',
    },
    {
        place: 'Austin',
        startDate: '2022-05-25',
        endDate: '2022-05-28',
        savingsNeeded: 500,
        reason: 'Brooklynn & Sarah visiting!',
        notes: '',
    },
    {
        place: 'Added this one later!',
        startDate: '2022-06-06',
        endDate: '2022-06-11',
        savingsNeeded: 200,
        reason: 'Reason: for a TEST',
        notes: '',
    },
];