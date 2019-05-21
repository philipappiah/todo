// Create a "close" button and append it to each list item

    
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

//filter for completed and uncompleted tasks with checkboxes
$(document).ready(function(){
    $(".addBtn").click(function(){
        newElement();
    })
$("#comcheck").click(function(){
    if ($(this).prop("checked")){
        document.getElementById("ucheck").disabled = true;
        
        $("#myUL li").filter(function(){
            $(this).show().filter(':not(.checked)').hide();
        });

    }else {
        $("#myUL li").filter(function(){
            document.getElementById("ucheck").disabled = false;
            $(this).show().filter(':not(.checked)').show();
        });

    }
  });

  $("#ucheck").click(function(){
    if ($(this).prop("checked")){
        document.getElementById("comcheck").disabled = true;
       
        $("#myUL li").filter(function(){
            
            $(this).show().filter('.checked').hide();
        });

    }else{
        $("#myUL li").filter(function(){
            document.getElementById("comcheck").disabled = false;
       

            $(this).show().filter('.checked').show();
        });

    }
  });
  
});

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;

  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue.trim() === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
    setTimeout(function(){
        alert("Todo item added successfuly!");
    },300);
    
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var  fav = document.createElement("i");
  fav.className = "fa fa-trash";
  //var txt = document.createele("fa fa-trash");
  span.className = "close";
  span.appendChild(fav);
  li.appendChild(span);
  li.className = "unchecked";

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}



//add new element to list on press enter from the keyboard
var press = document.getElementById("myInput");
press.addEventListener("keydown",function(e){
    if(e.keyCode == "13"){
        newElement();
    }
})