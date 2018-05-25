<template>
  <section class="section">
    <div class="container">
      <h1 class="title">Hello Bulma</h1>
      <p class="subtitle">My first website with<strong>Bulma</strong>!</p>
    </div>
  </section>
</template>

<script>
export default {
  transition: 'fadeOpacity'  
}
</script>

<style scoped>
.container {
  background: #222;
}

.fadeOpacity-enter-active, .fadeOpacity-leave-active {
  transition: opacity .35s ease-out;
}

.fadeOpacity-enter, .fadeOpacity-leave-active {
  opacity: 0;
}
</style>