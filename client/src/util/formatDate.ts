const formatDate = (timestamp: number | Date) => {
	const ts = new Date(timestamp);
	const weekDay = new Intl.DateTimeFormat(undefined, { weekday: 'short' }).format(ts);
	const date = new Intl.DateTimeFormat(undefined, {
		year: 'numeric',
		month: 'short',
		day: '2-digit'
	}).format(ts);
	const prefer12 = /am|pm/gi.test(`${new Date().toLocaleTimeString()}`);
	const time = new Intl.DateTimeFormat(undefined, { hour12: prefer12, hour: '2-digit', minute: '2-digit' }).format(
		ts
	);
	if (new Date().toDateString() === ts.toDateString()) return `At ${time} [UTC + 5:30]`;
	return `On ${weekDay}, ${date}`;
};

export default formatDate;
