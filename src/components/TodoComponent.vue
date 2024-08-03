<template lang="">
  <div :style="{ border: color }" class="outer-box">
    <div>
      <h2>Todo Title: {{ title }}</h2>
      <input v-bind:value="title" v-on:input="updateTodoTitle" />
    </div>
    <div>
      <input type="checkbox" @click="updateTodo" :value="isDone" />
      <label style="{color: isDone ? 'red' : 'black'}">{{ isDone ? 'Done' : 'Not done' }}</label>
    </div>
    <button @click="emitDeleteTodo">Delete</button>
  </div>
</template>
<script setup lang="ts">
import { defineEmits } from 'vue'
const props = defineProps({
  deleteTodo: Function,
  updateTodo: Function,
  updateTodoTitle: Function,
  id: Number,
  title: String,
  isDone: Boolean
})
const emit = defineEmits(['emitDeleteTodo, updateTodo, updateTodoTitle'])
const emitDeleteTodo = () => {
  emit('deleteTodo', props.id)
}
const updateTodo = () => {
  emit('updateTodo', props.id)
}
const updateTodoTitle = (e) => {
  emit('updateTodoTitle', props.id, e.target.value)
}
</script>
<style lang="scss">
.outer-box {
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  border: 1px solid;
}
</style>
