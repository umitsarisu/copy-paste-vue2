<template>
    <form class="contentBgColor lr-white-border bottom-white-border overflow-scroll" id="VisualInspectionVue"
        style="height: 100%;">
        <div class="px-2 pt-1">
            <div class="text-center w-100">
                <h4 class="py-1">Visual Inspection</h4>
                <div class="input-group my-2">
                    <div class="input-group-prepend">
                        <span class="input-group-text">Search</span>
                    </div>
                    <input class="form-control" type="search" v-model="searchText" placeholder="Search" aria-label="Search">
                </div>
                <VisualPartsVue v-for="part in filteredSpareParts" :key="part.code" :part="part"></VisualPartsVue>
            </div>
        </div>
    </form>
</template>
<script>
import { mapGetters } from 'vuex';
import VisualPartsVue from './VisualParts.vue';
export default {
    data() {
        return {
            selectedParts: [],
            searchText: "",
        }
    },
    components: {
        VisualPartsVue
    },
    computed: {
        ...mapGetters([
            "getFilteredVisualParts",
        ]),
        filteredSpareParts() {
            const searchText = this.searchText.toLocaleLowerCase('tr')
            return this.getFilteredVisualParts.filter((part) => {
                if (part.name.toLocaleLowerCase('tr').match(searchText) ||
                    part.code.toLocaleLowerCase('tr').match(searchText) ||
                    part.explanation.toLocaleLowerCase('tr').match(searchText)
                ) return part
            })
        }
    }
}
</script>
<style scoped>
</style>