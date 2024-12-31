<!-- src/components/Login.vue -->
<template>
    <div class="login-container">
      <form @submit.prevent="handleLogin">
        <h2>로그인</h2>
        
        <div class="form-group">
          <label for="email">이메일</label>
          <input 
            type="email" 
            id="email" 
            v-model="loginForm.email" 
            required 
            placeholder="이메일을 입력하세요" 
          />
        </div>
  
        <div class="form-group">
          <label for="password">비밀번호</label>
          <input 
            type="password" 
            id="password" 
            v-model="loginForm.password" 
            required 
            placeholder="비밀번호를 입력하세요" 
          />
        </div>
  
        <button type="submit" class="btn btn-primary w-100">로그인</button>
  
        <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import axios from "axios";

  const loginForm = ref({
    email: '',
    password: ''
  });

  const errorMessage = ref('');
  
  const handleLogin = async () => {
    try {
        const response = await axios.post('http://localhost:8080/auth/login', loginForm.value);
        console.log(response.data)

        const token = response.data;

        localStorage.setItem('token', token); // JWT 토큰 저장

        // router.push({ name: 'Home' }); // 홈 페이지로 이동
    } catch (error) {
      errorMessage.value = '로그인에 실패했습니다.';
      alert('로그인에 실패했습니다. 입력하신 정보를 확인해주세요.');
    }
  };
  </script>
  
  <style scoped>

  </style>
  