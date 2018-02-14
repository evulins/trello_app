
//Global variables
var objects = [
	{name: "Stefka"},
	{name: "Lola"},
	{name: "Dawid"},
	{name: "Ewu"},
];

var nuts = [
	{name: "migdały"},
	{name: "nerkowce"},
	{name: "laskowe"},
	{name: "włoskie"},
];

var veggi = [
	{name: "carrot"},
	{name: "cucumber"},
	{name: "khale"},
	{name: "spinach"},
];

var fruits = [
	{name: "apple"},
	{name: "lemon"},
	{name: "banana"},
	{name: "kiwi"},
];


//Adds element to the end of the list
function addElement(name) {
	objects.push({name: name});
	return objects;
}

//Removes element from selected index placy on the list
function removeElement(index) {
	objects.splice(index, 1);
	return objects;
}

//Moves elements from one array positon to another
function moveElement(fromIndex, toIndex) {
	var element = objects[fromIndex];
	objects.splice(fromIndex, 1);
    objects.splice(toIndex, 0, element);
    return objects;
}

//Join lists and creates new one
function joinLists(list1, list2, list3, list4) {
	var newList = list1.concat(list2, list3, list4);
	return newList;
}

//Sorts list alphabetically
function sortList(list) {
	list.sort(function(a, b) {
	    if(a.name < b.name) return -1;
	    if(a.name > b.name) return 1;
	    return 0;
    });
    return list;
}


