<template>
    <div class="user-create">
      <h2>创建用户</h2>
      <form @submit.prevent="createUser" class="form">
        <div class="form-group">
          <label for="username">姓名:</label>
          <input
            type="text"
            id="username"
            v-model="user.username"
            required
            class="form-input"
          />
        </div>
        <div class="form-group">
          <label for="password">密码:</label>
          <input
            type="password"
            id="password"
            v-model="user.password"
            required
            class="form-input"
          />
        </div>
        <button type="submit" class="submit-btn">创建用户</button>
        <p v-if="message" class="success-message">{{ message }}</p>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: {
          username: '',
          password: '',
        },
        message: '',
      };
    },

    methods: {
  async createUser() {
    try {
      // 模拟用户创建过程
      const response = await this.$api.postJson('/api/user/create', {
        username: this.user.username,
        password: this.user.password,
      });
      
      // 假设后端返回用户信息
      console.log('创建用户:', response.data);
      this.message = `用户 ${this.user.username} 已成功创建！`;

      // 清空表单
      this.user.username = '';
      this.user.password = '';
    } catch (error) {
      console.error('创建用户失败:', error);
      this.message = '用户创建失败，请重试。';
    }
  },
},
  };
  </script>
  
  <style scoped>
  .user-create {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
  }
  
  h2 {
    text-align: center;
    color: #333;
  }
  
  .form {
    display: flex;
    flex-direction: column;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    font-weight: bold;
    color: #555;
  }
  
  .form-input {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    transition: border-color 0.3s;
  }
  
  .form-input:focus {
    border-color: #007bff;
    outline: none;
  }
  
  .submit-btn {
    padding: 12px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
  }
  
  .submit-btn:hover {
    background-color: #0056b3;
  }
  
  .success-message {
    color: green;
    text-align: center;
    margin-top: 10px;
  }
  </style>
  