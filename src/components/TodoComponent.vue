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
const emit = defineEmits<{
  deleteTodo: [id: number]
  updateTodo: [id: number]
  updateTodoTitle: [id: number, value: string]
}>()
const emitDeleteTodo = () => {
  if (!props.id) return
  emit('deleteTodo', props.id)
}
const updateTodo = () => {
  if (!props.id) return
  emit('updateTodo', props.id)
}
const updateTodoTitle = (e: Event) => {
  if (!props.id) return
  emit('updateTodoTitle', props.id, (e.target as HTMLInputElement).value ?? '')
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
