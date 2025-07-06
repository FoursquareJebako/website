<template>
  <footer>
    <div id="logo-wrapper">
      <img class="logo" src="@/assets/img/logo.png" alt="Foursquare Jebako Logo" />
      <p class="name">Foursquare Jebako</p>
    </div>

    <section>
      <div class="li-group">
        <h3>About</h3>
        <ul>
          <li><NuxtLink to="/about">About us</NuxtLink></li>
          <li><NuxtLink to="#">The leadership</NuxtLink></li>
        </ul>
      </div>

      <div class="li-group">
        <h3>Media</h3>
        <ul>
          <li><NuxtLink to="/media">Listen live</NuxtLink></li>
          <li><NuxtLink to="https://anchor.fm/foursquare-jebako">Sermons</NuxtLink></li>
          <li><NuxtLink to="https://medium.com/@foursquarejeb">Blog</NuxtLink></li>
          <li><NuxtLink to="#">Testimony</NuxtLink></li>
        </ul>
      </div>

      <div class="li-group">
        <h3>Give</h3>
        <ul>
          <li><NuxtLink to="/give">Tithes and Offering</NuxtLink></li>
        </ul>
      </div>

      <div class="li-group">
        <h3>Ministries</h3>
        <ul>
          <li><NuxtLink to="/children">Children</NuxtLink></li>
          <li><NuxtLink to="https://www.tiktok.com/@the.tabernacle.of?lang=en">Teenagers</NuxtLink></li>
          <li><NuxtLink to="#">Youth</NuxtLink></li>
          <li><NuxtLink to="#">FWI/CFM</NuxtLink></li>
        </ul>
      </div>
    </section>

    <p id="copyright">Copyright © 2025 Foursquare Jebako. All rights reserved.</p>
  </footer>
</template>

<script setup></script>

<style scoped lang="less">
footer {
  width: 100%;
  background: #2d2f3d;
  margin-top: auto;
  padding: 10px;
  padding-bottom: 5px;
  color: white;
}

#logo-wrapper {
  display: flex;
  align-items: center;
  overflow: hidden;

  .logo {
    width: 40px;
    height: 40px;
    transform: translate(0, 10px);
  }

  .name {
    font-family: "Poppins", sans-serif;
    font-size: 1.8rem;
    text-align: right;
    margin-top: 10px;
    margin-left: 5px;
    padding: 5px;
  }

  .name:after {
    content: "A city on the Hill";
    position: absolute;
    transform: translate(0, -12px);
    display: block;
    font-family: cursive;
    font-size: 2.7rem;
    color: #cccccc;
  }
}

section {
  margin-top: 50px;

  .li-group {
    margin-top: 35px;

    h3 {
      font-family: "Rubik", sans-serif;
      font-weight: 500;
      font-size: 2.1rem;
      margin-top: 20px;
      color: #b3b3b3;
    }
  }

  ul {
    padding: 0;
  }

  li {
    list-style-type: none;
    font-family: "Noto Sans", sans-serif;
    font-size: 1.6rem;
  }

  a {
    color: white;
    &::hover {
      color: white;
    }
  }
}

#copyright {
  margin-top: 30px;
  font-size: 1.2rem;
  text-align: center;
  color: #cccccc;
}

@media @desktop {
  footer section {
    margin: 0 auto;
    margin-top: auto;
    min-height: 180px;
    width: 80%;
    display: flex;
    justify-content: space-around;
  }
}
</style>
