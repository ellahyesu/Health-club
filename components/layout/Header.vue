<template>
  <div>
    <b-navbar type="dark" variant="dark" class="d-flex">
      <b-navbar-nav>
        <b-nav-item href="/menu">Home</b-nav-item>

        <!-- Navbar dropdowns -->
        <b-nav-item-dropdown text="Grade" right>
          <b-dropdown-item href="/beginner">작심삼일</b-dropdown-item>
          <b-dropdown-item href="/midclass">한달돌파</b-dropdown-item>
          <b-dropdown-item href="/pro">프로</b-dropdown-item>
        </b-nav-item-dropdown>

        

        <b-nav-item-dropdown text="User" right>
          <b-dropdown-item href="/">Account</b-dropdown-item>
          <b-dropdown-item href="/">Settings</b-dropdown-item>
          <b-dropdown-item href="/">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>


        <b-nav-item href="/" class="text-end">
            <b-avatar class="mr-3 bg-primary"></b-avatar>
            <span class="mr-auto">{{userName}}</span>
        </b-nav-item>



      </b-navbar-nav>


    </b-navbar>
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