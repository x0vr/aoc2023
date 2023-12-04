export function getDataLines(allLinesString: string) {
	const lines = allLinesString
		.split('\n')
		.map((e) => e.trim())
		.filter((e) => e);

	return lines;
}
