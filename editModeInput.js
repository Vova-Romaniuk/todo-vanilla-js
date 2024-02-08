const canselEditMode = (id) => {
	const editButtonTask = document.getElementById(`save-button-${id}`);

	taskEditStates[id] = false;

	const inputEdit = document.getElementById(`edit-input-${id}`);

	inputEdit.outerHTML = editInput(id, inputEdit.value);
	editButtonTask.outerHTML = activateInputButton(id, taskMarkStates[id]);
};

const activateEditMode = (id) => {
	const activateEditButtonTask = document.getElementById(
		`activate-edit-mode-button-${id}`
	);

	taskEditStates[id] = true;

	const inputEdit = document.getElementById(`edit-input-${id}`);

	inputEdit.outerHTML = editInput(id, inputEdit.value);

	activateEditButtonTask.outerHTML = saveButton(id);
};
