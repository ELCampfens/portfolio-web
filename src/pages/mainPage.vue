

<template>
    <Menu />
  
    <Landing />
    <AboutMe />
    <ExpAndEdu />
    <Projects />
    <Contact />
  </template>
  
  <script setup>
    import Menu from '../components/generalComponents/Menu.vue'
  
    import Landing from '../components/Landing.vue'
    import AboutMe from '../components/AboutMe.vue'
    import ExpAndEdu from '../components/expAndEdu/ExpAndEdu.vue'
    import Projects from '../components/projects/Projects.vue'
    import Contact from '../components/Contact.vue'
  
  </script>
  
  <style lang="scss">
  
  .container {
    height: 100vh !important;
  }
  
  .top-wave {
    position:absolute; 
    z-index:-1;
    width:100%;
  }
  
  
  
  </style>
  