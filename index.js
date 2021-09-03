cats = ['Milo', 'Otis', 'Garfield'];
function cats (){
return cats;
}
function destructivelyAppendCat(name) {
    cats.push(name);
    return name;
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
    return name;
}
function destructivelyRemoveLastCat () {
    cats.pop();
     
}
function destructivelyRemoveFirstCat () {
cats.shift();
}
function appendCat(name) {
    const cats = ['Milo', 'Otis', 'Garfield'];
    const newCats = [...cats, name];
    return newCats;
}
function prependCat(name) {
    const cats = ['Milo', 'Otis', 'Garfield'];
    const newCats = [name, ...cats];
    return newCats;
}
function removeLastCat () {
    const cats = ['Milo', 'Otis', 'Garfield'];
    const newCats =  cats.slice(0, -1);
    return newCats;
}
function removeFirstCat() {
    const cats = ['Milo', 'Otis', 'Garfield'];
    const newCats =  cats.slice(1);
    return newCats;
}