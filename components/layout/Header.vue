<template>
  <div>

    <!-- navBar -->
    <div id="navBar" class="d-flex justify-content-between">
      <ul class="nav d-flex align-items-center">
          <!-- <li class="nav-item"><a href="/"><img src="../../assets/logo2.png" width="70px" height="70px"></a></li> -->
          <li class="nav-item"><a href="/" class="nav-link">HC</a></li>
      </ul>

      <ul class="nav d-flex align-items-center">
          <li class="nav-item"><a href="/" class="nav-link">홈</a></li>
          <li class="nav-item">|</li>
          <li class="nav-item"><a href="/menu" class="nav-link">식단표</a></li>
          <li class="nav-item">|</li>
          <li class="nav-item"><a href="/" class="nav-link">스토어</a></li>
          <li class="nav-item">|</li>
          <li class="nav-item"><a href="/community" class="nav-link">커뮤니티</a></li>
      </ul>

      <ul class="nav d-flex align-items-center">
        <!-- <li class="nav-item"><a href="/" class="nav-link">Account</a></li>
        <li class="nav-item"><a href="/" class="nav-link">Settings</a></li> -->
        
          <li class="nav-item">
            <b-avatar class="mr-3 bg-white"></b-avatar>
            <!-- <span class="mr-auto">{{userName}}</span> -->
          </li>
          <li class="nav-item"><a href="/" class="nav-link">Sign Out</a></li>
      </ul>
    </div>
    <!-- // navBar -->

  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      userName: "HYESUKIM",
    }
  },
};
</script>

<style>
  #navBar {
    height: 80px;
  }

  a.nav-link, a.nav-link:hover {
    color: black;
    /* text-decoration: none; */
    font-size: 18px;
  }

  a.nav-link:hover {
    transform: scale(1.3);
  }
</style>