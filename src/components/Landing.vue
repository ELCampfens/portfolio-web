<template>

  <div class="container align-items-center" id="landing">
  
    <div class="row align-items-center">
      <div class="row row-cols-1 align-items-end mx-auto justify-content-start landing-container-row">
  
        <div class=" text-start text-lg-start">
          <span class="display-1 landing-text">Hello,
            <br />
             My name is 
             <span class="highlight-main">Enzo Campfens</span> 
          </span>
          <br />
          <span class="highlight-sub text-subtitle-1 fs-5 pb-5 pt-3">A software developer with a passion for programming and learning.</span>
        </div>
  
          <a href="#contact" class="p-0">
              <button type="button" class="contact-btn rounded shadow p-3 px-5">Get in contact!</button>
          </a>
  
      </div>
  
    </div>
  
  </div>
  </template>
  
  <script>
  
  </script>
  
  <style lang="scss">
  .row {
    height:100%;
  }
  
  .highlight-main {
    color: $green-highlight;
    white-space: nowrap;
  }
  
  .highlight-sub {
    display:inline-block;
    margin-left:5px;
    color: $grey-highlight;
  }

  .landing-container-row {
    height: fit-content;
  }

  .contact-btn {
      background-color: transparent;
      border: 2px solid $green-highlight;
      margin:14px;
      font-size:1.4rem;
      font-weight:400;
      transition: background-color .5s;
      width:fit-content;
  }

  .contact-btn:hover {
      background-color: #15C196;
  }
  
  </style>
  