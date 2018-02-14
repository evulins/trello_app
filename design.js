
// // import 'array.prototype.move';   	// ES6 syntax
// require('array.prototype.move');	// CommonJS syntax

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

var cats= [
	{name: "apple"},
	{name: "lemon"},
	{name: "banana"},
	{name: "kiwi"},
];

function addElement(name) {
	objects.push({name: name});
	return objects;
}

function removeElement(index) {
	objects.splice(index, 1);
	return objects;
}


function moveElement(fromIndex, toIndex) {
	var element = objects[fromIndex];
	objects.splice(fromIndex, 1);
    objects.splice(toIndex, 0, element);
    return objects;
}

function joinLists(list1, list2, list3, list4) {
	var newList = list1.concat(list2, list3, list4);
	return newList;
}

function sortList(list) {
	list.sort(function(a, b) {
	    if(a.name < b.name) return -1;
	    if(a.name > b.name) return 1;
	    return 0;
    });
    return list;
}


//test test