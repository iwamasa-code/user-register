<script setup lang="ts">
import { ref, Ref } from 'vue';
import UserPostForm from './UserPostForm.vue';
import UserList from './UserList.vue';

export type User = {
  id: number;
  name: string;
  age: number;
};

const users: Ref<User[]> = ref([]);

const limitUsers = ref(false);

// 入力されたユーザー情報をリストに追加する。
const registerPerson = (user: User) => {
  if (users.value.length >= 5) {
    alert(
      'The user list has reached 5 users.Please delete your list to add more'
    );
    limitUsers.value = true;

    return;
  }

  users.value.push(user);
};

// ユーザーの削除
const deleteUser = (id: number) => {
  users.value = users.value.filter((u) => u.id !== id);

  // ユーザーリストが5未満になったらregisterボタンを押せるようにする。
  if (users.value.length < 5) [(limitUsers.value = false)];
};
</script>

<template>
  <h1>user-register-app</h1>
  <div class="container">
    <UserPostForm @register="registerPerson" :limitUsers="limitUsers" />
    <div class="list-container">
      <UserList :users="users" @delete="deleteUser" />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.list-container {
  display: flex;
  justify-content: center;
  background-color: #00ffff;
  border-radius: 10px;
  padding: 24px 0;
  height: 14em;
  width: 50%;
}
</style>
