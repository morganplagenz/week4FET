
class Message {
    constructor (name, text){
        this.name=name;
        this.text=text;
    }
}

let threads = [];
let topics = [];

onClick('send-new-topic', () => {
    topics.push(getValue('new-topic', 'new-name'));
    drawDOM();
});

function onClick(id,action){
    let element = document.getElementById(id);
    element.addEventListener('click', action);
    return element;
}

function getValue(id){
    return document.getElementById(id).value;
}



let table = createTable(threads);

function drawDOM(){ // this draws the bootstrap table after first button is clicked
    let threadDiv = document.getElementById('thread');
    for (topic of topics){
        
        let title = document.createElement('h2');
        title.innerHTML = getValue('new-topic');
        threadDiv.appendChild(title);
        threadDiv.appendChild(table);
        
    }
}

//this is the green post button

function postMessageButton(indName, indText){
    let btn = document.createElement('button');
    btn.className = 'btn btn-success';
    btn.innerHTML = 'Post';
    btn.onclick = () => {
        threads.push(new Message(getValue(indName),getValue(indText)));
        console.log(threads); //my sanity check that my array push works
        createMessageRow();
    
    }
    return btn;
};

//using this to create new rows every time "post" is clicked

function createMessageRow(){ 
    let row=table.insertRow(-1);
    let nameColumn = document.createElement('th');
    let textColumn = document.createElement('th');
    nameColumn.innerHTML = 'Name';
    textColumn.innerHTML = 'Message';
    row.appendChild(nameColumn);
    row.appendChild(textColumn);
    let formRow = table.insertRow(-1);
    let nameTh = document.createElement('th');
    let textTh = document.createElement('th');
    let createTh = document.createElement('th');
    let nameInput = document.createElement('input');
    nameInput.setAttribute('id', 'indName');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('class', 'form-control');
    let textInput = document.createElement('input');
    textInput.setAttribute('id', 'indText');
    textInput.setAttribute('type', 'text');
    textInput.setAttribute('class', 'form-control');
    let newMessageButton = postMessageButton('indName','indText');
    nameTh.appendChild(nameInput); 
    textTh.appendChild(textInput);
    createTh.appendChild(newMessageButton);
    formRow.appendChild(nameTh); //allow you to type in content
    formRow.appendChild(textTh); //allow you to type in content
    formRow.appendChild(createTh); //allow you to type in content
    
}

function createTable(){
    let table = document.createElement('table');
    table.setAttribute('class', 'table table-dark table-striped');
    let row=table.insertRow(0);
    let nameColumn = document.createElement('th');
    let textColumn = document.createElement('th');
    nameColumn.innerHTML = 'Name';
    textColumn.innerHTML = 'Message';
    row.appendChild(nameColumn);
    row.appendChild(textColumn);
    let formRow = table.insertRow(1);
    let nameTh = document.createElement('th');
    let textTh = document.createElement('th');
    let createTh = document.createElement('th');
    let nameInput = document.createElement('input');
    nameInput.setAttribute('id', 'indName');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('class', 'form-control');
    let textInput = document.createElement('input');
    textInput.setAttribute('id', 'indText');
    textInput.setAttribute('type', 'text');
    textInput.setAttribute('class', 'form-control');
    let newMessageButton = postMessageButton('indName','indText');
    nameTh.appendChild(nameInput); 
    textTh.appendChild(textInput);
    createTh.appendChild(newMessageButton);
    formRow.appendChild(nameTh); //allow you to type in content
    formRow.appendChild(textTh); //allow you to type in content
    formRow.appendChild(createTh); //allow you to type in content
    return table;
}


