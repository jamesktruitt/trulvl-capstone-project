<template>
  <div>
    <Logo/>
    <div class="container">
      <h1>Welcome!</h1>
      <p><nuxt-link to='/product'>Product page</nuxt-link></p>
      <p><nuxt-link to='/contact'>Contact page</nuxt-link></p>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue';
import Navigation from '@/components/Navigation.vue';

export default {
  components: {
    Logo,
    Navigation
  }
}
</script>

<style>
html, body {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  background: #222;
  color: white;
  width: 100vw;
  height: 100vh;
}

a, a:visited {
  color: #3edada;
  text-decoration: none;
}

.container {
  padding: 60px;
  width: 100vw;
  height: 100vh;
  background: #444;
}

.page-enter-active, .page-leave-active {
  transition: all .25s ease-out;
}

.page-enter, .page-leave-active {
  opacity: 0;
  transform-origin: 50% 50%;
}

.page-enter-active {
  animation: acrossIn .45s ease-out both;
} 

.page-leave-active {
  animation: acrossOut .65s ease-in both;
} 

@keyframes acrossIn {
  0% {
    transform: translate3d(-100%, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes acrossOut {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(100%, 0, 0);
  }
}
</style>
