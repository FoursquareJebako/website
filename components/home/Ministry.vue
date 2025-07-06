<template>
  <section id="ministries-section">
    <h1 class="header">A Vibrant Church For Everyone</h1>
    <h3>
      Enjoy meaningful fellowship through our various ministries. <br />
      There's a place for everyone.
    </h3>
    <!-- Slider main container -->
    <div id="min-swiper" class="swiper-container">
      <div class="swiper-slide">
        <div id="children" class="ministry-board">
          <div class="content">
            <h1>Children Ministry</h1>
            <p>
              Our Children's Ministry welcomes infants and young children into a
              joyful place grow in God's love.
            </p>
            <NuxtLink class="ministry-btn" to="/children">CHILDREN</NuxtLink>
          </div>
        </div>
      </div>

      <div class="swiper-slide">
        <div id="teens" class="ministry-board">
          <div class="content">
            <h1>Teens Ministry</h1>
            <p>
              This is where teenagers explore their faith, their
              identity and purpose in God's eyes.
            </p>
            <NuxtLink class="ministry-btn" to="https://www.tiktok.com/@the.tabernacle.of?lang=en">Teenagers</NuxtLink>
          </div>
        </div>
      </div>

      <div class="swiper-slide">
        <div id="youth" class="ministry-board">
          <div class="content">
            <h1>Youth Ministry</h1>
            <p>
              Our Youth Ministry empowers singles and young adults to grow
              spiritually, and positively impact their world.
            </p>
            <NuxtLink class="ministry-btn" to="youth.html">Youth</NuxtLink>
          </div>
        </div>
      </div>

      <div class="swiper-slide">
        <div id="adult" class="ministry-board">
          <div class="content">
            <h1>FWI/CFM</h1>
            <p>
              Ministries for women and men to deepen their
              faith, reach out to others, and serve with impact.
            </p>
            <NuxtLink class="ministry-btn" to="">FWI/CFM</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped lang="less">
#ministries-section {
  width: 100%;
  margin: 0;
  padding: 50px 15px;
  text-align: center;
  font-family: "Noto Sans", sans-serif;
  font-family: "Poppins", sans-serif;
  font-size: 1.7rem;
  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .header {
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 2.8rem;
    color: #333;

    @media @desktop {
      font-size: 3.2rem;
    }
  }

  h3 {
    padding: 0 15px;
    font-size: 1.8rem;
    font-weight: normal;
    margin-top: 10px;
  }

  .swiper-container {
    width: 100%;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 50px;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
}

#teens {
  background: url(@/assets/img/teens.jpg);
  background-size: cover;
}

#children {
  background: url(@/assets/img/children2.jpg) no-repeat center;
  background-size: cover;
  background-repeat: no-repeat;
}

#youth {
  background: url(@/assets/img/youth.jpg) no-repeat center;
  background-size: cover;
}

#adult {
  background: url(@/assets/img/fwi.jpg) no-repeat center;
  background-size: cover;
}

.ministry-board {
  position: relative;
  width: 90%;
  max-width: 1000px;
  height: 400px;
  box-shadow: 0px 0px 5px 5px #f2f2f2;
  border-radius: 10px;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(to bottom right, #002f4b, #2d2d2d);
    background-image: linear-gradient(to bottom right, #002f4b, #150823);
    opacity: 0.8;
    border-radius: 10px;
  }
}

.content {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 0 15px;

  h1 {
    color: white;
  }

  p {
    max-width: 600px;
  }
}

.ministry-btn {
  display: block;
  padding: 6px 60px;
  border: 2px solid white;
  border-radius: 20px;
  margin-top: 10px;
  color: white;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    background: rgba(0, 0, 0, 0.6);
    color: white;
    text-decoration: none;
  }
}
</style>
