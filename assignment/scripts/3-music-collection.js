console.log('***** Music Collection *****')
// [x] Create a variable `collection` that starts as an empty array.
let collection = [];

// // [x] Add a function named `addToCollection`. This function should:
// //   - Take in the album's `title`, `artist`, `yearPublished` as input parameters
// //   - Create a new object having the above properties
// //   - Add the new object to the end of the `collection` array
// //   - Return the newly created object
function addToCollection(titleInput, artistInput, yearPublishedInput, tracksInput){
    let newAlbum = {
        title: titleInput,
        artist: artistInput,
        yearPublished: yearPublishedInput,
        tracks: tracksInput
    }
    collection.push(newAlbum);
    return newAlbum && console.log(`newAlbum added:`, newAlbum);
}

// [/] Add an array of `tracks` to your album objects. Each track should have a `name` and `duration`. You will need to update the functions to support this new property:
//   - Update the `addToCollection` function to also take an input parameter for the array of tracks.
//   - Update `search` to allow a `trackName` search criteria.
//   - Update the `showCollection` function to display the list of tracks for each album with its name and duration.
// ```
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
//     3. NAME: DURATION
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
// ```

console.log(`-------------------------------------------------`);
function makeTrackList(nameArray, lengthArray, finalArray){
    for (let i = 0; i < nameArray.length; i++){
        let newTrack = {
            trackName: nameArray[i],
            trackLength: lengthArray[i]
        }
        this[`track` + (i + 1)] = newTrack;
        finalArray.push(this[`track` + (i + 1)]);
    }
}
// tracklist generating section
let threeThreeThreeTrackNames =
    [`Let Go`, `I Can See the Future`, `X (featuring Jeremih)`, `Shy Guy`, `Bouncin'`,`Unconditional`, `Angels (featuring Kaash Paige)`, `333 (featuring Absolutely)`, `Undo (Back to My Heart) (With Wax Motif)`, `Let Me Down Slowly`, `Last Call`, `The Chase`, `Pasadena (featuring Buddy)`, `Small Reminders`, `Bouncin' Pt. 2`, `It's a Wrap (featuring Quiet Child and Kudzai)`];
let threeThreeThreeTrackLengths = 
    [113, 176, 171, 66, 175, 197, 169, 181, 197, 185, 220, 191, 176, 270, 201, 140];
let threeThreeThreeTracks = [];
makeTrackList(threeThreeThreeTrackNames, threeThreeThreeTrackLengths, threeThreeThreeTracks);

let happierThanEverTrackNames = 
    [`Getting Older`, `I Didn't Change My Number`, `Billie Bossa Nova`, `My Future`, `Oxytocin`, `Goldwing`, `Lost Cause`, `Halley's Comet`, `Not My Responsibility`, `Overheated`, `Everybody Dies`, `Your Power`, `NDA`, `Therefore I Am`, `Happier Than Ever`, `Male Fantasy`]
let happierThanEverTrackLengths = 
    [244, 158, 196, 210, 210, 151, 212, 234, 227, 214, 206, 245, 195, 173, 298, 194];
let happierThanEverTracks = [];
makeTrackList(happierThanEverTrackNames, happierThanEverTrackLengths, happierThanEverTracks);

let theDreamingTrackNames = 
    [`Sat in Your Lap`, `There Goes a Tenner`, `Pull Out the Pin`, `Suspended in Gaffa`, `Leave It Open`, `The Dreaming`, `Night of the Swallow`, `All the Love`, `Houdini`, `Get Out of My House`];
let theDreamingTrackLengths =
    [209, 204, 326, 234, 200, 281, 322, 269, 228, 325];
let theDreamingTracks = [];   
makeTrackList(theDreamingTrackNames, theDreamingTrackLengths, theDreamingTracks);

let houndsOfLoveTrackNames = 
    [`Running Up That Hill (A Deal with God)`, `Hounds of Love`, `The Big Sky`, `Mother Stands for Comfort`, `Cloudbusting`, `And Dream of Sheep`,  `Under Ice`, `Waking the Witch`, `Watching You Without Me`, `Jig of Life`, `Hello Earth`, `The Morning Fog`];
let houndsOfLoveTrackLengths = 
    [303, 182, 281, 187, 310, 165, 141, 258, 246, 244, 373, 154];
let houndsOfLoveTracks = [];
makeTrackList(houndsOfLoveTrackNames, houndsOfLoveTrackLengths, houndsOfLoveTracks);

let theArchAndroidTrackNames =
    [`Suite II Overture`, `Dance or Die (featuring Saul Williams)`, `Faster`, `Locked Inside`, `Sir Greendown`, `Cold War`, `Tightrope (featuring Big Boi)`, `Neon Gumbo`, `Oh, Maker`, `Come Alive (The War of the Roses)`, `Mushrooms & Roses`, `Suite III Overture`, `Neon Valley Street`, `Make the Bus (featuring of Montreal)`, `Wondaland`, `57821 (featuring Deep Cotton)`, `Say You'll Go`, `BabopbyeYa`];
let theArchAndroidTrackLengths =
    [151, 192, 199, 256, 134, 203, 262, 97, 226, 202, 342, 101, 251, 199, 216, 196, 361, 527];
let theArchAndroidTracks = [];
makeTrackList(theArchAndroidTrackNames, theArchAndroidTrackLengths, theArchAndroidTracks);

let vespertineTrackNames =
    [`Hidden Place`, `Cocoon`, `It's Not Up to You`, `Undo`, `Pagan Poetry`, `Frosti`, `Aurora`, `An Echo, A Stain`, `Sun in My Mouth`, `Heirloom`, `Harm of Will`, `Unison`];
let vespertineTrackLengths =
    [310, 270, 310, 342, 316, 102, 282, 238, 158, 310, 281, 410];
let vespertineTracks = [];
makeTrackList(vespertineTrackNames, vespertineTrackLengths, vespertineTracks);

// 2 mins = 120
// 3 mins = 180
// 4 mins = 240
// 5 mins = 300
// 6 mins = 360
// end tracklist generating section

// // [x] Test the `addToCollection` function:
// //   - Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
// //   - Console.log each album as added using the returned value.
// //   - After all are added, console.log the `collection` array.
addToCollection(`333`, `Tinashe`, 2021, threeThreeThreeTracks);
addToCollection(`Happier Than Ever`, `Billie Eilish`, 2021, happierThanEverTracks);
addToCollection(`The Dreaming`, `Kate Bush`, 1982, theDreamingTracks);
addToCollection(`Hounds of Love`, `Kate Bush`, 1985, houndsOfLoveTracks);
addToCollection(`The ArchAndroid`, `Janelle Monáe`, 2010, theArchAndroidTracks);
addToCollection(`Vespertine`, `Björk`, 2001, vespertineTracks);
console.log(`collection:`, collection);

// // [x] Add a function named `showCollection`. This function should:
// //   - Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
// //   - Console.log the number of items in the array.
// //   - Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.'
let i = 0;
function showCollection(array){
    console.log(`number of items in collection:`, array.length);
    for (i = 0; i < array.length; i++){
        console.log(array[i].title + ` by ` + array[i].artist + `, published in ` + array[i].yearPublished);
    }
}

// // [x] Test the `showCollection` function.
// showCollection(collection);

// [x] Add a function named `findByArtist`. This function should:
//   - Take in `artist` (a string) parameter
//   - Create an array to hold any results, empty to start
//   - Loop through the `collection` and add any objects with a matching artist to the array.
//   - Return the array with the matching results. If no results are found, return an empty array.

function findByArtist(artist){
    let artistMatches = [];
    for (i = 0; i < collection.length; i++){
        if (artist === collection[i].artist){
            artistMatches.push(collection[i])
        }
    }
    if (artistMatches.length === 1){
        console.log(`your search for`, artist, `returned this album:` , artistMatches);
    }
    else if (artistMatches.length > 1){
        console.log(`your search for`, artist, `returned these albums:`, artistMatches);
    }
    else {
        console.log(`your search for`, artist, `did not return any results`);
    }
    return artistMatches;
}



// // [x] Test the `findByArtist` function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.
findByArtist(`Tinashe`); // single result
findByArtist(`Kate Bush`); // multiple result
findByArtist(`Katy Perry`); // no result

// // [x] Create a function called `search`. This function should:
// //   - Take an input parameter for a search criteria object. Create your solution based on a search object that has these properties:
// //   ```
// //   { artist: 'Ray Charles', year: 1957 }
// //   ```
// //   - The returned output from `search` should meet these requirements:
// //     - Return a new array of all items in the `collection` matching *all* of the search criteria.
// //     - If no results are found, return an empty array.
// //     - If there is no search object or an empty search object provided as input, then return all albums in the `collection`.

function search(searchInput){
    let searchMatches = [];
    for (i = 0; i < collection.length; i++){
        if (searchInput === collection[i].title || searchInput === collection[i].artist || searchInput === collection[i].yearPublished){
            searchMatches.push(collection[i]);
        }
    }
    if (searchMatches.length === 1){
        console.log(`your search for`, searchInput, `returned this album:` , searchMatches);
    }
    else if (searchMatches.length > 1){
        console.log(`your search for`, searchInput, `returned these albums:`, searchMatches);
    }
    else {
        console.log(`your search for`, searchInput, `did not return any results`);
    }
    return searchMatches;
}

search(1985); // should return `Hounds of Love`
search(`Kate Bush`); // should return `The Dreaming` and `Hounds of Love`
search(`Vespertine`); // should return `Vespertine`
search('Katy Perry'); // should return an empty array
