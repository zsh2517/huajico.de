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
    available: {
      type: Boolean,
      default: true,
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
    if (!this.available) { // 标注了不存在
      this.imgsrc = require('@/assets/loading.png');
      this.imgExist = false;
      return;
    }
    try { // 尝试 png，然后尝试 jpg
      this.imgsrc = require('@/assets/code/' + this.code + '.png');
    } catch (e) {
      try {
        this.imgsrc = require('@/assets/code/' + this.code + '.jpg');
      } catch (e) {
        this.imgsrc = require('@/assets/loading.png');
        this.imgExist = false;
      }
    }
  }
}
</script>

<style scoped>
.container {
  width: 24%;
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
  background-size: cover;
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