<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  
}
</script>

<style>
button {
  padding: 10px 15px;
  background: #1CB593;
  color: #fff;
  text-transform: uppercase;
  border-radius: 4px;
  border:none;
}
button:hover {
  opacity: 0.8;
  cursor: pointer;
}
</style>