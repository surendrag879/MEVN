<template>
  <div>
    <nav>
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/register">Registration</router-link> |
      <router-link to="/" @click="logout">Logout</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "NavbarView",
  components: {
    Navbar,
  },
  data() {
    return {};
  },
  methods: {
    logout() {
      console.log("Successfully Logout");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
  padding: 10px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
