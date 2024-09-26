<template>
    <div>
      <h1>客户列表</h1>
      <ul>
        <li v-for="customer in customers" :key="customer.id">{{ customer.name }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        customers: [],
      };
    },
    created() {
      this.fetchCustomers();
    },
    methods: {
      async fetchCustomers() {
        const response = await axios.get('/api/customers');
        this.customers = response.data;
      },
    },
  };
  </script>