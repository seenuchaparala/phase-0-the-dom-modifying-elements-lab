const element = document.createElement('div');
document.body.appendChild(element);
const ul = document.createElement('ul');

for (let i = 0; i < 3; i++) {
  const li = document.createElement('li');
  li.innerHTML = (i + 1).toString();
  ul.appendChild(li);
}

element.appendChild(ul);
element.style.backgroundColor = '27647B';
element.style.marginLeft = '24px';
element.style.fontSize = '24px';
element.style.lineHeight = 2; 

let main = document.getElementById('main');
main.remove();

let newHeader = document.createElement('h1');
document.body.appendChild(newHeader);
newHeader.id = 'victory';
newHeader.innerHTML = 'Srinivas is the champion';
// Write your code here!