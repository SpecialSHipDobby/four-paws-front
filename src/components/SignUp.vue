<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h2 class="mb-4 text-center">회원가입</h2>
        <form @submit.prevent="handleSubmit">
          <div class="mb-3">
            <label for="name" class="form-label">이름</label>
            <input
                type="text"
                id="name"
                v-model="form.name"
                class="form-control"
                placeholder="이름을 입력하세요"
                required
            />
          </div>


          <!-- 닉네임 필드 -->
          <div class="mb-3">
            <label for="nickname" class="form-label">닉네임</label>
            <input
                type="text"
                id="nickname"
                v-model="form.nickname"
                class="form-control"
                placeholder="닉네임을 입력하세요"
                required
            />
          </div>


          <!-- 이메일 필드 -->
          <div class="mb-3">
            <label for="email" class="form-label">이메일</label>
            <input
                type="email"
                id="email"
                v-model="form.email"
                class="form-control"
                placeholder="이메일을 입력하세요"
                required
            />
          </div>

          <!-- 비밀번호 필드 -->
          <div class="mb-3">
            <label for="password" class="form-label">비밀번호</label>
            <input
                type="password"
                id="password"
                v-model="form.password"
                class="form-control"
                placeholder="비밀번호를 입력하세요"
                required
            />
          </div>

          <!-- 비밀번호 확인 필드 -->
          <div class="mb-3">
            <label for="confirmPassword" class="form-label">비밀번호 확인</label>
            <input
                type="password"
                id="confirmPassword"
                v-model="form.confirmPassword"
                class="form-control"
                placeholder="비밀번호를 다시 입력하세요"
                required
            />
          </div>

          <!-- 제출 버튼 -->
          <button type="submit" class="btn btn-primary w-100">가입하기</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from "axios";

const form = ref({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  nickname:'',
});

const handleSubmit = async () => {
  try {
    const response = await axios.post('http://localhost:8080/auth/register', form.value);
    console.log(response.data)
    alert('회원가입이 완료되었습니다!');

    // 폼 초기화
    form.value = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      nickname:'',
    };
  } catch (error) {
    console.error('회원가입 실패:', error);
    alert('회원가입에 실패했습니다. 다시 시도해주세요.');
  }
};
</script>

<style scoped>
/* Bootstrap을 사용하므로 기본 스타일을 활용합니다. 추가적인 커스텀 스타일이 필요하다면 여기에 작성하세요. */
</style>