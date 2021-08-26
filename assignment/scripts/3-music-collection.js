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
console.log(`collection:`, collection)