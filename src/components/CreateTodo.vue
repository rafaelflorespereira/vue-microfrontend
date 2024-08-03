<template lang="">
  <button @click="emitAddTodo" class="button">Add Todo</button>
</template>
<script>
export default {
  props: {
    addTodo: Function,
    highestTodoId: Number
  },
  methods: {
    emitAddTodo() {
      this.$emit('addTodo', {
        id: this.highestTodoId + 1,
        title: 'New Todo',
        isDone: false
      })
    }
  }
}
</script>
<style lang="scss">
.button {
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  border: 1px solid;
  background-color: var(--vt-c-black-mute);
  color: white;
}
</style>
