export default {
    title: 'Trip',
    name: 'trip',
    type: 'document',
    fields: [
        {
            title: 'Place',
            name: 'place',
            type: 'string',
        },
        {
            title: 'Reason',
            name: 'reason',
            type: 'string',
        },
        {
            title: 'Start Date',
            name: 'startDate',
            type: 'date',
        },
        {
            title: 'End Date',
            name: 'endDate',
            type: 'date',
        },
        {
            title: 'Savings Needed',
            name: 'savingsNeeded',
            type: 'number',
        },
        {
            title: 'Notes',
            name: 'notes',
            type: 'array',
            of: [{ type: 'block' }],
        },
    ],
}