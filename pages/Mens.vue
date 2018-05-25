<template>
  <section class="gallery">
    <img src="/mens-1.png" alt="">
    <img src="/mens-1.png" alt="">
    <img src="/mens-1.png" alt="">
    <img src="/mens-1.png" alt="">
    <img src="/mens-1.png" alt="">
    <img src="/mens-1.png" alt="">
    <img src="/mens-1.png" alt="">
    <img src="/mens-1.png" alt="">
    <img src="/mens-1.png" alt="">
    <img src="/mens-1.png" alt="">
  </section>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.gallery {
  margin: 50px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.gallery img {
  width: 100%;
}

.gallery h2 {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-gap: 20px;
  align-items: center;
}

.gallery h2:before, .gallery h2:after {
  display: block;
  content: '';
  height: 10px;
  background: linear-gradient(to var(--direction, left), var(--yellow), transparent);
}

.gallery h2:after {
  --direction: right;
}

@media (max-width: 1000px) {
  .menu {
    order: -1;
    perspective: 800px;
  }
  [aria-controls="menu-list"] {
    display: block;
    margin-bottom: 10px;
  }

  .menu ul {
    max-height: 0;
    overflow: hidden;
    transform: rotateX(90deg);
    transition: all 0.5s;
  }

  [aria-expanded="true"] ~ ul {
    display: grid;
    max-height: 500px;
    transform: rotateX(0);
  }

  [aria-expanded="false"] .close {
    display: none;
  }

  [aria-expanded="true"] .close {
    display: inline-block;
  }

  [aria-expanded="true"] .open {
    display: none;
  }

}

@media (max-width: 700px) {
  .top {
    grid-template-areas:
      "hero hero"
      "cta1 cta2"
  }
  /* About */
  .about {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 500px) {
  .top {
    grid-template-areas:
      "hero"
      "cta1"
      "cta2"
  }
}
</style>