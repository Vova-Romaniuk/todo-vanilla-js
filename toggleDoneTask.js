const MarkAsDone = (id) => {
	const markButtonTask = document.getElementById(`mark-as-done-button-${id}`);

	taskMarkStates[id] = true;
	markButtonTask.outerHTML = UnmarkAsDoneButton(id);
	if (isTasksRender) {
		changeInputTextDecorationStyle(id, true);

		disableButtonActivateEditmodeAfterMarkAsDoneTask(id, true);
	}
};

const UnmarkAsDone = (id) => {
	const unMarkButtonTask = document.getElementById(
		`unmark-as-done-button-${id}`
	);
	unMarkButtonTask.outerHTML = MarkAsDoneButton(id);
	taskMarkStates[id] = false;
	if (isTasksRender) {
		disableButtonActivateEditmodeAfterMarkAsDoneTask(id, false);

		changeInputTextDecorationStyle(id, false);
	}
};

const disableButtonActivateEditmodeAfterMarkAsDoneTask = (id, disabled) => {
	if (isTasksRender) {
		const activateEditButtonTask = document.getElementById(
			`activate-edit-mode-button-${id}`
		);
		activateEditButtonTask.disabled = disabled;
	}
};

const changeInputTextDecorationStyle = (id, isMarkDone) => {
	const inputEdit = document.getElementById(`edit-input-${id}`);
	isMarkDone
		? inputEdit.classList.add("line-through")
		: inputEdit.classList.remove("line-through");
};
