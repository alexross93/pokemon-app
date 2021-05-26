<template>
	<div>
		<h1>This is the Pokemon page</h1>
		<h3>{{$route.params.slug}}</h3>
	</div>
</template>

<script>
import { reactive, toRefs, computed } from 'vue'

export default {
  name: 'Pokemon',
  components: {}
}

</script>