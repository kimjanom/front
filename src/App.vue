<template>
  <div id="app">
    <nav>

    </nav>
    <router-view/>

  </div>
</template>

<style>

</style>

<script>

    import Header from '@/components/Header'
    import Footer from '@/components/imageTest'
    import WorkSpace from '@/views/WorkSpace'
    export default {
      created () {
        console.log("hello")
      },
      name: 'App',
      components:{
         Header,
        WorkSpace
      },
    };

</script>
