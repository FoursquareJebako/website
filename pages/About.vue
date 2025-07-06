<template>
  <Header type="transparent"></Header>
  <section id="welcome-hero" class="welcome-hero">
    <div id="hero-wrapper">
      <div class="header-text">
        <h2>About Us</h2>
        <p>
          Have a knowledge about Foursquare Gospel Church and Foursquare Church
          Jebako.
        </p>
      </div>
    </div>
  </section>
  <Footer></Footer>
  <!--/.welcome-hero-->
  <!--welcome-hero end -->
</template>

<script setup></script>

<style scoped lang="less">
.welcome-hero {
  display: flex;
  align-items: center;
  justify-content: center;
  /* position:relative; */
  background: url(../assets/img/welcome.webp) no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  height: 99vh;

  @media @desktop {
    background-position: 0 50%;
  }
}

#hero-wrapper {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: opacity(1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  font-family: "Poppins", sans-serif;
}

.header-text {
  max-width: 500px;
  text-align: center;
}

.header-text h2 {
  color: #fff;
  text-transform: uppercase;
  line-height: 1.5;
  font-weight: 800;
  letter-spacing: 3px;
  font-size: 3.5rem;
}

@media screen and (min-width: 768px) {
  .header-text h2 {
    font-size: 4rem;
  }
}

.header-text h2 span {
  color: #d92cf9;
}

.header-text p {
  color: #fff;
  font-size: 2rem;
  font-weight: 300;
  margin: 10px;
}

.header-text a {
  width: 200px;
  height: 60px;
  line-height: 60px;
  border-radius: 3px;
  text-transform: capitalize;
  color: #fff;
  background: #b636ff;
  border: 1px solid #b636ff;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  -webkit-transition: 0.3s linear;
  -moz-transition: 0.3s linear;
  -ms-transition: 0.3s linear;
  -o-transition: 0.3s linear;
  transition: 0.3s linear;
}

.header-text a:hover {
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.4);
  background: #9f00ff;
  border: 1px solid #9f00ff;
}
</style>
