console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished){ //params for object to create.
    const newAlbum = {
        title: title,
        artist: artist,
        yearPublished: yearPublished

    
    }   //end create newAlbum object. 
    collection.push(newAlbum)   //adding newAlbum to the collection array
    return newAlbum             //end
}

console.log(addToCollection('Nevermind', 'Nirvana', 1991));
console.log(addToCollection('ATLiens', 'Outkast', 1996));
console.log(addToCollection('Testing', 'ASAP Rocky', 2018));
console.log(addToCollection('Scorpion', 'Drake', 2018));
console.log(addToCollection('Thank Me Later', 'Drake', 2010));
console.log(addToCollection('Greatest Hits','Tupac Shakur', 1998));

console.log(collection);