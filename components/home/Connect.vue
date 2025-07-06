<template>
  <section id="connect-section">
    <div>
      <p id="top-icon" class="fas fa-globe"></p>
    </div>

    <h3>Join us in fellowship</h3>
    <h1>We are anywhere you are.</h1>
    <!-- <p class="text">
      Be a part of our uplifting services anytime and anywhere across our
      available platforms.
    </p> -->

    <div id="btn-groups">
      <div class="btn-row">
        <a class="btn" href="media.html"
          >Listen live <span class="live"></span
        ></a>
        <a class="btn" href="https://web.facebook.com/foursquarejeb"
          ><Icon name="akar-icons:facebook-fill" size="25px"></Icon>Facebook</a
        >
      </div>

      <div class="btn-row">
        <a class="btn" href="https://instagram.com/foursquarejeb"
          ><Icon name="akar-icons:instagram-fill" size="25px"></Icon>
          Instagram</a
        >
        <a class="btn" href="http://medium.com/@foursquarejeb"
          ><Icon name="akar-icons:medium-fill" size="25px"></Icon>Medium</a
        >
      </div>

      <div class="btn-row">
        <a class="btn" href="https://twitter.com/foursquarejeb"
          ><Icon name="akar-icons:twitter-fill" size="25px"></Icon>Twitter</a
        >
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped lang="less">
#connect-section {
  height: 500px;
  padding: 10px 15px;
  padding-bottom: 20px;
  color: white;
  background-color: #330033;
  background: linear-gradient(to top right, #42275a 50%, #734b6d 100%);

  /*brown*/
  border-top: 5px solid #f1ca41;
  border-bottom: 5px solid #f1ca41;
  font-family: "Noto Sans", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

@media screen and (min-width: 768px) {
  #connect-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

#top-icon {
  font-size: 6.5rem;
  color: #f1ca41;
}

h1 {
  //margin-top: 15px;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 2.8rem;
  letter-spacing: 1.2px;
  color: white;

  @media @desktop {
    font-size: 3.2rem;
  }
}

h3 {
  padding: 9px 30px;
  font-size: 1.8rem;
  border-radius: 30px;
  background: white;
  color: white;
  background: rgba(235, 235, 235, 0.09);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(80px);
  border: 1px solid rgba(235, 235, 235, 0.02);
}

.text {
  margin-top: 5px;
  font-size: 1.8rem;
}

#btn-groups {
  margin-top: 20px;
  width: 100%;
  max-width: 500px;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
}

.btn-row {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 5px 0;
  margin-top: 5px;
}

.live {
  width: 10px;
  height: 10px;
  background: #ef5350;
  border: 1.5px solid #e60000;
  border-radius: 100%;
  box-sizing: border-box;
  animation: pulse 1.5s infinite;
}
@keyframes pulse {
  45% {
    border-width: 3px;
  }
  85% {
    border-width: 1.5px;
  }
}

.btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  background: #f1ca41;
  width: 200px;
  height: 45px;
  color: #313131;
  border-radius: 90px;
  font-family: "Poppins", sans-serif;
  font-size: 1.55rem;
  font-weight: 600;
  align-self: center;
  justify-self: center;
  gap: 10px;

  &:hover {
    background: #ef5350;
    color: white;
    text-decoration: none;
  }

  &:nth-last-child(1):nth-child(odd) {
    grid-column: 2 / span 2;
  }

  .fas,
  .fab {
    padding-right: 7px;
    font-size: 1.65rem;
  }
}
</style>
