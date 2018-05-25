<template>
  <h1 :class="{brand: isBrand}">
    <slot></slot>
  </h1>
</template>

<script>
export default {
  props: ['isBrand']
}
</script>

<style>
h1 {
  font-size: 3rem;
  line-height: 1.2;
  letter-spacing: -0.05rem;
}
.brand {
  color: #fff;
  font-weight: 200;
  font-size: 3rem;
}
</style>
