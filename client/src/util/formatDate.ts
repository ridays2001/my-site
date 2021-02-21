const formatDate = (timestamp: number | Date, long?: boolean) => {
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
	if (long) return `On ${weekDay}, ${date} at ${time}`;
	if (new Date().toDateString() === ts.toDateString()) return `Today, at ${time}`;
	return `On ${weekDay}, ${date}`;
};

export default formatDate;
