<template>

    <div 
    class="row exp-edu-row g-4 py-4 row-cols-1 mx-auto align-self-end rounded shadow">

        <span class="fs-4 title fst-italic">{{ title }} at {{ location }}, {{ city }}</span>
        <span class="fs-6 mt-1 sub-date" v-if="education">{{ education }}</span>
        <span class="fs-6 mt-2 sub-date">{{ start_date }} - {{ end_date }}</span>

        <pre class="fs-6">{{ description }}</pre>
    </div>

</template>

<script>
export default {
    props: {
        start_date: String,
        end_date: String,
        education: String,
        title: String,
        location: String,
        city: String,
        description: String,
        occupation_kind: String,
    },
    data() {
        return {}
    }
}

</script>

<style lang="scss" scoped>

.exp-edu-container {
    width:fit-content;
}

.exp-edu-row {
    background-color: $secundaire-color-bg;
}

.sub-date {
    color: $grey-highlight;
}

</style>