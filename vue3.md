Changes

1. Can add multiple root elements

```
<template>
	<label for="name">Name</label>
	<input type="text" v-model="name" name="name">
</template>
```
This is now possible

2. Data is wrapped in proxy now, so data can be updated directly now

```
<script>

	export default {
		data() {
			return {
				people: ['soikat', 'zakaria', 'murad'],
				person: {
					name: 'soikat',
					age: '32'
				}
			}
		}
	}
</script>
```

Previously it was not possible to update `people` like this

```
	this.people.lengh = 1;
	this.people[0] = 'atiq';
```
With Vue3 this is possible

For objects, previously it wasn't possible to update `person` like this

```
	this.person.name = "atiq"
	this.persona.age = 33
```

With Vue3 now this is possible.

3. Global properties are now added on the instance instead of `Vue` itself.

Instead of this

```
	Vue.mixin({
		created(){
			console.log('creaded')
		}
	})
```
Now we do this

```
	const app = createApp(App).mount('#app');
	app.mixin({
		created(){
			console.log('created')
		}
	})
```

4. Global event bus is removed from Vue, now if need global event bus we have to use third party libraries.

5. Filters are deprecated in Vue.js version 3.