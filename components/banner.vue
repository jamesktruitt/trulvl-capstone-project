<template>
  <div class="banner">
    <img src="/laceup.png">
  </div>
</template>

<style>
.banner {
  position: center;
  align-content: relative;
}

img {
  display: block;
  margin: auto;
  max-width: 60vw;
  min-width: 60vw;
  align-content: center;
  padding: 2rem;
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