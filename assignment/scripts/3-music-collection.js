console.log('***** Music Collection *****')
// [x] Create a variable `collection` that starts as an empty array.
let collection = [];

// [x] Add a function named `addToCollection`. This function should:
//   - Take in the album's `title`, `artist`, `yearPublished` as input parameters
//   - Create a new object having the above properties
//   - Add the new object to the end of the `collection` array
//   - Return the newly created object
function addToCollection(title, artist, yearPublished){
    let newAlbum = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
    }
    collection.push(newAlbum);
    return newAlbum && console.log(`newAlbum added:`, newAlbum);
}

// [x] Test the `addToCollection` function:
//   - Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
//   - Console.log each album as added using the returned value.
//   - After all are added, console.log the `collection` array.
addToCollection(`333`, `Tinashe`, 2021);
addToCollection(`Happier Than Ever`, `Billie Eilish`, 2021);
addToCollection(`The Dreaming`, `Kate Bush`, 1982);
addToCollection(`Hounds of Love`, `Kate Bush`, 1985);
addToCollection(`The ArchAndroid`, `Janelle Monáe`, 2010);
addToCollection(`Vespertine`, `Björk`, 2001);
console.log(`collection:`, collection);

// [x] Add a function named `showCollection`. This function should:
//   - Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
//   - Console.log the number of items in the array.
//   - Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.'
let i = 0;
function showCollection(array){
    console.log(`number of items in collection:`, array.length);
    for (i = 0; i < array.length; i++){
        console.log(array[i].title + ` by ` + array[i].artist + `, published in ` + array[i].yearPublished);
    }
}

// [x] Test the `showCollection` function.
showCollection(collection);

// [x] Add a function named `findByArtist`. This function should:
//   - Take in `artist` (a string) parameter
//   - Create an array to hold any results, empty to start
//   - Loop through the `collection` and add any objects with a matching artist to the array.
//   - Return the array with the matching results. If no results are found, return an empty array.
console.log(`-----------------------------`);
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



// [x] Test the `findByArtist` function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.
findByArtist(`Tinashe`); // single result
findByArtist(`Kate Bush`); // multiple result
findByArtist(`Katy Perry`); // no result
console.log(`-----------------------------`);
// [x] Create a function called `search`. This function should:
//   - Take an input parameter for a search criteria object. Create your solution based on a search object that has these properties:
//   ```
//   { artist: 'Ray Charles', year: 1957 }
//   ```
//   - The returned output from `search` should meet these requirements:
//     - Return a new array of all items in the `collection` matching *all* of the search criteria.
//     - If no results are found, return an empty array.
//     - If there is no search object or an empty search object provided as input, then return all albums in the `collection`.

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