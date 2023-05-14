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
            <i :class="`bi bi-${projectUrl.name}`"></i>
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

pre {
    white-space: pre-wrap;       /* Since CSS 2.1 */
    white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
    white-space: -pre-wrap;      /* Opera 4-6 */
    white-space: -o-pre-wrap;    /* Opera 7 */
    word-wrap: break-word;       /* Internet Explorer 5.5+ */

    font-family: inherit;
}

.bi {
    font-size:2em;
    color: black !important;
}

.project-row {
    background-color: $secundaire-color-bg;
    color: black;
}

.lang-badge {
    width:fit-content; 
    border: 2px solid black;
    color:black;
}

.icon-link {
    width:fit-content;
}

</style>