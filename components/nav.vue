<template>
  <nav>
    <div class="logo">
      <app-h1 is-brand="true"></app-h1>
    </div>
    <div class="menu">
      <ul>
        <li>
           <nuxt-link to="/">Login</nuxt-link>
        </li>
        <li>
           <nuxt-link to="/">Cart</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import h1 from './h1';
export default {
  components: {
    'app-h1': h1
  }
}
</script>

<style>
nav {
  display: flex;
}
.logo {
  padding: 15px;
  width: 25%;
  text-align: center;    
}
.menu {
  text-align: right;
  align-self: center;
  width: 75%;
  padding-right: 10rem;
}
.menu > ul {
  list-style-type: none;
}
.menu > ul > li {
  display: inline-block;
}
.menu > ul > li > a {
  display: block;
  padding: 5px 7px;
  text-decoration: none;
  color: #fff;
  text-transform: uppercase;
  height: 20px;
  line-height: 20px;  
}
.menu > ul > li > a:hover {
  opacity: 0.8;
}
</style>