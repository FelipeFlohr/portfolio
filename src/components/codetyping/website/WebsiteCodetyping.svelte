<script lang="ts">
    import { onMount } from "svelte";
    import { renderTypingText } from "../../../utils/render-typing-text";
    import { eraseTypingText } from "../../../utils/erase-typing-text";
    import { sleep } from "../../../utils/sleep";

    export let onFinish: () => void;

    let website = "";

    onMount(async () => {
        await renderTypingText("felipeflohr.dev", () => website, (val) => website = val);
        await sleep(3500);
        await eraseTypingText(() => website, (val) => website = val);
        onFinish();
    })
</script>

<span>{website}</span>
