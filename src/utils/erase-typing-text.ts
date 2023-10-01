export function eraseTypingText(valGetter: () => string, valSetter: (val: string) => void): Promise<void> {
	return new Promise<void>((res) => {
		const interval = setInterval(() => {
			const val = valGetter();
			if (val !== "") {
				valSetter(val.substring(0, val.length - 1));
			} else {
				clearInterval(interval);
				res();
			}
		}, 70);
	});
}