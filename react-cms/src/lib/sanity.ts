import sanityClient from "@sanity/client";

export default sanityClient({
    "projectId": "1kxehmso",
    "dataset": "bethany",
    apiVersion: '2021-04-04', // use current UTC date - see "specifying API version"!
    token: '', // TODO: authenticate?
    useCdn: true, // `false` if you want to ensure fresh data
});