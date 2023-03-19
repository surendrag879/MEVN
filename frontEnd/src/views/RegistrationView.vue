<template>
  <div class="vue-tempalte">
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label>Name</label>
        <input
          class="form-control"
          type="text"
          v-model="signup.username"
          required
          placeholder="Enter name"
        />
      </div>

      <div class="form-group">
        <label>Email</label>
        <input
          class="form-control"
          type="email"
          v-model="signup.email"
          required
          placeholder="Enter email"
        />
      </div>

      <div class="form-group">
        <label>Password</label>
        <input
          class="form-control"
          type="password"
          v-model="signup.password"
          required
          placeholder="Enter password"
        />
      </div>

      <p class="forgot-password text-right">
        Already have registered ?
      </p>

      <button type="submit" class="btn btn-success">Sign Up</button>
    </form>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: "RegistrationPage",
  data() {
    return {
      signup: {
        username: null,
        email: null,
        password: null,
      },
    };
  },
  methods: {
    onSubmit(){
      axios.post('http://localhost:7000/user/add',this.signup)
      .then((res)=>{
        console.log(res.data);
      })
      this.signup =''
    },
  
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.vue-tempalte {
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
.form-control {
  padding: 0.7rem;
}
</style>

const findUserData = await userModel.find()

if (!!Object.keys(findUserData).length) {
  return false
}
else {