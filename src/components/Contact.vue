<template>

    <div class="container-fluid py-5 align-items-center" id="contact">
    
        <div class="row g-4 py-2 row-cols-1 mx-auto justify-content-center">

            <div class="col col12 col-lg-8">
                <div class="position-relative m-4">
                    <hr style="border-color: white;"/>
                    <span class="position-absolute top-0 start-50 translate-middle px-2 fs-3 section-header-text">Contact</span>
                </div>
            </div>

            <div class="col p-4 col-12 col-lg-8 text-center contact-info-col">

                <div class="row pb-5">
                    <div class="col rows-col-1 text-center fs-4">

                        Would you like to get in contact for any questions?
                        <br />
                        My email is down below!

                    </div>
                </div>

                <div class="row text-center">
                    <i class="bi bi-envelope"></i> 
                    <span class="email-text">dm@enzocampfens.dev</span>
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

#contact {
    background-color:#111; 
    height:fit-content !important;
    color:white;
}

i {
    font-size: 2em;
    padding-left:0px;
    color: $green-highlight;
}

.contact-info-col {
    height: fit-content;
}

.section-header-text {
    width: fit-content; 
    height:2rem; 
    background-color:#111; 
    line-height:30px; 
    color:white;
}

</style>