<template>
  <div class="container" v-if="show">
    <div class="code-img" :style="`background-image: url('${imgsrc}')`">
    </div>
    <div class="code-code">
      {{ code }}
    </div>
    <div class="code-desc">
      {{ desc }}
    </div>
  </div>
</template>

<script>
import Config from "@/data/config";

export default {
  name: "item",
  props: {
    code: {
      type: String,
      default: '404'
    },
    desc: {
      type: String,
      default: 'Not found'
    },
    ext: {
      type: String,
      default: "",
    }
  },
  data() {
    return {
      imgsrc: '',
      showAllState: Config.state,
      imgExist: true,
    }
  },
  computed: {
    show() {
      return Config.state.showAll || this.imgExist;
    }
  },
  mounted() {
    console.log(this.ext)
    if (this.ext === "") { // 标注了不存在
      Config.addEmpty();
      this.imgsrc = require('@/assets/loading.png');
      this.imgExist = false;
      return;
    }
    try {
      this.imgsrc = require('@/assets/code/' + this.code + "." + this.ext);
      Config.addImage();
    } catch (e) {
      Config.addEmpty();
      this.imgsrc = require('@/assets/loading.png');
      this.imgExist = false;
    }
  }
}
</script>

<style scoped>
@media (min-width: 1201px) {
  .container {
    width: 24%;
  }
}

@media (min-width: 575px) and (max-width: 1200px) {
  .container {
    width: 45%;
  }
}

@media (max-width: 574px) {
  .container {
    width: 90%;
  }
}

.container {
  box-sizing: border-box;
  padding: 10px;
  height: unset;
  background-color: black;
  color: white;
}

.code-img {
  width: 100%;
  padding-bottom: 66.67%;
  overflow: hidden;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-color: white;
}

.code-code {
  font-size: xx-large;
  text-align: center;
  padding: 10px 10px 0;
}

.code-desc {
  font-size: large;
  text-align: center;
  padding: 10px;
}
</style>