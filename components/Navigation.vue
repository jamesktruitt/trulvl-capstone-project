<template>
  <section class='nav-bar'>
    <p><nuxt-link exact to='/'>Home</nuxt-link></p>
    <p><nuxt-link to='/mens'>Mens</nuxt-link></p>
    <p><nuxt-link to='/womens'>Womens</nuxt-link></p>
    <p><nuxt-link to='/about'>About</nuxt-link></p>
    <p><nuxt-link to='/shop'>Shop</nuxt-link></p>
    <p><nuxt-link to='/contact'>Contact</nuxt-link></p>
  </section>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style scoped>
.nav-bar {
  display: flex;
  justify-content: space-between;
  padding: 3rem;
  margin: 1.5rem 15rem;
}

p {
  
}
</style>