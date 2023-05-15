<template>

<div class="container py-5 align-items-center" id="exp-and-edu">

    <div class="row align-items-center">
        <div class="row mx-auto exp-and-edu-container-row">

            <sectionHeader
            :title="'Employment & Education'"
            />

            <div class="row g-4 pb-4 row-cols-1 mx-auto justify-content-center rounded" >
                <span class="fs-3 pb-2 px-5 border-bottom text-center sub-section-header">Employement</span>
            </div>
            <ExpAndEduRow
            v-for="(data, index) in employmentData"
            :key="data.start"

            :start_date="data.start"
            :end_date="data.end"
            :education="data.education"
            :title="data.title"
            :location="data.location"
            :city="data.city"
            :description="data.desc"
            :occupation_kind="data.occupation_kind"
            />

            <div class="row g-4 pb-4 row-cols-1 mx-auto justify-content-center rounded" >
                <span class="fs-3 pb-2 px-5 border-bottom text-center sub-section-header">Internships</span>
            </div>
            <ExpAndEduRow
            v-for="(data, index) in internData"
            :key="data.start"

            :start_date="data.start"
            :end_date="data.end"
            :education="data.education"
            :title="data.title"
            :location="data.location"
            :city="data.city"
            :description="data.desc"
            :occupation_kind="data.occupation_kind"
            />

            <div class="row g-4 pb-4 row-cols-1 mx-auto justify-content-center rounded" >
                <span class="fs-3 pb-2 px-5 border-bottom text-center sub-section-header">Education</span>
            </div>
            <ExpAndEduRow
            v-for="(data, index) in EducationData"
            :key="data.start"

            :start_date="data.start"
            :end_date="data.end"
            :education="data.education"
            :title="data.title"
            :location="data.location"
            :city="data.city"
            :description="data.desc"
            :occupation_kind="data.occupation_kind"
            />

        </div>
    </div>
</div>

</template>

<script>
import ExpAndEduRow from './ExpAndEduRow.vue';
import sectionHeader from '../generalComponents/sectionHeader.vue';

export default {
    components: {
        ExpAndEduRow,
        sectionHeader
    },
    methods: {
        calcMirrored(index) {
            return index % 2
        }
    },
    data() {
        return {
            employmentData: [
            {
                    start: 'Jan 2020',
                    end: 'Jan 2023',
                    education: '',
                    title: 'Jr. Developer',
                    location: 'SimpledCard B.V.',
                    city: 'Amsterdam',
                    desc: 'Handling data requests. \nCreating and maintaining internal processes. \nMaintaining internal applications.'
                },
                {
                    start: 'Nov 2018',
                    end: 'Jul 2019',
                    education: '',
                    title: 'Developer',
                    location: 'Pinto Solutions',
                    city: 'Haarlem',
                    desc: 'Developing and maintaining WordPress websites.'
                }
            ],
            internData: [
            {
                    start: 'Nov 2021',
                    end: 'Apr 2022',
                    education: '',
                    title: 'Jr. Developer Intern',
                    location: 'SimpledCard B.V.',
                    city: 'Amsterdam',
                    desc: 'Developed an internal web application to add additional information to transactional data.'
                },
                {
                    start: 'Aug 2020',
                    end: 'Dec 2020',
                    education: '',
                    title: 'Jr. Developer Intern',
                    location: 'SimpledCard B.V.',
                    city: 'Amsterdam',
                    desc: 'Developed an application for the automated generation, downloading and comparing of reports to get insights in differences and changes'
                },
                {
                    start: 'Nov 2015',
                    end: 'Mar 2016',
                    education: '',
                    title: 'Jr. Developer Intern',
                    location: 'Eve B.V.',
                    city: 'Haarlem',
                    desc: 'Developing and maintaining of webscrapers in Java.'
                }
            ],
            EducationData: [
            {
                    start: 'Aug 2016',
                    end: 'Mar 2023',
                    education: 'Software Engineer Bachelor',
                    title: 'Student',
                    location: 'University of Applied Sciences',
                    city: 'Leiden',
                    desc: ''
                },
                {
                    start: 'Jan 2015',
                    end: 'Jun 2016',
                    education: 'MBO 4 Application Developer',
                    title: 'Student',
                    location: 'Nova college',
                    city: 'Haarlem',
                    desc: ''
                }
            ]
        }
    }
}

</script>

<style lang="scss" scoped>

#exp-and-edu,
.exp-and-edu-container-row {
    height: fit-content !important;
}

.sub-section-header {
    width:fit-content !important;
}

</style>