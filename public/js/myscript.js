

    
    //search function
// $(document).ready(function(){
//     $("#myInput").keyup(function(){
//         var val = $(this).val().toLowerCase();
//         $("#myUL li").filter(function(){
//             $(this).toggle($(this).text().toLowerCase().indexOf(val) > -1);
//         })
//     })
// })
       

//create a delete icon and append to list items

var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  
  var  fav = document.createElement("i");
  fav.className = "fa fa-trash";
 
  span.className = "close";
  span.appendChild(fav);
  myNodelist[i].appendChild(span);
}

//delete list item onclick the delete icon;
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
      
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Input cannot be empty!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var  fav = document.createElement("i");
  fav.className = "fa fa-trash";
  //var txt = document.createele("fa fa-trash");
  span.className = "close";
  span.appendChild(fav);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}