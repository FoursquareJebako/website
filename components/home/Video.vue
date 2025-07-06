<template>
  <div id="video-section">
    <video autoplay muted loop>
      <source src="@/assets/img/video.mp4" type="video/mp4" />
    </video>
    <div id="video-content">
      <h1>Watch our services Live!</h1>
      <p>
        You can stream our services live right from your mobile device. Worship
        with us wherever you are.<br />
      </p>
      <a href="video.html" id="video-btn"
        >Watch Live <Icon name="ic:round-live-tv" size="25px"></Icon
      ></a>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="less">
#video-section {
  position: relative;
  height: 550px;
  margin-top: 40px;
  background: brown;
  overflow: hidden;
  font-family: "Poppins", sans-serif;

  video {
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

#video-content {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 15px;

  h1 {
    font-size: 2.8rem;

    @media @desktop {
      font-size: 3.2rem;
    }
  }
}

#video-btn {
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
  margin-top: 20px;

  &:hover {
    background: #ef5350;
    color: white;
    text-decoration: none;
  }

  .iconify {
    margin-bottom: 5px;
  }
}
</style>
