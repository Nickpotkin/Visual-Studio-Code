// Selecting
//const toc = document.getElementById('toc'); // selects id assigned to table of contents
//console.dir(toc); // see contents

// Getting elements
//const allImages = document.getElementsByTagName('img');
//allImages;

// for (let img of allImages) {
//     img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg";
// }

// Selecting by class name
// const squareImages = document.getElementsByClassName('square');

// for (let img of squareImages) {
//     img.src ="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg"
// }

// Better way of selecting elements
// const links = document.querySelectorAll('p a'); // selects all anchor tags inside a p tag

// for (let link of links) {
//     console.log(link.href);
// }

// Step 2: Manipulation
// const allLinks = document.querySelectorAll('a');

// for(let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }

// Changing styles
// const allLinks = document.querySelectorAll('a');

// for(let link of allLinks) {
//     link.style.color ='cyan';
//     link.style.textDecorationColor = 'magenta';
//     link.style.textDecorationStyle = 'wavy';
// }

// Classlist
// const h2 = document.querySelector('h2');

// h2.classList.add('purple');
// h2.classList.add('border');
// h2.classlist.remove('border);
// h2.classlist.contains('purple');
// h2.classList.toggle('border');

// Traversing
// use previousElementSibling and nextElement Sibling

// Appending
// const p = document.querySelector('p');
// p.append('I am new text yaaaayyy!');

// prepend
// const newB = document.createElement('b');
// newB.append('Hi!');
// p.prepend(newB);

// inserting adjacent element
// const h2 = document.createElement('h2');
// h2.append('Are adorable chickens');

// const h1 = document.querySelector('h1');
// h1.insertAdjacentElement('afterend', h2);

// Removing elements
// const img = document.querySelector('img');
// img.remove();