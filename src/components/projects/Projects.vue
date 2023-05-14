<template>


<div class="container py-5 align-items-center" id="projects">

    <div class="row align-items-center">
        <div class="row mx-auto projects-container-row" style="">
            
            
            <sectionHeader
            :title="'Projects'"
            class="pb-5"
            />


                <h3 v-if="!projectData.length">There are currently no projects!</h3>

                <ProjectRow
                    v-if="projectData"
                    v-for="project in projectData"

                    :title="project.title"
                    :description="project.description"
                    :projectUrls="project.projectUrls"
                    :languages="project.languages"
                    :frameworks="project.frameworks"
                />


        </div>
    </div>
</div>
    
</template>

<script>
import ProjectRow from './ProjectRow.vue'
import sectionHeader from '../generalComponents/sectionHeader.vue';

export default {
    components: {
        ProjectRow,
        sectionHeader
    },
    data() {
        return {
            projectData: [
                {
                    title: 'Portfolio website',
                    description: `A portfolio build mainly in VueJS with bootstrap for the layout and styling parts. \nThe website was made to showcase my (future) work and who i am aside from other sources like LinkedIn.`,
                    projectUrls: [ 
                        {
                            icon: 'display',
                            url: 'https://enzocampfens.dev'
                        }
                    ],
                    languages: ['HTML', 'CSS'],
                    frameworks: ['VueJS', 'Bootstrap'],
                }
            ]
        }
    }
}

</script>

<style lang="scss" scoped>

#projects,
.projects-container-row {
    height:fit-content !important;
}

</style>