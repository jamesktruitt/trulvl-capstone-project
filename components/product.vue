<template>
  <div class="product" @click="goToProduct(product.id)">
    <div class="product-card">
      <img :src="product.imgUrl" :alt="product.title">
      <div class="detail">
        <p>{{product.title}}</p>
        <p>${{product.price}}</p>
      </div>
    </div>
    <div class="product-overlay">

    </div>
  </div>
</template>

<script scoped>
export default {
  props: ['product'],
  methods: {
    goToProduct(id) {
      this.$router.push('/product/'+id)
    }
  }
}
</script>

<style>

</style>