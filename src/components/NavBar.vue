<template>
  <div class="navbar">
    <img class="nav-flex nav-logo" src="@/assets/huaji.jpg" @click="toggleShowAll"/>
    <div class="nav-flex nav-name">
      <span>Huaji Code (HTTP)</span>
      <span> {{ state.imageCount }}/{{ state.totalCount }}</span>
    </div>
  </div>
</template>

<script>
import Config from "@/data/config";

export default {
  name: "NavBar",
  data() {
    return {
      state: Config.state,
    }
  },
  methods: {
    toggleShowAll() {
      Config.toggle();
    }
  }
}
</script>

<style scoped>
.navbar {
  font-size: xx-large;
  display: flex;
  align-items: center;
}

.nav-flex {
  display: inline-block;
}

.nav-logo {
  height: 60px;
  margin-right: 15px;
}

.nav-name {
  margin-right: 15px;
}

.nav-name::before {
  content: '>';
}
</style>