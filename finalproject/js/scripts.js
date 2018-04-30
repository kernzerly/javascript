function submitForm() {
    let listInput = document.getElementById('listInput');
    let list = document.getElementById('list');
    let listItem = document.createElement('li');
    listItem.id = 'listItem'
    listItem.innerHTML = $(listInput.value;
    list.appendChild(listItem);
    if (localStorage.getItem('listItems') === null) {
        localStorage.setItem('listItems', JSON.stringify([
            listInput.value
        ]));
    } else {
        let listItems = JSON.parse(localStorage.getItem('listItems'));
        listItems.push(listInput.value);
        console.log(listItems);
        localStorage.setItem('listItems', JSON.stringify(listItems));
    }
}
document.getElementByIf('delete')addEventListener('click' , () => {

}
