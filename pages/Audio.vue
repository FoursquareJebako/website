<template>
  <Header></Header>

  <div class="topnav">
    <h1>Live Audio Broadcast</h1>
  </div>

  <iframe
    src="https://app.waystream.io/foursquare-jebako"
    width="100%"
    height="100%"
    scrolling="no"
    frameborder="no"
    marginheight="0"
    marginwidth="0"
  >
  </iframe>

  <Footer></Footer>
</template>

<script setup></script>

<style scoped lang="less">
.topnav {
  margin-top: 100px;
  font-family: "poppins", "rubik", "noto sans";
}

.topnav h1 {
  color: #1a1a1a;
  font-family: "poppins";
  font-size: 2rem;
  font-weight: 500;
  padding: 10px;
  text-align: center;
}

iframe {
    height: 500px;
}
</style>
