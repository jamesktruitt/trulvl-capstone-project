<template>
  <ul class='nav-container'>
    <li>
      <nuxt-link to='/'>Home</nuxt-link>
    </li>
    <li>
      <nuxt-link to='/Shop'>Shop</nuxt-link>
    </li>
        <li>
      <nuxt-link to='/Shop'>Womens</nuxt-link>
    </li>
    <li>
      <nuxt-link to='/Shop'>Mens</nuxt-link>
    </li>
    <li>
      <nuxt-link to='/Shop'>Mens</nuxt-link>
    </li>
    <li>
      <nuxt-link to='/Shop'>About Us</nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style scoped>
/* ul.nav-container {
  display: grid;
  grid-gap: 20px;
  grid-template-rows: span 2;
  background-color: red;
  width: 100vw;
  margin: 0px;
} */
</style>