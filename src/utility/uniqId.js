export default function uniqId() {
	return (
		'_' +
		Math.random()
			.toString(36)
			.substr(2, 9)
	)
}
