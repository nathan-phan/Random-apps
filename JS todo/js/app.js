var taskInput = document.getElementById('new-task');
var addButton = document.getElementsByTagName('button')[0];
var incompleteTaskHolder = document.getElementById('incomplete-tasks');
var completedTaskHolder = document.getElementById('completed-tasks') ;

var createNewTaskElement = function(taskString){
	var listItem=document.createElement("li");
	var checkBox = document.createElement('input');
	var label = document.createElement('label');
	var editInput = document.createElement('input');
	var editButton = document.createElement('button');
	var deleteButton = document.createElement('button');
	listItem.appendChild(checkBox);
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);

	checkBox.type = 'checkbox';
	editInput.type = 'text';
	editButton.innerText = 'Edit';
	editButton.className = 'edit';
	deleteButton.innerText = 'Delete';
	deleteButton.className = 'delete';
	label.innerText = taskString;

	return listItem;
}


var addTask = function(){
	var listItem = createNewTaskElement(taskInput.value);
	incompleteTaskHolder.appendChild(listItem);
	bindTaskEvents(listItem,taskCompleted)
	taskInput.value='';
}

var editTask = function(){
	var listItem = this.parentNode;
	var editInput = listItem.querySelector('input[type=text]');
	var label = listItem.querySelector('label');
	var buttonLabel = listItem.querySelector('button.edit');
	var containsClass = listItem.classList.contains('editMode')
	if(containsClass){
		label.innerText=editInput.value;
		buttonLabel.innerText= 'Edit';
	}else{
		editInput.value=label.innerText;
		buttonLabel.innerText= 'Save';
	}
	listItem.classList.toggle("editMode");
}

var deleteTask = function(){
	var listItem=this.parentNode;
	var ul = listItem.parentNode;
	ul.removeChild(listItem);
}

var taskCompleted = function(){
	var listItem = this.parentNode;
	completedTaskHolder.appendChild(listItem);
	bindTaskEvents(listItem,taskIncomplete);
}

var taskIncomplete = function(){
	var listItem = this.parentNode;
	incompleteTaskHolder.appendChild(listItem);
	bindTaskEvents(listItem,taskCompleted);
} 


addButton.onclick = addTask;

var bindTaskEvents = function(taskListItem, checkBoxEventHandler ){
	var checkBox = taskListItem.querySelector("input[type=checkbox]");
	var editButton = taskListItem.querySelector("button.edit");
	var deleteButton = taskListItem.querySelector("button.delete");

	editButton.onclick=editTask;
	deleteButton.onclick=deleteTask;
	checkBox.onchange = checkBoxEventHandler;
}

for(var i=0;i<incompleteTaskHolder.children.length;i++){
	bindTaskEvents(incompleteTaskHolder.children[i],taskCompleted);
}

for(var i=0;i<completedTaskHolder.children.length;i++){
	bindTaskEvents(completedTaskHolder.children[i],taskIncomplete);
}



