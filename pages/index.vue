<template>
  <div>
    <app-banner></app-banner>
    <div class="cta">
    </div>
    <app-product-list :products="products"></app-product-list>
  </div>
</template>

<script>
import h1 from '@/components/h1';
import banner from '@/components/banner';
import productList from '@/components/product-list';
import data from '@/services/data';

export default {
  asyncData(ctx, callback) {
    setTimeout(() => {
      callback(null, { products: data });
    }, 2000);
  },
  components: {
    'app-h1': h1,
    'app-banner': banner,
    'app-product-list': productList
  }
};

</script>

<style>
h1 {
  color: white;
}

a, a:visited {
  color: #3edada;
  text-decoration: none;
}

.page-enter-active, .page-leave-active {
  transition: opacity .35s ease-out;
}

.page-enter, .page-leave-active {
  opacity: 0;
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
