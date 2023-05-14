<template>

<div class="container py-5 align-items-center" id="what-i-do">

  <div class="row align-items-center">
    <div class="row align-items-end mx-auto" style="height: fit-content;">

      <sectionHeader 
      :title="'About Me'" 
      :titleUsage="'main'"
      />

      <div class="row g-4 py-5 row-cols-1 row-cols-lg-3 mx-auto">

      <div class="feature col justify-content-center text-center px-2">
        <div class="card-container m-2 p-4 rounded shadow">
          <div class="feature-icon d-inline-flex fs-2 mb-3 rounded-4 mx-auto">
            <i class="bi bi-code-slash"></i>
          </div>
          <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
        </div>
      </div>


      <div class="feature col justify-content-center text-center px-2">
        <div class="card-container m-2 p-4 rounded shadow">
          <div class="feature-icon d-inline-flex fs-2 mb-3 rounded-4 mx-auto">
            <i class="bi bi-display"></i>
          </div>
          <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
        </div>
      </div>


      <div class="feature col justify-content-center text-center px-2">
        <div class="card-container m-2 p-4 rounded shadow">
          <div class="feature-icon d-inline-flex fs-2 mb-3 rounded-4 mx-auto">
            <i class="bi bi-bar-chart"></i>
          </div>
          <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
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
  }
}

</script>

<style lang="scss" scoped>

i {
  font-size:1.5em;
}

.card-container {
  background-color: $secundaire-color-bg;
}

@include media-breakpoint-down(md) {
    .container {
      height: fit-content !important;
    }
  }


</style>