<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top shadow">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-center" id="navbarNav" ref="navbarNav">
            <ul class="navbar-nav">

                <li class="nav-item px-4">
                    <a class="nav-link" @click="setActiveMenuItem('home')" :class="{active: activeMenuItem === 'home'}" href="#landing">
                        Home
                    </a>
                </li>

                <li class="nav-item px-4">
                    <a class="nav-link" href="#what-i-do" @click="setActiveMenuItem('what-i-do')" :class="{active: activeMenuItem === 'what-i-do'}">About Me</a>
                </li>

                <li class="nav-item px-4">
                    <a class="nav-link" href="#exp-and-edu" @click="setActiveMenuItem('exp-and-edu')" :class="{active: activeMenuItem === 'exp-and-edu'}">Employement & Education</a>
                </li>

                <li class="nav-item px-4">
                    <a class="nav-link" href="#projects" @click="setActiveMenuItem('projects')" :class="{active: activeMenuItem === 'projects'}">Projects</a>
                </li>

                <li class="nav-item px-4">
                    <a class="nav-link" href="#contact" @click="setActiveMenuItem('contact')" :class="{active: activeMenuItem === 'contact'}">Contact</a>
                </li>

            </ul>
            </div>
        </div>
    </nav>
</template>

<script>

export default {
    data() {
        return {
            activeMenuItem: 'home'
        }
    },
    methods: {
        setActiveMenuItem(menuItem) {
            this.activeMenuItem = menuItem

            let navbarClasses = this.$refs.navbarNav.classList
            if(navbarClasses.contains('show')) {
                navbarClasses.remove('show')
            }
        }
    }
}

</script>

<style lang="scss" scoped>

.navbar {
    background-color: #FAF9F6;
    font-size:1.2em;
}

</style>