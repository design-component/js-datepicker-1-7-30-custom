// date pick
const getExpectedDate = (x) => {
	const date = new Date();
	date.setDate(date.getDate() - x);
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const day = String(date.getDate()).padStart(2, '0');
	const remainDate = `${year}-${month}-${day}`;
	return remainDate;
};

const getCurrentMonth = () => {
	const currentDate = new Date();
	const year = currentDate.getFullYear();
	const month = String(currentDate.getMonth() + 1).padStart(2, '0');
	const startDate = `${year}-${month}-01`;
	const endDate = `${year}-${month}-${String(currentDate.getDate()).padStart(
		2,
		'0'
	)}`;
	return startDate + ' - ' + endDate;
};

const getLastMonth = () => {
	const currentDate = new Date();
	currentDate.setMonth(currentDate.getMonth() - 1);
	const year = currentDate.getFullYear();
	const month = String(currentDate.getMonth() + 1).padStart(2, '0');
	const firstDay = '01';
	const lastDay = new Date(year, month, 0).getDate();
	const startDate = `${year}-${month}-${firstDay}`;
	const endDate = `${year}-${month}-${String(lastDay).padStart(2, '0')}`;
	return startDate + ' - ' + endDate;
};

const getToday = () => {
	const date = new Date();
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const day = String(date.getDate()).padStart(2, '0');
	const today = `${year}-${month}-${day}`;
	return today;
};

let input1;
let input2;
const getBindDate = (id, e) => {
	let showDate = document.getElementById('show-selected-date-' + id);
	const datePickerInput = document.getElementById('datePickerInput1-' + id);
	const datePickerInput2 = document.getElementById('datePickerInput2-' + id);

	datePickerInput.addEventListener('change', function () {
		const selectedDate = datePickerInput.value;
		input1 = selectedDate;
	});
	datePickerInput2.addEventListener('change', function () {
		const selectedDate = datePickerInput2.value;
		input2 = selectedDate;
	});

	function getSelectedDate() {
		switch (e) {
			case 'today':
				showDate.innerHTML = getToday() + ' - ' + getToday();
				break;
			case 'yesterday':
				showDate.innerHTML = getExpectedDate(1) + ' - ' + getToday();

				break;
			case 'last7Days':
				showDate.innerHTML = getExpectedDate(7) + ' - ' + getToday();

				break;
			case 'last14Days':
				showDate.innerHTML = getExpectedDate(14) + ' - ' + getToday();

				break;
			case 'last30Days':
				showDate.innerHTML = getExpectedDate(30) + ' - ' + getToday();

				break;
			case 'thisMonth':
				showDate.innerHTML = getCurrentMonth();
				break;
			case 'lastMonth':
				showDate.innerHTML = getLastMonth();
				break;
			case 'apply':
				if (input1 && input2 !== undefined) {
					showDate.innerHTML = input1 + ' - ' + input2;
				} else {
					showDate.innerHTML = getToday() + ' - ' + getToday();
				}

				break;
			case 'cancel':
				showDate.innerHTML = getToday() + ' - ' + getToday();
				break;

			default:
				showDate.innerHTML = getToday() + ' - ' + getToday();
				break;
		}
	}
	getSelectedDate();
};

getBindDate('E1');
getBindDate('E2');
