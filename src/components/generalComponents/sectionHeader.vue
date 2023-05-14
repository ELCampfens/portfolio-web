<template>
    <div class="container-fluid pt-4">
        <div class="position-relative">
            <hr style="border-color: black;"/>
            <span 
            class="position-absolute top-50 start-50 translate-middle px-2 title-box text-nowrap fs-1"
            >{{ title }}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String
    }
}
</script>

<style lang="scss">

.title-box {
    width: fit-content; 
    height:2rem; 
    background-color:$primary-color-bg !important; 
    line-height:30px;
    color: #111;

    // white-space: nowrap;
}

</style>