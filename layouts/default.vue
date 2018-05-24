<template>
  <div>
    <ul class='nav-container'>
      <li>
        <nuxt-link to='/'>Home</nuxt-link>
      </li>
      <li>
        <nuxt-link to='/shop'>Shop</nuxt-link>
      </li>
        <li>
        <nuxt-link to='/womens'>Womens</nuxt-link>
      </li>
      <li>
        <nuxt-link to='/mens'>Mens</nuxt-link>
      </li>
      <li>
        <nuxt-link to='/about'>About Us</nuxt-link>
      </li>
      <li>
        <nuxt-link to='/contact'>Contact</nuxt-link>
      </li>
    </ul>
    <div>
      <nuxt-link to='/'><img src='/trulvl-white-logo.png'></nuxt-link>
    </div>
  <nuxt/>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import Logo from '@/components/Logo.vue';

export default {
  components: 
    Navigation,
    Logo
}
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 13vw;
  min-width: 150px;
  justify-content: center;
  padding-bottom: 2rem;
}
</style>
