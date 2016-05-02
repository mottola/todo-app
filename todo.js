// toggle specific todos by clicking 
//The ul and li allow more li's which are added dynamically
// later, to be able to handle the event. If just li was used
// after the bling, our future appended li's would ignore this
// event listener. Bypass that by accessing the child through the parent

$('ul').on('click', 'li',  function() {
    $(this).toggleClass('completed');
});

// click on x to delete Todo
// child through parent, just like above
$('ul').on('click', 'span', function(event){
	// fadeOut the parent element of span
	$(this).parent().fadeOut(500, function(){
		$(this).remove(); // this "this" refers to parent, not span!
	});
	event.stopPropagation(); // stops event from bubbling!
});

$('input[type="text"]').keypress(function(event){
	if(event.which === 13) { //checks condition of "enter" keypress
		var toDoText = $(this).val(); // store todo text from input
		$(this).val(''); // "setter" to clear input box after storing data
		// appends toDoText to ul as another li!!
		$('ul').append('<li><span><i class="fa fa-trash"></i></span> ' + toDoText + '</li>');
	}
});

$('.fa-plus').click(function(){
	$('input[type="text"').fadeToggle()
});