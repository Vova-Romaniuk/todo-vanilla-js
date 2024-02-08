const addTask = (event) => {
	isTasksRender = false;
	event.preventDefault();
	const input = document.getElementById("create-name-task");
	tasks.push({
		id: generateUniqueId(),
		name: input.value,
		isDone: false,
	});
	input.value = "";
	renderTasks();
};

const deleteTask = (id) => {
	tasks = tasks.filter((task) => task.id !== id);
	renderTasks();
};

const editTask = (id) => {
	const inputEdit = document.getElementById(`edit-input-${id}`);
	const taskIndex = tasks.findIndex((task) => task.id === id);

	if (taskIndex !== -1) {
		tasks[taskIndex].name = inputEdit.value;
	}

	canselEditMode(id);
};
