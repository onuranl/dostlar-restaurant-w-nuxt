<template>
  <nav>
      <ul>
          <li> <nuxt-link to="/"><app-logo /></nuxt-link> </li>
          <li> <nuxt-link to="/menu">Menu</nuxt-link> </li>
          <li> <nuxt-link to="/about">About us</nuxt-link> </li>
      </ul>
      <nuxt-link to="/cart">Cart</nuxt-link>
  </nav>
</template>

<script>
import appLogo from './appLogo.vue'
export default {
  components: { appLogo },

}
</script>

<style >

</style>