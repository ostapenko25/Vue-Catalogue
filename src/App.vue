<template>
  <div class="wrapper">

    <!-- <wrapper-header> -->
    <header>
      <div class="navbar">
        <div class="container">
          <div class="navbar-content">
            <div class="logo">
              <img src="./assets/img/logo.png" alt="Vue.js">
            </div>
            <ul class="navbar-list">
              <li class="navbar-item" v-for="link in links" :key="link.title">
                <router-link href="" class="navbar-link" :title="link.title" :to="link.url">{{ link.title }}</router-link>
              </li>             
            </ul>
          </div>
        </div>
      </div>
    </header>

    <router-view></router-view>

     <!-- <wrapper-footer> -->

  </div> 
</template>

<script>

export default {
  data() {
    return {
      links: [
        {  
          title: 'Home', 
          url: '/'
        },
        {  
          title: 'Shop', 
          url: '/shop'
        },
      ]
    }    
  }
}
</script>

<style lang="scss">
.navbar-content {
  margin: 0 20px;
  .logo{
    width: 50px
  }
}

.navbar-link {
  &.router-link-exact-active {
    color: blue
  }
}

</style>
