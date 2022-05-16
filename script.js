// NPM - Node Packgae Mangaer 

const prompt = require('prompt');
const model = require('./model'); 

const bookArray = [];

console.log('welcome in book manager!'); 

startMenu();

function startMenu() { 
    console.log('sono dispinibili 3 opzioni'); 
    console.log('1) aggiungi libro');
    console.log('2) lista libri'); 
    console.log('3) esci');

    prompt.start();
    //
    // Get two properties from the user: username and email
    //

    const schema = { 
        properties: { 
            selection: { 
                description: 'select an option: ',
            }
        }
    }
    //
    // Start the prompt
    //
    
    prompt.get(schema, startMenuManager); 
}

function startMenuManager(err, result) {
    if (result.selection === '1') {
        insertBook();
    } else if(result.selection === '2') {
        
    } else if(result.selection === '3') {
        console.log('grazie, a presto'); 
        process.exit();
    } else { 
        console.log('selezione non disp'); 
        startMenu();
    }
} 

function insertBook() {
    const schema = { 
        properties: { 
            title: { 
                description: 'titolo: ',
            }, 
            author: { 
                description: 'autore: ',
            }, 
            publisher: { 
                description: 'casa editrice: ',
            }, 
        }
    }
    //
    // Start the prompt
    //
    
    prompt.get(schema, startMenuManager, insertBookManager); 
} 

function insertBookManager(err, result) {
    
    const book = new model.Book(result.title, result.author, result.publisher); 
    bookArray.push(book); 
    console.log(bookArray); 
    startMenu();
}
//
// Log the results.
//
// const result = await prompt.get(schema); 
// console.log(result);

//  esercizio 1: opzione lista libri; 
//  esercizio 2: opzione per metterla in ordine
//  esercizio 3: aggiungere opzione libro o magazine; 