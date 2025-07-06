<template>
  <section id="services-section">
    <h1>Our Services</h1>
    <!-- Slider main container -->

    <swiper-container
      ref="swiperEl"
      class="swiper-container"
      speed="500"
      slides-per-view="1"
      loop="true"
      grab-cursor="true"
      space-between="20"
      :autoplay="swiperAutoplay"
      :breakpoints="swiperBreakpoints"
      :navigation="swiperNavigation"
    >
      <swiper-slide class="swiper-slide">
        <div id="sunday-service" class="service-board">
          <div class="content">
            <p class="title">Sunday Service</p>
            <p class="time">8:00AM - 11:30AM</p>
            <a id="sermons-btn" href="http://anchor.fm/foursquare-jebako"
              >VIEW SERMONS</a
            >
          </div>
        </div>
      </swiper-slide>

      <swiper-slide class="swiper-slide">
        <div id="bible-study" class="service-board">
          <div class="content">
            <p class="title">Bible Study</p>
            <p class="day frost">Wednesdays</p>
            <p class="time">
              <!-- <Icon name="mdi:clock-time-three-outline" size="25px"></Icon
              > -->
              6:00PM - 8:00PM
            </p>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide class="swiper-slide">
        <div id="prayer-meeting" class="service-board">
          <div class="content">
            <p class="title">Prayer Meeting</p>
            <p class="day frost">Fridays</p>
            <p class="time">6:00PM - 8:00PM</p>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide class="swiper-slide">
        <div id="hour-of-mercy" class="service-board">
          <div class="content">
            <p class="title">Hour Of Mercy</p>
            <p class="day frost">
              <!-- <Icon name="material-symbols:today" size="25px"></Icon> -->
              Thursdays
            </p>
            <p class="time"><i class="fas fa-clock"></i>8:00AM - 10:00AM</p>
          </div>
        </div>
      </swiper-slide>
    </swiper-container>

    <div class="swiper-pagination"></div>

    <div id="swiper-controls">
      <div class="swiper-prev">
        <Icon name="mdi:menu-left" size="40px"></Icon>
      </div>
      <div class="swiper-next">
        <Icon name="mdi:menu-right" size="40px"></Icon>
      </div>
    </div>
  </section>
</template>

<script setup>
const swiperEl = templateRef("swiperEl");

const swiperAutoplay = {
  delay: 2000,
  disableOnInteraction: false,
};

const swiperBreakpoints = {
  760: {
    slidesPerView: "2",
  },
  1300: {
    slidesPerView: "3",
  },
};
const swiperNavigation = {
  nextEl: ".swiper-next",
  prevEl: ".swiper-prev",
};
</script>

<style scoped lang="less">
#services-section {
  width: 100%;
  margin: 0;
  padding: 50px 0;
  text-align: center;
  color: white;

  h1 {
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 2.8rem;
    color: #333;

    @media @desktop {
      font-size: 3.2rem;
    }
  }
}

.swiper-wrapper {
  width: 80%;
}

.swiper-container {
  width: 100%;
  padding: 20px 0;
  padding-bottom: 50px;

  .swiper-slide {
    width: 400px;
    height: 400px;
    text-align: center;
    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(10.5px);
    -webkit-backdrop-filter: blur(10.5px);
    height: 100%;
    border-radius: 20px;
    color: #2d2f3d;
    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 15px;
  }

  .swiper-button-prev {
    width: 25px !important;
    height: 25px !important;
  }

  .swiper-button-next {
    width: 20px !important;
    height: 20px !important;
  }
}

.service-board {
  width: 400px;
  height: 400px;
  position: relative;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  color: white;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(to bottom right, #002f4b, #9f341f);
    background-image: linear-gradient(to bottom right, #002f4b, #150823);
    opacity: 0.7;
    border-radius: 20px;
  }

  .content {
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    overflow: auto;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 1.5rem;

    p {
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
    }

    .frost {
      width: 100%;
      background: #f1ca41;
      padding: 10px 25px;
      /* From https://css.glass */
      background: rgba(235, 235, 235, 0.09);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(80px);
      border: 1px solid rgba(235, 235, 235, 0.02);
    }

    .title {
      font-weight: 700;
      font-size: 2.7rem;
      margin-bottom: 10px;
      letter-spacing: 1px;
      color: rgb(255, 255, 255);
      //text-shadow: .1em .1em 0 hsla(204, 4%, 77%, 0.574);
    }

    .day {
      font-size: 1.8rem;
      font-weight: 500;
      margin-top: 10px;
    }

    .fas {
      padding-right: 7px;
    }

    .time {
      margin-top: 5px;
      font-size: 1.8rem;
      font-weight: 500;
      color: white;
    }
  }
}

#sermons-btn {
  display: block;
  padding: 7px 20px;
  border: 2px solid white;
  border-radius: 20px;
  margin-top: 10px;
  color: white;

  &:hover {
    background: rgba(0, 0, 0, 0.6);
    color: white;
    text-decoration: none;
  }
}

#sunday-service {
  background: url(@/assets/img/sunday.jpg);
  background-size: cover;
}

#bible-study {
  background: url(@/assets/img/study.jpg);
  background-size: cover;
}

#prayer-meeting {
  background: url(@/assets/img/prayer.jpg);
  background-size: cover;
}

#hour-of-mercy {
  background: url(@/assets/img/mercy.jpg);
  background-size: cover;
}

#swiper-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;

  div {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    background: white;
    margin: 0 10px;
    box-shadow: 0px 0px 10px 1px #e6e6e6;
    color: #737373;
    cursor: pointer;

    &:hover {
      -webkit-tap-highlight-color: white;
      outline: none;
    }
  }
}
</style>
