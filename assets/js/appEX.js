var $boardContainer = document.querySelector('.container');
//create $boardContainer //use querySelector method, and it gets a reference to the element with a class of container 

var board = new Board(); //create variable name as board. and then define new Board object.

board.addList('To Do');  //it adds 3 lists to the board.
board.addList('In Progress');
board.addList('Done');


board.lists.forEach(function(list, index){ //it loops through each list in the board 
	// list.addCard('Card #' + (index + 1)); //and adds one card to each list 
	var $listContainer = document.createElement('div'); //
	$listContainer.className = 'list';

	var $header = document.createElement('header');
	var $headerButton = document.createElement('button');
	$headerButton.textContent = list.title;

	$header.appendChild('headerButton');
	$listContainer.appendChild($header);
	$boardContainer.appendChild($listContainer);
});

$boardContainer.textContent = JSON.stringify(board); //stringify method
//it updates the textContent of the $boardContainer to contain the board data.
//it can be properly rendered to the DOM as text. 읽을수 있게 만들어주는 코드









