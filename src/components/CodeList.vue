<template>
  <div style="margin: auto; display: block;">
    <div class="item-container">
      <Item
          v-for="(item, index) in code"
          :key="index"
          class="item-item" :code="item.code" :desc="item.desc" :available="item.available"
      />
    </div>
  </div>
</template>

<script>
import Item from "@/components/Item";
import Code from "@/data/code";

export default {
  name: "CodeList",
  components: {Item},
  data() {
    return {
      code: Code,
    }
  },
}
</script>

<style scoped>
.item-container {
  display: flex;
  flex-flow: wrap;
  justify-content: space-around;
}

.item-item {
  display: block;
  margin-bottom: 20px;
}
</style>