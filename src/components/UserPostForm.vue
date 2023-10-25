<script setup lang="ts">
import { ref, computed } from 'vue';

const userName = ref<string>('');
const userAge = ref<number>(0);

// onClickRegisterを親コンポーネントで使えるようにする。
const emit = defineEmits(['register']);

// ボタンを押したらユーザー情報を取得する。
const onClickRegister = () => {
  const user = {
    id: Math.round(Math.random() * 100),
    name: userName.value,
    age: userAge.value,
  };

  emit('register', user);
};

// name欄が文字列以外もしくは1文字以上15文字未満の場合エラーを出す。
const validUserName = computed(() => {
  if (
    typeof userName.value !== 'string' ||
    /\d/.test(userName.value) || // userNameに数字が含んでいる場合
    userName.value.length < 1 ||
    userName.value.length >= 15
  ) {
    return false;
  } else {
    return true;
  }
});

// age欄が数字以外もしくは0以下の場合エラーを出す。
const validUserAge = computed(() => {
  if (typeof userAge.value !== 'number' || userAge.value < 0) {
    return false;
  } else {
    return true;
  }
});

// ユーザーリストが5つ以上溜まったらボタンを押せなくする。
const props = defineProps({
  limitUsers: Boolean,
});
</script>

<template>
  <div class="form-container">
    <div class="input-container">
      <div class="input-column">
        <span>name: </span>
        <input
          class="input-name"
          v-model="userName"
          placeholder="15文字以内で入力"
        />
      </div>
      <span class="error-message" v-if="!validUserName"
        >Name must be between 1 and 15 characters</span
      >
      <div class="input-column">
        <span>age:</span>
        <input class="input-age" v-model="userAge" type="number" />
      </div>
    </div>
    <span class="error-message" v-if="!validUserAge"
      >Please enter a number greater than or equal to 0</span
    >
    <button
      @click="onClickRegister"
      class="register-button"
      :disabled="!validUserName || !validUserAge || props.limitUsers"
    >
      register
    </button>
  </div>
</template>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5a904;
  padding: 24px 0;
  width: 50%;
  margin-bottom: 12px;
  border-radius: 10px;
}

.input-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 50px;
  margin-bottom: 20px;
}

.input-column {
  width: 200px;
  display: flex;
  justify-content: space-between;
}

.error-message {
  font-size: 12px;
  color: red;
}

.register-button {
  width: 10em;
  height: 5ex;
  margin-top: 10px;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
}
.register-button:hover {
  background-color: pink;
  transform: translateY(-2px);
}

input {
  width: 120px;
  margin: 2px;
}

span {
  font-size: 20px;
  font-weight: bold;
}
</style>
