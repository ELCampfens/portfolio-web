<template>

    <div 
    class="row project-row g-4 pb-4 row-cols-1 mx-auto align-self-end rounded shadow">
        <span class="fs-2"><i>{{ title }} </i></span>
        <pre class="fs-6">{{ description }}</pre>


        <a 
        v-for="projectUrl in projectUrls"
        target="_blank"
        class="icon-link" 
        :href="projectUrl.url">
            <i :class="`bi bi-${projectUrl.icon}`"></i>
        </a>


        <hr />
        <span class="fs-5">Made with:</span>
        <span 
        class="badge lang-badge d-flex p-2 align-items-center rounded-pill ms-2" 

        v-for="(language, index) in [...frameworks, ...languages]"
        :key="index"
        >
            {{ language }}
        </span>


    </div>

</template>

<script>
export default {
    props: {
        title: String,
        description: String,
        projectUrls: Array,
        languages: Array,
        frameworks: Array,
    },
    data() {
        return {}
    }
}

</script>

<style lang="scss" scoped>

.bi {
    font-size:2em;
    color: $green-highlight !important;
}

.project-row {
    background-color: $secundaire-color-bg;
    color: black;
}

.lang-badge {
    width:fit-content; 
    border: 2px solid $green-highlight;
    color:black;
}

.icon-link {
    width:fit-content;
}

</style>