<template>
    <form class="contentBgColor lr-white-border bottom-white-border overflow-scroll" id="OtherPartsVue"
        style="height: 100%;">
        <div class="px-2 pt-1">
            <div class="text-center w-100">
                <h4 class="py-1">Other Tests</h4>
                <div class="input-group my-2">
                    <div class="input-group-prepend">
                        <span class="input-group-text">Search</span>
                    </div>
                    <input class="form-control" type="search" v-model="searchText" placeholder="Search" aria-label="Search">
                </div>
                <OtherPartsVue v-for="part in filteredSpareParts" :key="part.code" :part="part">
                </OtherPartsVue>
            </div>
        </div>
    </form>
</template>
<script>
import { mapGetters } from 'vuex';
import OtherPartsVue from "./OtherParts.vue"
export default {
    data() {
        return {
            searchText: "",
            selectedParts: []
        }
    },
    computed: {
        ...mapGetters([
            "getFilteredOtherParts"
        ]),
        filteredSpareParts() {
            const searchText = this.searchText.toLocaleLowerCase('tr')
            return this.getFilteredOtherParts.filter((part) => {
                if (part.name.toLocaleLowerCase('tr').match(searchText) ||
                    part.code.toLocaleLowerCase('tr').match(searchText) ||
                    part.explanation.toLocaleLowerCase('tr').match(searchText)
                ) return part
            })
        },
    },
    components: {
        OtherPartsVue,
    },
    methods: {
        onSubmit(e) {
            e.preventDefault();
        },
    }
}
</script>
<style scoped>
</style>