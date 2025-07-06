<template>
  <Header></Header>
  <div class="topnav">
    <h1>Live Video Broadcast</h1>
  </div>
  <div class="iframe-wrapper">
      <iframe
        src="https://www.facebook.com/plugins/video.php?height=305&href=https%3A%2F%2Fweb.facebook.com%2Ffoursquarejeb%2Fvideos%2F1242253673970779%2F&show_text=false&width=560&t=0"
        width="100%"
        height="281"
        style="border: none; overflow: hidden; max-width: 700px"
        scrolling="no"
        frameborder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
  </div>
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

.iframe-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 0;
}
</style>
