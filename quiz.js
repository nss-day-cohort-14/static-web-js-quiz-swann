// Grab all necessary DOM elements for manupulation 
// and initialize an Obj{} to hold our input data

var heightInput = document.getElementById('treeHeight'),
		charInput = document.getElementById('treeChar'),
		growButton = document.getElementById('growButton'),
		userInputObj = {};

// determine if the 'enter' key was pressed (key 13) 
// if 'enter' was pressed run our validateFields() function

function enterListener(e) {
	if (13 == e.keyCode) {
		validateFields();
	}
}

// validate our input fields. If neither fields has any 
// data, alert user to fill in both fields, else if the
// height input value is not a number, alert user to change
// input else we add the input value to our user input object
// and then we pass the userInpurObj to our buildTree function


function validateFields () {
	if (heightInput.value === '' || charInput.value === '') {
		alert('Please enter both a height (number) and character to build your tree!');
	} else if ( isNaN(heightInput.value) ) {
		alert('Height field must be a whole number');	
	} else {
		userInputObj.height = heightInput.value;
		userInputObj.char = charInput.value;
		buildTree(userInputObj);
	}
}


// we build the tree using user-provided height
// and character using a series of nested for-loops.

function buildTree(userInput) {
 var  rowCount = userInput.height,
		  charChoice = userInput.char,
      newString = '',
			spacer = ' ';


			rowCount++;
			for (i = 0; i < rowCount; i++) {

				for(j = i; j <= rowCount; j++) {
						newString += spacer;
				}

				for(x = 0; x < i * 2 - 1; x++) {
					
				 newString += charChoice;
			  }
				
				newString += "\n";
		}
console.log(newString);
}

// finally we add our event listeners for 'keydown' and 'click' and pass in 
// the appropriate function. enterListener for the 'enter' key and validateFields
// for the 'click' button

heightInput.addEventListener('keydown', enterListener);
charInput.addEventListener('keydown', enterListener);
growButton.addEventListener('click', validateFields);