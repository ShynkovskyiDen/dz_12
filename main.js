//1
let userName = prompt('name');
let surname = prompt('surname');
let live = prompt('city');

let info = userName + ' ' + surname + ' ' + live;
console.log(info);

//2
let numb = +prompt('Enter a five-digit number');
while(numb < 10000 || numb > 99999) {
    numb = +prompt('Enter a five-digit number');
}
console.log(numb);
let result = numb.toString().split('');
console.log(result);
console.log(result.join(' '));