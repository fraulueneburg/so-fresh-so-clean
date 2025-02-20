// https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
document.addEventListener('DOMContentLoaded', () => {
	console.log('Project_2 JS imported successfully!')
})

// edit mode
const btnToggleEditMode = document.querySelectorAll('.toggle-edit-mode')
btnToggleEditMode.forEach((btn) => {
	btn.onclick = () => {
		document.body.classList.toggle('edit-mode-on')
	}
})
