// dropdown
function createDropdown(
	dropdownBtnId,
	dropdownMenuId,
	datePickerInputsSelector,
	datePickerContainerSelector
) {
	const dropdownBtn = document.getElementById(dropdownBtnId);
	const dropdownMenu = document.getElementById(dropdownMenuId);
	const datePickerInputs = document.querySelectorAll(datePickerInputsSelector);
	const datePickerContainer = document.querySelector(
		datePickerContainerSelector
	);

	const toggleDropdown = function () {
		dropdownMenu.classList.toggle('show');
	};

	dropdownBtn.addEventListener('click', function (e) {
		e.stopPropagation();
		toggleDropdown();
	});

	document.documentElement.addEventListener('click', function () {
		if (dropdownMenu.classList.contains('show')) {
			toggleDropdown();
		}
	});

	datePickerInputs.forEach(function (input) {
		input.addEventListener('click', function (e) {
			e.stopPropagation();
		});
	});

	datePickerContainer.addEventListener('click', function (e) {
		e.stopPropagation();
	});
}

// Example usage
createDropdown('btn', 'dropdown', '.custom-box input', '.custom-box');
createDropdown('btn2', 'dropdown2', '.custom-box input', '.custom-box');
