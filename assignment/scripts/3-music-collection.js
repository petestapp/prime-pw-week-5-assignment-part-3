console.log('***** Music Collection *****')
// - Create a variable `collection` that starts as an empty array.
let collection = [];
// [ ] Add a function named `addToCollection`. This function should:
//   - Take in the album's `title`, `artist`, `yearPublished` as input parameters
//   - Create a new object having the above properties
//   - Add the new object to the end of the `collection` array
//   - Return the newly created object
function addToCollection(title, artist, yearPublished){
    let newAlbum = {};
    newAlbum.title = title;
    newAlbum.artist = artist;
    newAlbum.yearPublished = yearPublished;
    collection.push(newAlbum);
}
addToCollection(`Last Year Was Weird, Vol. 2`, `Tkay Maidza`, `2020`);
console.log(`collection:`, collection)