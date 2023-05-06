function whereAt(){
	document.getElementById("output").innerHTML = "https:/SaylaniProjects/class%20projects/projects%76-80/index.html"
	swal("	Own site!", "Current page!", "info");
}

function goToGoogle(){
	window.location.href = " https://www.google.com "
}
function replaceUrl(){
	swal({
  title: "Are you sure?",
  text: "Once Replace Link, you will not be able to access this page!",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((willDelete) => {
  if (willDelete) {
     setTimeout(function() {
      
      swal("Poof! Your imaginary file has been deleted!", {
      icon: "success",
      jon: window.location.replace(" https://getbootstrap.com/ ")
    });

     }, 2000);

  } else {
    swal("Your Link Are Not Replaced!");
    return false;
  }
});
}
 var popup;
function openPopup(){
	// swal("Good job!", "You clicked the button!", "success");

	popup = window.open(" ", " ", "width= 420,height=380,left= 200, top= 200")
}

function closePopup(){
	if(!popup)
	{
		swal("OOPS!", "First Open the popup!", "error");
	}
	else
	{
	  popup.close();	
	}
  
}

function fillContentInPopup(){
	
	document.write("<h1>Heading1</h1>")
}
function assignUrlToPopup()
{
  window.location.assign("https://pixabay.com/")

}

function alrt(){
	try{
		window.alert("Its Working");
	}
	catch(error){
       consol.log("Now something went wrong.")
	}
}
function Clear(){
	document.getElementById("output").innerHTML = " ";
}