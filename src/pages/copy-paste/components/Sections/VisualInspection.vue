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
                    <input class="form-control" type="search" v-model="searchText" placeholder="Search"
                        aria-label="Search">
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
            visualSpareParts: "",
            btnClass: "btn-danger",
            partImage: "",
            activeComponent: "",
            selectedParts: [],
            searchText: "",
        }
    },
    components: {
        VisualPartsVue
    },
    methods: {

    },
    computed: {
        ...mapGetters([
            "customerExperience",
            "selectedModel",
            "getVisualSpareParts",
            "getVisualFilteredParts"
        ]),
        filteredSpareParts() {
            const searchText = this.searchText.toLocaleLowerCase('tr')
            return this.getVisualFilteredParts.filter((part) => {
                if (part.name.toLocaleLowerCase('tr').match(searchText) ||
                    part.code.toLocaleLowerCase('tr').match(searchText) ||
                    part.explanation.toLocaleLowerCase('tr').match(searchText)
                ) return part
            })
        }
    },
    watch: {
        selectedModel() {
            //Visual Inspection Spare Parts Adding Here
            const model = this.$store.state.selectedModel
            let filteredParts = this.getVisualSpareParts.filter((part) => {
                if (model.type == part.model)
                    return part;
            })
            if (model.name == "Plum A TR") {
                filteredParts = filteredParts.filter((part) => {
                    if (part.name != "Keypad EN")
                        return part;
                })
            }
            else if (model.name == "Plum A EN") {
                filteredParts = filteredParts.filter((part) => {
                    if (part.name != "Keypad TR")
                        return part;
                })
            }
            this.$store.commit("setVisualFilteredParts", filteredParts)
        }
    }
}
</script>
<style scoped>
input[type="submit"] {
    height: 100%;
    border-radius: 0 10px 10px 0;
}

.dropdown:hover {
    position: absolute;
    z-index: 1;
    height: 300px;
    width: 250px;
}
</style>