<template>
    <div class="modal fade m-0" id="copyPasteModal" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="copyPasteModal" aria-hidden="true">
        <div class="modal-dialog modal-xl modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel" v-if="activeComponent == 'VisualInspectionVue'">Visual Inspection</h5>
                    <h5 class="modal-title" id="staticBackdropLabel" v-if="activeComponent == 'OtherTestsVue'">
                        Others</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body modal-xl" style="height: 70vh;">
                    <slot></slot>
                </div>
                <div class="modal-footer" v-if="activeComponent != 'VisualInspectionVue'">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <input type="submit" class="btn btn-danger" form="OtherTestVue" @click.prevent="submit"
                        value="Ekle">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ["activeComponent"],
    methods:{
        submit() {
            alert(this.sparePartInfo)
        }
    }
}
</script>
<style>

</style>