<template>
  <div>
    <Logo/>
    <div class='container'>
      <h1>Welcome!</h1>
      <p><nuxt-link to='/shop'>Shop page</nuxt-link></p>
      <p><nuxt-link to='/contact'>Contact page</nuxt-link></p>
      <div class="unit" >
        <child v-for="unit in manifest" :item="unit.item" :url="unit.url"></child>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue';
import Navigation from '@/components/Navigation.vue';
import Child from '@/components/Child.vue';

export default {
  components: {
    Logo,
    Navigation,
    Child
  },
  data() {
    return {
      manifest: [
        {
          item: "backpack",
          url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/backpack.jpg"
        },
        {
          item: "tshirt",
          url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/tshirt.jpg"
        },
          {
          item: "sweatshirt",
          url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/sweatshirt.jpg"
        }
      ]
    };
  }
}

</script>

<style>
html, body {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; /* 1 */
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

#app {
  display: flex;
  justify-content: center;
}
.special {
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 12px;
}
h1, h2, h3, li {
  @extend .special;
}
h2 {
  font-size: 20px;
  margin: 0 0 5px;
  text-align: center;
}
li {
  list-style: none;
  display: inline-block;
}
input {
  background: #eee;
}
button {
  border: none;
  border-radius: 1000px;
  padding: 8px 13px;
  outline: none;
  cursor: pointer;
  &.inc {
    background: white;
    color: black;
  }
  &.submit {
    background: black;
    color: white;
    @extend .special;
    margin-left: 20px;
    padding: 12px 14px;
    width: 240px;
    transition: 0.25s all ease-in;
    &:hover {
      opacity: 0.8;
      transition: 0.25s all ease-out;
    }
  }
}
.quant-text {
  display: inline-block;
  text-align: center;
  width: 140px;
  padding: 8px;
  padding: 8px;
  @extend .special;
}
.quantity {
  border: 2px solid black;
  width: 235px;
  padding-left: 3px;
  border-radius: 1000px;
  background: #fff;
  margin-left: 20px;
}
.item {
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 440px;
  justify-content: space-around;
  background: #eee;
  padding: 20px 10px;
  margin: 30px;
  img {
    align-self: center;
  }
}
</style>
