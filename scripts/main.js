$( document ).ready(function() {

		$( "#addNewItem" )
		.on(					"click",		addNewItem);



	// Add a New Item to the List
	function addNewItem() {
    // - Build element segments
		var newText			= "new item",
				removeBtn 	= "<button>-</button>",
				newItem 		= "<span>"+newText+"</span>",
		 		newInput		= "<input value='"+newText+"' />";


    // - Add new element to the DOM
		$( "<li>"+removeBtn+newItem+newInput+"</li>" )
			.prependTo( "#checklist" );


		// - Add event listeners to each component
    $( "#checklist li:first button")
			.on(				"click", 		removeItem);

		$( "#checklist li:first span" )
			.on(				"click", 		editItem);

		$( "#checklist li:first input" )
			.on(				"blur",			updateItemDisplay)
			.on(				"keypress", itemKeypress);

		$( "#checklist" )
			.sortable()
      .disableSelection();
	}


	// - Remove an Item from the list
	function removeItem() {
		console.log("removing item...");
		this.parentNode.remove();
	}


	// - Edit a list item
	function editItem() {
		this.parentNode.className = "editMode";
		var input = this.parentNode.querySelector("input");
		input.setSelectionRange(0,input.value.length);
		input.focus();
	}


	// - Update an Edited Item
	function updateItemDisplay() {
		this.previousElementSibling.innerHTML = this.value;
		this.parentNode.className = "";
	}


	// - Did we Return Out of the Input Field?
	function itemKeypress(event) {
		if (event.which === 13) {
			// - 13 is the return char. - AL 2016.07.05
			updateItemDisplay.call(this);
    }
	}
});
