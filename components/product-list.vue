<template>
  <div class="product-list">
    <div class="products">
      <app-product v-for="product in products" :key="product.id" :product="product"></app-product>
    <section class="gallery">
    </section>
    </div>
  </div>
</template>

<script>
import product from './product'
import h2 from './h2'
export default {
  props: ['products'],
  components: {
    'app-product': product,
    'app-h2': h2
  },
}
</script>

<style>
.product-list {
      display: grid;
      grid-gap: 20px;
      border: 10px solid var(--yellow);
      grid-template-rows: repeat(auto-fit, minmax(150px, 1fr));
      grid-template-rows: fit-content(100px) 150px 150px 150px;
}
</style>
