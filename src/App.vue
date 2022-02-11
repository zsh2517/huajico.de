<template>
  <div id="app">
    <NavBar />
    <code style="font-size: xx-large; display: inline-block;">
      <pre style="display: inline-block;">
滑稽树上滑稽果，滑稽树下你和我。
    滑稽用来表代码，应用场景多又多。</pre>
    </code>
    <CodeList></CodeList>
    <Footer />
  </div>
</template>

<script>
import CodeList from "@/components/CodeList";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
export default {
  name: 'App',
  components: {
    NavBar,
    CodeList,
    Footer,
  }
}
</script>

<style>
html, body {
  margin: 0;
}

#app {
  margin: 40px 100px;
  font-family: Consolas;
}
</style>
