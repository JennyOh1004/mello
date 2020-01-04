var $boardContainer = document.querySelector('.container');
//create $boardContainer //use querySelector method, and it gets a reference to the element with a class of container 

var board = new Board(); //create variable name as board. and then define new Board object.

board.addList('To Do');  //it adds 3 lists to the board.
board.addList('In Progress');
board.addList('Done');

function renderBoard(){
board.lists.forEach(function(list, index){ //it loops through each list in the board 
	// list.addCard('Card #' + (index + 1)); //and adds one card to each list 
	var $listContainer = document.createElement('div'); //create 'div' and then store it $listContainer //only exists in memory
	$listContainer.className = 'list'; //add a class of list to the newly created $listContainer element. //$listContainer 의 className 를 'list'로 지정. 

	var $header = document.createElement('header'); //create 'header' and then store it $header //only exists in memory and isn't on the page yet.
	var $headerButton = document.createElement('button'); //create 'button' and then store it $headerButton
	$headerButton.textContent = list.title; //$headerButton 에 있는 text만 표시. //update $headerButton	의 textContent 를 list.title에 포함시켰다. 

	$header.appendChild('headerButton'); //'headerButton' push to $header
	$listContainer.appendChild($header); //'header' push to $listContainer
	$boardContainer.appendChild($listContainer); //'listContainer' push to boardContainer
}); //$boardContainer element is currently on the page, appending the $list to it actually puts it on the page. 

//headerButton < header < listContainer < boardContainer 


var $addListContainer = document.createElement('div'); //create one additional div element that we set to the variable $addListContainer
$addListContainer.className = 'list add'; //add the 'list add' class to the $addListContainer to give it its appearance.

var $addListButton = document.createElement('button'); //create a button and set it to the variable $addListButton
$addListButton.textContent = '+ Add another list'; //set the textContent of $addListButton to '+add another list'

$addListContainer.appendChild($addListButton); //append the $addListButton to $addListContainer 
$boardContainer.appendChild($addListContainer); //append the $addListContainer to $boardContainer
//addListButton < addListContainer < boardContainer 

}

renderBoard(); //called once when the page loads.



$boardContainer.textContent = JSON.stringify(board); //stringify method
//it updates the textContent of the $boardContainer to contain the board data.
//it can be properly rendered to the DOM as text. 텍스트를 읽을수 있게 만들어주는 코드.













