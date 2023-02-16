console.log('***** Music Collection *****')

let collection = [];

console.log('***addToCollection***');

function addToCollection(title, artist, yearPublished){ //params for object to create.
    const newAlbum = {  //create new object
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
//end +6 albums

console.log(collection);    //log collection array

console.log('***showCollection***');

function showCollection(Array){
    
    console.log('The length of collection is:', Array.length);    //show array length
    for (info of Array){  
        console.log(info.title +" by "+ info.artist + 
                    " published in " + info.yearPublished );    //Loop through array properties
    }   //end array 'for of' loop

    
}
console.log('testing showCollection')
showCollection(collection);

function findByArtist (artist){     //funct. def. + parameters
    const array = [];               //create array to hold results
    for(singer of collection){      //for of loop to loop through collection
        if (singer === artist){     
            array.push(singer)
        } return array;
        
    }

}   //end findByArtist


