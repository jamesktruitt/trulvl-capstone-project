<template>
  <div class='main'>
    <app-nav></app-nav>
    <logo/>
    <Navigation/>
    <nuxt/>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import Logo from '@/components/Logo.vue';
import nav from '@/components/nav';

export default {
  components: {
    Navigation,
    Logo,
    'app-nav': nav
  }
}
</script>

<style>
html {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background: #222;
  word-spacing: 4px;
  width: 100vw;
  height: 100vh;
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

.main {
  height: 100%;
  position: relative;
  color: #fff;
}

footer {
  background: #7F43C3;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  bottom: 0;
}

.social {
  display: flex;
}

.twitter {
  margin-right: 1rem;
}
</style>