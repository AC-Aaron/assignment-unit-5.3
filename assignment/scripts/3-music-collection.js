console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished){
    const newAlbum = {
        title: title,
        artist: artist,
        yearPublished: yearPublished

    
    }
    collection.push(newAlbum)
    return newAlbum
}

console.log(addToCollection('Nevermind', 'Nirvana', 1991));
console.log(addToCollection('ATLiens', 'Outkast', 1996));
