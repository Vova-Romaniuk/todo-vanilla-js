const renderTasks = () => {
	const tasksContainer = document.getElementById("tasks");
	tasksContainer.innerHTML = "";
	tasks.map((task) => {
		tasksContainer.innerHTML += `
		<div class='task' id='${task.id}'>
			${
				taskMarkStates[task.id]
					? UnmarkAsDoneButton(task.id)
					: MarkAsDoneButton(task.id)
			}
			${editInput(task.id, task.name, taskMarkStates[task.id])}
			${
				!taskEditStates[task.id]
					? activateInputButton(task.id, taskMarkStates[task.id])
					: saveButton(task.id)
			}
			${deleteButton(task.id)}
		</div>`;
	});
	isTasksRender = true;
};
