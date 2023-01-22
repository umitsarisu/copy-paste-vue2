<template>
    <div>
        <!-- Header -->
        <LargeContainerVue class="row m-0 justify-content-center lr-white-border" :style="{ height: 17 + 'vh' }">
            <LimitedContainerVue>
                <HeaderVue></HeaderVue>
            </LimitedContainerVue>
        </LargeContainerVue>
        <!-- Modals -->
        <LargeContainerVue class="row m-0 p-0 justify-content-center align-content-center lr-white-border"
            :style="{ height: 10 + 'vh' }">
            <LimitedContainerVue>
                <div class="btn-group" role="group">
                    <button type="button" data-bs-toggle="modal" data-bs-target="#copyPasteModal"
                        @click="setActiveComponent('VisualInspectionVue')"
                        class="btn btn-outline-secondary text-black contentBgColor">Visual
                        Inspection</button>
                    <button type="button" data-bs-toggle="modal" data-bs-target="#copyPasteModal"
                        @click="setActiveComponent('OtherTestsVue')"
                        class="btn btn-outline-secondary text-black contentBgColor">Others</button>
                </div>
                <ModalVue :activeComponent="activeComponent">
                    <components :is="activeComponent"></components>
                </ModalVue>
            </LimitedContainerVue>
        </LargeContainerVue>
        <!-- Pano -->
        <LargeContainerVue class="row m-0 p-2 justify-content-center lr-white-border"
            :style="{ height: 56 + 'vh' }">
            <LimitedContainerVue style="height: 100%;">
                <PanoVue :selectedSpareParts="selectedSpareParts"></PanoVue>
            </LimitedContainerVue>
        </LargeContainerVue>
        <!-- Footer -->
        <LargeContainerVue class="row m-0 p-0 justify-content-center align-content-center lr-white-border"
            :style="{ height: 10 + 'vh' }">
            <FooterVue></FooterVue>
        </LargeContainerVue>
    </div>
</template>
<script>
import LargeContainerVue from './containers/LargeContainer.vue';
import LimitedContainerVue from './containers/LimitedContainer.vue';
import ModalVue from './Sections/Modal.vue'

import HeaderVue from './Header/Header.vue';
import VisualInspectionVue from './Sections/VisualInspection.vue';
import OtherTestsVue from './Sections/OtherTests.vue';
import PanoVue from './Pano/Pano.vue';
import FooterVue from './Footer/Footer.vue';

export default {
    data() {
        return {
            selectedSpareParts: "",
            activeComponent: "VisualInspectionVue",
        }
    },
    components: {
        LargeContainerVue,
        LimitedContainerVue,
        ModalVue,
        HeaderVue,
        VisualInspectionVue,
        OtherTestsVue,
        PanoVue,
        FooterVue,
    },
    methods: {
        setActiveComponent(component) {
            this.activeComponent = component;
        }
    }
}
</script>
<style>
/* Modal Buttons hover color */
.btn-outline-secondary:hover {
    background-color: rgb(229, 132, 41) !important;
}
</style>