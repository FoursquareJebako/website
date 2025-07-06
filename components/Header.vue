<template>
  <header ref="header">
    <div class="wrapper">
      <div id="logo-wrapper">
        <img
          class="logo"
          src="@/assets/img/logo.png"
          alt="Foursquare Jebako Logo"
        />
        <p class="header-name"><NuxtLink to="/">Foursquare Jebako</NuxtLink></p>
      </div>

      <div id="menu-wrapper">
        <Icon
          id="menu-icon"
          name="mdi-light:menu"
          size="50px"
          @click="handleMenu"
        ></Icon>
        <ul>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/audio">Listen</NuxtLink></li>
          <li><NuxtLink to="/video">Watch</NuxtLink></li>
          <li>
            <a
              href="https://drive.google.com/drive/folders/1KA8ec6mJNPZoTkPCVOjtbBDd6ECVk8IC?usp=sharing"
              >Gallery</a
            >
          </li>
          <li><NuxtLink to="/give">Give</NuxtLink></li>
        </ul>
      </div>
    </div>

    <div id="menu-mobile" class="" ref="menu-mobile">
      <ul>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/audio">Listen live</NuxtLink><span class="live"></span></li>
        <li><NuxtLink to="/video">Watch live</NuxtLink><span class="live"></span></li>
        <li>
          <a
            href="https://drive.google.com/drive/folders/1KA8ec6mJNPZoTkPCVOjtbBDd6ECVk8IC?usp=sharing"
            >Gallery</a
          >
        </li>
        <li><NuxtLink to="/give">Give</NuxtLink></li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { useWindowScroll } from "@vueuse/core";
import { useIntervalFn } from "@vueuse/core";
const props = defineProps(["type"]);
const header = useTemplateRef("header");
const menuMobile = useTemplateRef("menu-mobile");

onMounted(() => {
  if (props.type === "transparent") {
    header.value.style.background = "transparent";
    header.value.style.color = "white";
  } else {
    console.log(props.type);
  }
});

let { x, y } = useWindowScroll();
const { pause, resume, isActive } = useIntervalFn(() => {
  if (header.value) {
    if (y.value === 0) {
      console.log("very top");
      if (!menuMobile.value.classList.contains("open")) {
        header.value.classList.remove("top");
      }
    } else {
      header.value.classList.add("top");
    }
  }
}, 300);

const makeTransparent = () => {};

const handleMenu = () => {
  if (menuMobile.value.classList.contains("open")) {
    menuMobile.value.classList.remove("open");
    toggleHeader();
  } else {
    menuMobile.value.classList.add("open");
    if (!header.value.classList.contains("top")) {
      header.value.classList.add("top");
    }
  }
};
</script>

<style scoped lang="less">
header {
  position: fixed;
  top: 0;
  background: white;
  font-family: "Poppins", sans-serif;
  font-size: 1.8rem;
  z-index: 5;
  margin: 0;
  width: 100%;
  padding: 0 10px;
  color: #2d2f3d; /*2D2F3D*/
  color: #1f262a;

  .wrapper {
    display: flex;
    justify-content: space-between;
    height: 75px;
  }

  #logo-wrapper {
    display: flex;
    align-items: center;
    overflow: hidden;

    .logo {
      width: 35px;
      height: 35px;
    }

    .header-name {
      font-family: "Poppins", sans-serif;
      font-size: 2rem;
      font-weight: 500;
      text-align: right;
      margin-top: 12px;
      padding: 5px;
      padding-left: 12px;
    }

    .header-name a {
      color: inherit;
      text-decoration: none;
    }
  }
}

#menu-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    display: none;
    padding-right: 30px;
    gap: 0 20px;
    justify-content: center;
    align-items: center;
    list-style: none;
    margin-top: 10px;

    a {
      color: inherit;
      text-decoration: none;
      &:hover {
        color: #f1ca41;
      }
    }

    .live {
      display: inline-block;
      width: 8px;
      height: 8px;
      background: #d8232a;
      border-radius: 100%;
      margin-left: 3px;
    }
  }

  li {
    padding: 0 10px;
  }
}

#menu-icon {
  margin-right: 10px;
  font-size: 2.5rem;
  text-align: center;
}

#menu-mobile {
  width: 100%;
  height: 0;
  position: fixed;
  left: 0;
  background: white;
  overflow: hidden;
  color: #2d2f3d;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 700;

  ul {
    width: 100%;
    padding: 0;
    margin-top: 90px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    list-style-type: none;
  }

  li {
    font-size: 2.7rem;
    margin-bottom: 25px;

    a {
      color: inherit;
      &:hover {
        text-decoration: none;
        color: #f1ca41;
      }
    }
  }
}

#menu-mobile.open {
  height: 100%;
  overflow: auto;
}

header.top {
  box-shadow: 0 0.2px 5px 0rem #b3b3b3;
  animation: fadein 0ms forwards;
  background: white;
}

@keyframes fadein {
  100% {
    background: white;
    color: #2d2f3d;
    // background: #262626;
    //color: white;
  }
}

@media screen and (min-width: 800px) {
  header {
    padding: 0 30px;
  }
  header #menu-wrapper > ul {
    display: flex;
  }

  header #menu-icon {
    display: none;
  }
}
</style>
