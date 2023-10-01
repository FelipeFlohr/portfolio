<script lang="ts">
    import { onMount } from "svelte";
    import { renderTypingText } from "../../../utils/render-typing-text";
    import { eraseTypingText } from "../../../utils/erase-typing-text";
    import { sleep } from "../../../utils/sleep";

    export let onFinish: () => void;

    let system = "";
    let dot1 = "";
    let out = "";
    let dot2 = "";
    let println = "";
    let parenthesis1 = "";
    let olaMundo = "";
    let parenthesis2 = "";
    let semicolon = "";

    onMount(async () => {
        await renderTypingText("System", () => system, (val) => system = val);
        await renderTypingText(".", () => dot1, (val) => dot1 = val);
        await renderTypingText("out", () => out, (val) => out = val);
        await renderTypingText(".", () => dot2, (val) => dot2 = val);
        await renderTypingText("println", () => println, (val) => println = val);
        await renderTypingText("(", () => parenthesis1, (val) => parenthesis1 = val);
        await renderTypingText("\"felipeflohr.dev\"", () => olaMundo, (val) => olaMundo = val);
        await renderTypingText(")", () => parenthesis2, (val) => parenthesis2 = val);
        await renderTypingText(";", () => semicolon, (val) => semicolon = val);
        await sleep(1500);
        await eraseTypingText(() => semicolon, (val) => semicolon = val);
        await eraseTypingText(() => parenthesis2, (val) => parenthesis2 = val);
        await eraseTypingText(() => olaMundo, (val) => olaMundo = val);
        await eraseTypingText(() => parenthesis1, (val) => parenthesis1 = val);
        await eraseTypingText(() => println, (val) => println = val);
        await eraseTypingText(() => dot2, (val) => dot2 = val);
        await eraseTypingText(() => out, (val) => out = val);
        await eraseTypingText(() => dot1, (val) => dot1 = val);
        await eraseTypingText(() => system, (val) => system = val);
        onFinish();
    })
</script>

<span class="class">{system}</span>
<span>{dot1}</span>
<span class="constant">{out}</span>
<span>{dot2}</span>
<span class="method">{println}</span>
<span class="parenthesis">{parenthesis1}</span>
<span class="string">{olaMundo}</span>
<span class="parenthesis">{parenthesis2}</span>
<span>{semicolon}</span>
