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
export default{
  name:"App",
}
</script>



