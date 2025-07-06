<template>
  <section id="welcome">
    <div id="profile-block">
      <img id="profile" src="@/assets/img/daddyandmummy.jpg" />
    </div>
    <div class="content">
      <h3>Welcome! We Are Glad To Have You</h3>
      <p>
        We are Foursquare Gospel Church, Jebako, an abode of the immense love of
        God. We pursue the core principles of Christ to the latter and uphold
        His very excellence.
        <br />
        <br />Foursquare Jebako is one big family united by the wonder working
        love of Christ and a place where growth and service is highly esteemed.
        <br />We can't wait to share this love of God with you and have you be a
        part of us.
        <br />
        Join us to experience the Word, Worship and Wonders of God.
      </p>

      <div id="signature">
        The Senior Pastor<br />Foursquare Gospel Church Jebako
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped lang="less">
#welcome {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0 50px;
  padding: 50px 20px 50px 20px;
  margin-top: 0px;
  font-family: "Noto Sans", sans-serif;
  font-size: 1.5rem;
  background: white;

  #profile {
    width: 100%;
    max-width: 350px;
    height: 350px;
    object-fit: cover;
  }

  h3 {
    font-weight: 700;
    padding: 20px 0;
  }

  #signature {
    display: block;
    font-style: italic;
    margin-top: 30px;
    background: white;
    color: black;
  }

  #profile-bloc {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
}

@media screen and (min-width: 768px) {
  #welcome {
    flex-direction: row;
    padding: 70px;
  }
}

@media screen and (min-width: 768px) {
  #welcome #profile-bloc {
    width: 100%;
  }
}

@media screen and (min-width: 768px) {
  #welcome .content {
    width: 400px;
  }
}
</style>
