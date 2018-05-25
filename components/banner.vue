<template>
  <div class="banner">
    <img 
    src="/laceup.png" 
    alt="50% Discount on your first purchase">
    <div class="greeting">

    </div>
  </div>
</template>

<style>
.banner {
  position: center;
  padding-bottom: 3rem;
  align-content: relative;
}

img {
  display: block;
  margin: auto;
  max-width: 60vw;
  min-width: 60vw;
  align-content: center;
}

.greeting {
  text-align: center;
  position: absolute;
  bottom: -5rem;
  margin: 0 25rem;
  padding: 1rem 2rem;
  background: #fff;
}

</style>

<script>
import h1 from './h1';
export default {
  components: {
    'app-h1': h1
  }
}
</script>