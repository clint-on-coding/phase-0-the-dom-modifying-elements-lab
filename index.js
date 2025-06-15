// Step 0: Remove the <main id="main"> element
const main = document.getElementById('main');
main.remove();

// Step 1: Create a new <h1> element
const newHeader = document.createElement('h1');

// Step 2: Assign it an id of 'victory'
newHeader.id = 'victory';

// Step 3: Set the text content
newHeader.textContent = 'Clinton Mwangi is the champion';

// Step 4: Append it to the document body
document.body.append(newHeader);

