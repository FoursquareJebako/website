<template>
  <Header></Header>
  <div id="give-bg">
    <div id="give-wrapper">
      <h1>GIVE</h1>
      <p>
        Give, and it will be given to you. A good measure, pressed down, shaken
        together and running over, will be poured into your lap. For with the
        measure you use, it will be measured to you. <br /><b>— Luke 6:38 —</b>
      </p>
    </div>
  </div>

  <section id="h">
    <p class="content catch">
      You can give your tithes and offerings via bank transfer.
    </p>

    <div id="give-grp">
      <div id="tithe" class="give-box">
        <h1>Tithes and Offerings</h1>
        <p>Foursquare Gospel Church Jebako</p>
        <p>0267444972 | GTBank</p>
      </div>

      <div id="pledges" class="give-box">
        <h1>Donation, Pledges,</h1>
        <h1>Thanksgiving and Building Offering</h1>
        <p>Foursquare Gospel Church Jebako</p>
        <p>0267444972 | GTBank</p>
      </div>
    </div>
  </section>
  <Footer></Footer>
</template>

<script setup></script>

<style scoped lang="less">
#give-bg {
  height: 500px;
  background: rgb(64, 0, 63);
  color: white;
  font-family: "Noto Sans", sans-serif;
  margin-top: 65px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

#give-wrapper {
  width: 80%;
}

#give-bg h1 {
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  letter-spacing: 3px;
  font-size: 3.2rem;
}

#give-bg p {
  font-family: "Poppins", sans-serif;
  margin-top: 10px;
  font-size: 1.6rem;
  text-align: center;
}

section {
  font-family: "Noto Sans", sans-serif;
  font-size: 1.6rem;
}

.content {
  margin-top: 20px;
  padding: 0 15px;
}

#h .catch {
  margin-top: 50px;
  text-align: center;
}

#give-grp {
  margin-top: 50px;
  padding-bottom: 50px;
}

.give-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}

.give-box h1 {
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  lettr-spacing: 3px;
  font-size: 1.8rem;
}
</style>
