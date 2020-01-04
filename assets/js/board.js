class Card { //create an Card method
	constructor(text){ //define text as a parameter of the constructor method
		this.text = text; //assign it to this.text
	}
}

class List { //define a new class List object 
	constructor(title){
		this.title = title;
		this.cards = []; //data structure = multiple values = array
	}

	addCard(text){ //create an addCard method //addCard method will exist on the List prototype. (원형과 서로 공유가능)
		var card = new Card(text); //initialize the new Card 
		this.cards.push(card);
	}
}

class Board{
	constructor(){
		this.lists = [];
	}

	addList(text){
		var list = new List(text);
		this.lists.push(list);
	}
}


//define the addCard method in this way, all instances of List will have access to it.
//class List안에 있는 addCard method 는 서로 공유한다. 

//addCard method 에 text parameter 은 new Card object 를 만드는데 사용되어진다
//a new Card obejct 는 this.cards array에 넣어지기 전에 사용되어진다. 

// console.log(card.constructor);
// console.log(card.constructor.name);

var list = new List('My first list');
list.addCard('My first card');

console.log(list);
console.log(List.prototype);


var board = new Board();
board.addList('new list');
board.lists[0].addCard('New card');

console.log(board);





