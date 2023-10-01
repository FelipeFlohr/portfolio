export function renderTypingText(fullTxt: string, valGetter: () => string, valSetter: (val: string) => void): Promise<void> {
	return new Promise<void>((res) => {
		const interval = setInterval(() => {
			if (valGetter().length !== fullTxt.length) {
				valSetter(fullTxt.substring(0, valGetter().length + 1));
			} else {
				clearInterval(interval);
				res();
			}
		}, 70);
	});
}