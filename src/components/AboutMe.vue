<template>

<div class="container py-5 align-items-center" id="what-i-do">

  <div class="row align-items-center">
    <div class="row align-items-end mx-auto about-me-container-row">

      <sectionHeader 
      :title="'About Me'" 
      :titleUsage="'main'"
      />

      <div class="row g-4 py-5 row-cols-1 row-cols-lg-3 mx-auto" style="background-color:transparent;">

        <div class="feature col justify-content-center text-center px-2" style="background-color:transparent">
          <div class="card-container m-2 pt-4 px-4 rounded shadow">
            <div class="feature-icon d-inline-flex fs-2 rounded-4 mx-auto">
              <i class="bi bi-code-slash"></i>
            </div>
            <pre>
              {{ coding }}
            </pre>
          </div>
        </div>


        <div class="feature col justify-content-center text-center px-2" style="background-color:transparent">
          <div class="card-container m-2 pt-4 px-4 rounded shadow">
            <div class="feature-icon d-inline-flex fs-2 rounded-4 mx-auto">
              <i class="bi bi-lightbulb"></i>
            </div>
            <pre>
              {{ creativity }}
            </pre>
          </div>
        </div>


        <div class="feature col justify-content-center text-center px-2" style="background-color:transparent">
          <div class="card-container m-2 pt-4 px-4 rounded shadow">
            <div class="feature-icon d-inline-flex fs-2 rounded-4 mx-auto">
              <i class="bi bi-controller"></i>
            </div>
            <pre>
              {{ hobbies }}
            </pre>
          </div>
        </div>    
        
      </div>

    </div>
  </div>
</div>

</template>

<script>

import sectionHeader from './generalComponents/sectionHeader.vue';

export default {
  components: {
    sectionHeader
  },
  data() {
    return {
      coding: '\nProgramming started out as a hobby for me with small websites but my interest slowly became more. \nI decided I wanted to study programming as well and turned my hobby into my career!',
      hobbies: '\nI enjoy working out in my free time. \nI find it destressing after a full day of programming, and so I try to visit the gym frequently. \nWhen I\'m not working out I can be found playing games with friends, discovering new worlds and going on all kinds of virtual adventures!',
      creativity: '\nDuring development I always like to experiment with new ideas. \nI aspire to improve and innovate with existing projects and think out of the box with new projects.'
    }
  }
}

</script>

<style lang="scss" scoped>

i {
  font-size:1.2em;
  color: $green-highlight;
}

.card-container {
  background-color: $secundaire-color-bg;
  height:100%;
}

.about-me-container-row {
  height: fit-content;
}

@include media-breakpoint-down(md) {
    .container {
      height: fit-content !important;
    }
  }


</style>