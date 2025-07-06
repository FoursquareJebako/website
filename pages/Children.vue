<template>
  <Header></Header>
  <section id="welcome">
    <div id="welcome-wrapper">
      <h1>THE CHILDREN MINISTRY</h1>
      <p>
        We are passionate about children and the younger generation. We labour
        to impart the essence of Christ in the heart of our children and young
        infants
      </p>
      <div id="swipe-down">
        <Icon name="fe:arrow-down" size="20px"></Icon>
      </div>
    </div>
  </section>

  <div id="page-info">
    <section id="commitment" class="card">
      <h1 class="head">Our <span>Commitment</span></h1>
      <p class="content">
        The Children Department of Foursquare Jebako has been a core sensitive
        ministry of the Church since inception. We appreciate the value of
        raising godly children, mentored to change and influence their world.
        <br /><br />
        To the Glory of God, our standards haven't changed. We are very much
        involved in imparting our children with all godly knowledge, making them
        equipped and important to the society and the word at large.
      </p>
    </section>
    <section id="operation" class="card">
      <h1 class="head">How we Operate</h1>
      <p class="content">
        We operate a typical class-based lesson with regular promotional tests.
        <br /><br />Young infants are catered for separately in the daycare
        while older children are grouped into age-specific classes. Promotion is
        seasonal and test based, until they are mature enough to be promoted to
        the Teenagers department.<br /><br />We love to see our children mature
        and mature rightly.
      </p>
    </section>
  </div>

  <!-- <section id="children-corner">
    <h1 class="head">BIBLE QUIZ</h1>
    <div id="icon-group">
      <i class="fas fa-gamepad"></i><span id="plus"> + </span
      ><i class="fas fa-bible"></i>
    </div>
    <p class="content">
      Take a quick Bible quiz!<br />Test your knowledge of the Bible and share
      your score with your friends!
    </p>
    <button id="play-btn">Let's Play</button>
  </section>

  <div id="soon" class="close">
    <h3>Bible Quiz is coming soon!</h3>
    <p>
      You might want to bookmark this page and check back later. The Bible Quiz
      will be available to play very soon.
    </p>
    <button id="close-soon">OK</button>
  </div>

  <div id="play">
    <i class="fas fa-gamepad"></i>
  </div> -->
  <Footer></Footer>
</template>

<script setup></script>

<style scoped lang="less">
#welcome {
  width: 100%;
  height: 100vh;
  margin-top: 0px;
  background: url(../assets/img/children2.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

#welcome-wrapper {
  position: relative;
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
}

#welcome-wrapper h1 {
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  letter-spacing: 3px;
  font-size: 3.2rem;
}

#welcome-wrapper p {
  font-family: "Poppins", sans-serif;
  margin-top: 10px;
  font-size: 2rem;
  max-width: 500px;
}

#swipe-down {
  width: 30px;
  height: 30px;
  background: #f2f2f2;
  border-radius: 100%;
  position: absolute;
  bottom: 8%;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: dangle-up 2s infinite;
}

@keyframes dangle-up {
  0% {
    bottom: 8%;
  }
  40% {
    bottom: 5%;
  }
  80% {
    bottom: 8%;
  }
}

#swipe-down .iconify {
  color: #2d2f3d;
}

#play {
  width: 68px;
  height: 68px;
  transform: scale(0, 0);
  border-radius: 100%;
  background: #f1ca41;
  position: fixed;
  bottom: 5%;
  right: 5%;
  box-shadow: 0px 0px 5px 0px #595959;
  color: #2d2f3d;
  font-size: 3.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: popup 1.5s 1s forwards;
}

#play a {
  color: inherit;
  text-decoration: none;
}

#play:hover {
  background: #ef5350;
  color: white;
}

@keyframes popup {
  40% {
    transform: scale(1.06, 1.06);
  }
  100% {
    transform: scale(1, 1);
  }
}

section {
  font-family: "Noto Sans", sans-serif;
  font-size: 1.6rem;
}

#commitment {
  color: #2d2f3d;
  padding: 60px 10px;
  text-align: center;
}

#page-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 70px;
}

.card {
  justify-self: center;
  width: 100%;
  max-width: 600px;
}

.head {
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 2.8rem;
  color: #404040;
}

.content {
  margin-top: 20px;
  padding: 0 15px;
}

#operation {
  color: #2d2f3d;
  padding: 0px 10px;
  text-align: center;
}

#children-corner {
  color: white;
  padding: 40px 10px;
  padding-bottom: 50px;
  border-top: 5px solid #f1ca41;
  border-bottom: 5px solid #f1ca41;
  margin-top: 70px;
  margin-bottom: 100px;
  text-align: center;
  background: linear-gradient(to top right, #42275a 50%, #734b6d 100%);
}

#children-corner h1 {
  color: white;
}

#icon-group {
  margin-top: 30px;
  font-size: 6rem;
  color: #f1ca41;
}

#plus {
  font-weight: 800;
  padding: 0 10px;
}

#play-btn {
  margin-top: 40px;
  text-decoration: none;
  background: #f1ca41;
  color: #2d2f3d;
  padding: 10px 30px;
  border-radius: 50px;
  font-size: 1.5rem;
  letter-spacing: 3px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  user-select: none;
  border: none;
}

#play-btn:hover {
  background: #ef5350;
  color: white;
}

#soon {
  padding: 15px;
  width: 80%;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.3);
  background: white;
  z-index: 100;
}

#soon.close {
  display: none;
}

#close-soon {
  padding: 5px 50px;
  background: #404040;
  border: none;
  color: white;
}
</style>
