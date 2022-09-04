// 투두리스트의 기본적인 기능 구현


function addItem() {
    let list = document.getElementById('todolist'); 
    let todo = document.getElementById('item');
    let listitem = document.createElement('li'); // list 생성
    let xbtn = document.createElement('button'); // x버튼 생성

    listitem.className = 'list-group-item list-group-item-action list-group-item-warning';
    xbtn.className = 'close';
    xbtn.innerHTML = '&times;';

    // x버튼 누르면 해당 항목 삭제
    xbtn.onclick = function(e) {
        let pnode = e.target.parentNode;
        list.removeChild(pnode);
    }

    listitem.innerText = todo.value;
    listitem.appendChild(xbtn);
    list.appendChild(listitem);

    todo.value = '';
    todo.focus();
}
