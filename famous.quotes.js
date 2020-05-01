     // get the data from the server
     fetch("https://type.fit/api/quotes")
     .then(function(response) {
         // Transform it into javascript from JSON
         return response.json(); 
     })
     .then(function(data) {
         // Get one random quote from the list off all of them
         let quote = data[Math.floor(Math.random()*data.length)];
         console.log(quote);
         return quote;
     })
     .then(function(quote) {
         // Assign the quote text + author to the HTML elements
         document.querySelector(".quote__text").textContent = quote.text;
         document.querySelector(".quote__author").textContent = quote.author;
     });


    // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];





// When the user clicks the button, open the modal 
btn.onclick = function() {
 modal.style.display = "block";
   
} 

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
 modal.style.display = "none";  
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
 if (event.target == modal) {
   modal.style.display = "none";
 }
}