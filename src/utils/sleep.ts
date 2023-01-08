export default function sleep(ms: number): Promise<void> {
    return new Promise<void>((res) => {
        const interval = setInterval(() => {
            res()
            clearInterval(interval)
        }, ms);
    })
}