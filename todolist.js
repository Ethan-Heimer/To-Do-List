"Use Strict"

const list = document.getElementById("list");
const addButton = document.getElementById("addElement");

addButton.onclick = () => {
    var item = CreateNewItem(prompt("Enter item Name"));
    list.appendChild(item); 
}

function CreateNewItem(name)
{
    var item = document.createElement("div");
        item.classList.add("item");

    var p = document.createElement('p');
        p.innerHTML = name; 
        item.appendChild(p);

     var _delete = document.createElement("button")
        _delete.classList.add("Button", "Delete");
        _delete.innerHTML = '<i class="fa-solid fa-trash"></i>';
        _delete.onclick = () => Delete(item);
        item.appendChild(_delete);

    var edit = document.createElement('Button');
        edit.classList.add("Button", "Edit");
        edit.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
        edit.onclick = () => Edit(p, prompt("Enter New Item Name: ", p.innerHTML));
        item.appendChild(edit); 

    var complete = document.createElement('Button');
        complete.classList.add("Button", "CompButton", "Complete");
        complete.innerHTML = '<i class="fa-solid fa-check"></i>';
        complete.onclick = () => Complete(item, complete);
        item.appendChild(complete); 

    return item; 
}

function Delete(Item)
{
    Item.style.scale = 0;
    setTimeout(() => list.removeChild(Item), 150);
}

function Edit(Paragraph, Text)
{
    Paragraph.innerHTML = Text; 
}

function Complete(Paragraph, complete)
{
    CrossTextOut(Paragraph, true)
    ChangeCompleteStyle(complete, true);

    complete.onclick = () => Incomplete(Paragraph, complete);
}

function Incomplete(Paragraph, complete)
{
    CrossTextOut(Paragraph, false);
    ChangeCompleteStyle(complete, false);

    complete.onclick = () => Complete(Paragraph, complete);
}

function CrossTextOut(P, change)
{
    P.style.textDecoration = change ? 'line-through' : ''; 
}

function ChangeCompleteStyle(_complete, change)
{
    if(change)
    {
        _complete.classList.remove("Complete");
        _complete.classList.add("Incomplete");

        _complete.innerHTML = '<i class="fa-solid fa-x"></i>';
    }
    else
    {
        _complete.classList.remove("Incomplete");
        _complete.classList.add("Complete");
    
        _complete.innerHTML = '<i class="fa-solid fa-check"></i>';
    }
}