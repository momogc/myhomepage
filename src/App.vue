<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <div class="bacground"></div>
    <router-view/>
  </div>
</template>
<script>
</script>

<style lang="scss">
@import '../static/css/reset.css';
#app {
  width: 100%;
  height: 100%;
  font-size: 30px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.bacground {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: url(./assets/img/5.png) fixed bottom;
  background-size: cover;
  background-repeat: no-repeat;
  font-size: 30px;
  font-weight: 1000;
  filter: blur(1PX);
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
