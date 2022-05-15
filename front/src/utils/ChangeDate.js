export default function ChangeDate() {
	const today = new Date();
	const Time = {
		year: today.getFullYear(),
		month: today.getMonth() + 1,
		date: today.getDate(),
	};
	if (Time.month < 10) {
		Time.month = 0 + String(Time.month);
	}
	if (Time.day < 10) {
		Time.day = 0 + String(Time.day);
	}
	const time = `${Time.year}-${Time.month}-${Time.date}`;
	return time;
}
