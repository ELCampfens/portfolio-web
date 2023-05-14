<template>


<div class="container py-5 align-items-center" id="projects" style="height:fit-content !important;">

    <div class="row align-items-center">
        <div class="row  mx-auto" style="height: fit-content;">
            
            
            <sectionHeader
            :title="'Projects'"
            :titleUsage="'main'"
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
                    description: `This portfolio website is build as part of my projects. \nIt has been build in VueJS & bootstrap`,
                    projectUrls: [
                        // {
                        //     name: 'github',
                        //     url: '#'
                        // }
                    ],
                    languages: ['HTML', 'CSS'],
                    frameworks: ['VueJS', 'Bootstrap'],
                }
            ]
        }
    }
}

</script>

<style lang="scss">

</style>