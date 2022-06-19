<template>
  <div id="app" class="container">
    <Header />
    <div id="content" class="content">
      <router-view></router-view>
    </div>
    <Footer />
  </div>

</template>

<script>
import Header from './components/layout/Header.vue'
import Footer from './components/layout/Footer.vue'

export default {
  name: 'app',
  components: {
    Header,
    Footer
  },
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap');

  * {
    font-family: 'Black Han Sans', sans-serif;
  }

  #app {
    padding: 0;
  }

  #content {
    width: 100%;
  }

  a, a:hover {
    text-decoration:none;
    color: black;
  }
</style>