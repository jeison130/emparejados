<script context="module">
	export async function preload({ params }) {
		const { id } = params
		return { id }
	}
</script>

<script>
	export let id;
</script>

<h1>{id}</h1>