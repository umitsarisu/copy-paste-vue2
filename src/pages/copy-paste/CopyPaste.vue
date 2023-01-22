<template>
    <div :class="bgColor">
        <div class="row justify-content-center m-0">
            <LargeContainer
                class="col-12 col-md-11 col-lg-9 col-xl-8 lr-white-border text-center position-relative"
                :class="bgColor">
                <!-- Home page to Result Page -->
                <NavigationVue :activeComponent="activeComponent"></NavigationVue>
            </LargeContainer>
            <LargeContainer class="col-12 col-md-11 col-lg-9 col-xl-8 px-0 shadow-lg">
                <keep-alive>
                    <components :is="activeComponent">
                    </components>
                </keep-alive>
            </LargeContainer>
        </div>
    </div>
</template>
<script>
import NavigationVue from './components/Header/Navigation.vue';
import HomePageVue from './components/HomePage.vue';
import ResultPageVue from './components/ResultPage/ResultPage.vue'
import LargeContainer from './components/containers/LargeContainer.vue';

export default {
    data: function () {
        return {
        }
    },
    components: {
        NavigationVue,
        HomePageVue,
        ResultPageVue,
        LargeContainer
    },
    methods: {
    },
    mounted() {
        this.$store.dispatch("getSpareParts")
        this.$store.dispatch("getPumpTests")
    },
    computed: {
        bgColor() {
            return this.$store.state.selectedModel.class
        },
        activeComponent() {
            return this.$store.state.activeComponent
        }
    }
}
</script>
<style>
.vh-7 {
    height: 7vh;
}

.vh-93 {
    height: 93vh;
}

.contentBgColor {
    background-color: rgba(202, 211, 200, 0.5);
}

.lr-white-border {
    border-left: 1px solid white;
    border-right: 1px solid white;
    border-radius: 10px;
}

.bottom-white-border {
    border-bottom: 1px solid white;
}

input[type="radio"] {
    width: 30px;
    height: 20px;
    margin: 10px 0;
    float: left;
}

input[type="checkbox"] {
    width: 30px;
    height: 20px;
    margin: 10px 0;
}

.checkicon {
    width: 50px;
    padding: 10px;
}

@media screen and (max-width: 768px) {
    html {
        font-size: 15px;
    }
}

@media screen and (min-width: 768px) {
    html {
        font-size: 17px;
    }
}
</style>