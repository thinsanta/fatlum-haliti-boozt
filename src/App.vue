<template>
<div class="container">
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
      </a>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li class="nav-item"><router-link to="/" active-class="active" class="nav-link px-2 link-dark" aria-current="page">Home</router-link></li>
        <li class="nav-item"><router-link to="/products" active-class="active" class="nav-link px-2 link-dark" aria-current="page">Products</router-link></li>
        <li><a href="#" class="nav-link px-2 link-dark">FAQs</a></li>
        <li><a href="#" class="nav-link px-2 link-dark">About</a></li>
      </ul>

      <div class="col-md-3 text-end">
       
      </div>
    </header>
  </div>
  
  <router-view/>



</template>

<script>


export default {
  name: 'App',
  components: {
   
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.navbar{
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    background: #f5f5f5;
    z-index: 9;
}
#nav{
    padding: 10px 10vw;
    display: flex;
    justify-content: space-between;
}

.active{
  border-bottom: solid 1.4px #2c3e50;
}


</style>
