<template>
  <Header type="transparent"></Header>
  <div id="connect-bg">
    <div class="wrapper">
      <div id="connect-container">
        <h1>
          Media & Broadcast<br />Listen and watch our services
          <span class="live">live</span>
        </h1>
      </div>
    </div>
  </div>

  <section id="ch">
    <h1>Join us online!</h1>
    <h3>Join us here on every of our service days</h3>
    <p>
      Are you having a very busy day at work, stuck in traffic or far from any
      of our centres. We're bringing church to you. Join us in worshipping from
      the comfort of your internet connected smart phone or desktop.
    </p>
  </section>

  <section id="re">
    <div class="board">
      <h1>Listen Live</h1>
      <p>Listen to a service broadcast Live from the church</p>
      <NuxtLink class="btn" to="/audio"
        >Listen <Icon name="iconoir:headset-solid" size="25px"></Icon></NuxtLink>
    </div>

    <div class="board">
      <h1>Watch Live</h1>
      <p>Watch the service broadcast Live from the church</p>
      <NuxtLink class="btn" to="/video">Watch <Icon name="ic:round-live-tv" size="25px"></Icon
      ></NuxtLink>
    </div>
  </section>
  <Footer></Footer>
</template>

<script setup></script>

<style scoped lang="less">
#connect-bg {
  position: relative;
  width: 100%;
  height: 500px;
  background: url(../assets/img/studio.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  color: white;
  overflow: none;
}

#connect-bg .wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#connect-container {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

#connect-container h1 {
  font-family: "Poppins", sans-serif;
  /*font-weight: 700;*/
  font-size: 2.4rem;
  text-align: center;
}

#connect-container .live {
  padding: 0 20px;
  background: #f1ca41;
  color: #2d2f3d;
  border-radius: 50px;
}

#connect-container .live:after {
  content: "";
  display: inline-block;
  vertical-align: middle;
  width: 8px;
  height: 8px;
  margin-left: 5px;
  border-radius: 100%;
  background: red;
}

#ch {
  padding: 70px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #f2f2f2;
}

#ch h1 {
  font-family: "Poppins", sans-serif;
  font-size: 2.4rem;
}

#ch h3 {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 2.1rem;
}

#ch p {
  font-size: 1.7rem;
  text-align: center;
  margin-top: 20px;
}

#re {
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.board {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 50px 15px;
  margin-top: 20px;
  border-radius: 15px;
  background: #f2f2f2;
  width: 80%;
}

.board h1 {
  font-family: "Poppins", sans-serif;
  font-size: 2.4rem;
}

.board p {
  font-size: 1.7rem;
}

.board .btn {
  width: 80%;
  max-width: 300px;
  height: 50px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 50px;
  background: #0066b2;
  color: #2d2f3d;
  font-size: 2rem;
  font-weight: 500;
  margin-top: 20px;
  background: #f1ca41;
  outline: none;
  border: 0;

  .iconify {
    margin-bottom: 5px;
  }
}

.board .btn:hover {
  background: #ef5350;
  color: white;
  text-decoration: none;
}

.board i {
  display: inline-block;
  margin-left: 5px;
}

@media screen and (min-width: 768px) {
  #re {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
