<script lang="ts">
    import { onMount } from "svelte";
    import { renderTypingText } from "../../../utils/render-typing-text";
    import { eraseTypingText } from "../../../utils/erase-typing-text";
    import { sleep } from "../../../utils/sleep";

    export let onFinish: () => void;

    let console = "";
    let log = "";
    let parenthesis1 = "";
    let helloWorld = "";
    let parenthesis2 = "";
    let semicolon = "";

    onMount(async () => {
        await renderTypingText("console.", () => console, (val) => console = val);
        await renderTypingText("log", () => log, (val) => log = val);
        await renderTypingText("(", () => parenthesis1, (val) => parenthesis1 = val);
        await renderTypingText("\"felipeflohr.dev\"", () => helloWorld, (val) => helloWorld = val);
        await renderTypingText(")", () => parenthesis2, (val) => parenthesis2 = val);
        await renderTypingText(";", () => semicolon, (val) => semicolon = val);
        await sleep(1500);
        await eraseTypingText(() => semicolon, (val) => semicolon = val);
        await eraseTypingText(() => parenthesis2, (val) => parenthesis2 = val);
        await eraseTypingText(() => helloWorld, (val) => helloWorld = val);
        await eraseTypingText(() => parenthesis1, (val) => parenthesis1 = val);
        await eraseTypingText(() => log, (val) => log = val);
        await eraseTypingText(() => console, (val) => console = val);
        onFinish();
    })
</script>

<span class="variable">{console}</span>
<span class="method">{log}</span>
<span class="parenthesis">{parenthesis1}</span>
<span class="string">{helloWorld}</span>
<span class="parenthesis">{parenthesis2}</span>
<span>{semicolon}</span>
