<template>
  <div class="vue-tempalte">
    <h3>Login</h3>
    <form @submit.prevent="Submit">
      <div class="form-group">
        <label>Username</label>
        <input
          class="form-control"
          type="email"
          v-model="signin.email"
          required
          placeholder="Enter username"
        />
      </div>

      <div class="form-group">
        <label>Password</label>
        <input
          class="form-control"
          type="password"
          v-model="signin.password"
          required
          placeholder="Enter password"
        />
      </div>
      <p class="forgot-password text-right mt-2 mb-4">
        <router-link to="/forgot-password">Forgot password ?</router-link>
      </p>
      <button type="submit" class="btn btn-success">Login</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "LoginPage",
  props: {
    msg: String,
  },
  data() {
    return {
      signin: {
        email: null,
        password: null,
      },
    };
  },
  methods: {
    Submit() {
      axios.post('http://localhost:7000/login',this.signin)
      .then((res)=>{
        console.log("Login Responce:",res.data.result)
      })
  },
}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.vue-tempalte{
  width: 30%;
  margin: auto;
}
h3 {
  text-align: center;
}

label {
  padding: 10px 0;
}

p {
  text-align: center;
  padding-top: 10px;
}

button {
  width: 100%;
}

input[type="placeholder"] {
  font-size: 14px;
}

.form-control {
  padding: 0.7rem;
}
</style>
