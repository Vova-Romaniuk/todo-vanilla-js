const editInput = (id, value, isMarkDone) =>
	`<input class='input edit-input  ${
		isMarkDone && "line-through"
	}' id='edit-input-${id}' value=${value} ${
		!taskEditStates[id] && "readonly"
	} required />`;

const activateInputButton = (id, disabled = false) =>
	`<button class='activate-button' ${
		disabled ? "disabled" : ""
	} id='activate-edit-mode-button-${id}' onclick="activateEditMode('${id}')">
	<i class='fa-regular fa-pen-to-square'></i>
</button>`;

const saveButton = (id) =>
	`<button class='activate-button' id='save-button-${id}' onclick="editTask('${id}')">
		<i class='fa-regular fa-check'></i>
	</button>`;

const deleteButton = (id) => `
<button class='delete-button' onclick="deleteTask('${id}')">
				<i class='fa-solid fa-trash'></i>
			</button>
`;

const MarkAsDoneButton = (id) =>
	`<button class='mark-as-done' id='mark-as-done-button-${id}' onclick="MarkAsDone('${id}')"></button>`;

const UnmarkAsDoneButton = (id) =>
	`<button class='unmark-as-done' id='unmark-as-done-button-${id}' onclick="UnmarkAsDone('${id}')"></button>`;
