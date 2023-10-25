<script setup lang="ts">
import { User } from './Users.vue';

type Props = {
  users: User[];
};

defineProps<Props>();

const emit = defineEmits(['delete']);
const onClickDelete = (id: number, name: string) => {
  if (confirm('Delete ' + name + ' ?')) emit('delete', id);
};
</script>

<template>
  <ul v-if="users && users.length > 0">
    <li v-for="user in users" :key="user.id" class="user-list">
      <span>{{ user.name }}</span>
      <span>age: {{ user.age }}</span>
      <button @click="onClickDelete(user.id, user.name)" class="delete-button">
        delete
      </button>
    </li>
  </ul>
  <p v-else>User list is missing</p>
</template>

<style scoped>
.user-list {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  border-radius: 4px;
  font-size: 15px;
  background-color: rgb(228, 201, 133);
  padding: 5px 10px;
  font-weight: bold;
  margin-right: auto;
  width: 20em;
  text-align: left;
}

.delete-button {
  cursor: pointer;
  border-radius: 7px;
  background-color: white;
}
.delete-button:hover {
  background-color: red;
}
</style>
