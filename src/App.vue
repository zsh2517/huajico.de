<template>
  <div id="app">
    <NavBar />
    <code style="font-size: xx-large;" class="poem-large">
      <pre style="display: inline-block;">
滑稽树上滑稽果，滑稽树下你和我。
    滑稽用来表代码，应用场景多又多。</pre>
    </code>
    <code style="font-size: xx-large;" class="poem-small">
      <pre style="display: inline-block;">
滑稽树上滑稽果，
  滑稽树下你和我。
    滑稽用来表代码，
      应用场景多又多。</pre>
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
@media (min-width: 1201px) {
  #app {
    margin: 40px 100px;
  }
  .poem-large {
    display: inline-block;
  }
  .poem-small{
    display: none;
  }
}

@media (min-width: 575px) and (max-width: 1200px) {
  #app {
    margin: 40px 40px;
  }
  .poem-large {
    display: inline-block;
  }
  .poem-small{
    display: none;
  }
}

@media (max-width: 574px) {
  #app {
    margin: 40px 20px;
  }
  .poem-large {
    display: none;
  }
  .poem-small{
    display: inline-block;
  }
}

html, body {
  margin: 0;
}

#app {
  font-family: Consolas;
}
</style>
