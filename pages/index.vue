<template>
  <Header type="transparent"></Header>
  <div id="header-bg">
    <div id="header-bg-wrapper">
      <h1>WELCOME</h1>
      <p>
        We are the city on the Hill.<br />
        A place where JESUS is glorified and God's love abounds
      </p>
      <NuxtLink to="/media" id="connect-btn"
        >CONNECT LIVE <Icon name="solar:soundwave-outline" size="25px"></Icon
      ></NuxtLink>
      <!-- fluent:sound-wave-circle-32-filled -->
    </div>
  </div>

  <HomeWelcome></HomeWelcome>
  <HomeServices></HomeServices>
  <HomeConnect></HomeConnect>
  <HomeMinistry></HomeMinistry>
  <HomeVideo></HomeVideo>

  <div id="map">
    <div id="iframe-container">
      <iframe
        width="500"
        height="300"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src="https://maps.google.com/maps?width=500&amp;height=300&amp;hl=en&amp;q=25,%20Akanni%20street,%20Shomolu.%20Lagos%20Lagos+(Foursquare%20Jebako)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
    </div>
  </div>
  <Footer></Footer>
</template>

<script setup>

</script>

<style scoped lang="less">
#header-bg {
  width: 100%;
  height: 100vh;
  background: url(@/assets/img/main-bg.jpg);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  color: white;
  overflow: none;
		/* background-attachment: fixed;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover; */
}

#header-bg #header-bg-wrapper {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: opacity(1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  font-family: "Poppins", sans-serif;
}

#header-bg #header-bg-wrapper h1 {
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  letter-spacing: 3px;
  font-size: 3.5rem;
}

#header-bg #header-bg-wrapper p {
  margin-top: 5px;
  font-size: 2rem;
}

@media screen and (min-width: 768px) {
  #header-bg #header-bg-wrapper h1 {
    letter-spacing: 3px;
    font-size: 4rem;
  }

  #header-bg #header-bg-wrapper p {
    font-size: 2rem;
  }
}

#header-bg-wrapper #connect-btn {
  margin-top: 20px;
  text-decoration: none;
  background: #f1ca41;
  color: #2d2f3d;
  padding: 12px 40px;
  border-radius: 50px;
  font-size: 1.5rem;
  letter-spacing: 3px;
  font-weight: bold;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 10px;

  span {
    margin-bottom: 3px;
    padding: 0;
  }

  &:hover {
    background: #ef5350;
    color: white;
  }
}

#map {
  padding: 70px 0;
}
#map #iframe-container {
  width: 85%;
  height: 300px;
  margin: 0 auto;
  border-radius: 10px;
  background: #f2f2f2;
}
#map #iframe-container iframe {
  width: 100%;
  border-radius: 10px;
}
</style>
