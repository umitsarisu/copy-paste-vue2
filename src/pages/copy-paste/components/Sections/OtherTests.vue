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
                    <input class="form-control" type="search" v-model="searchText" placeholder="Search"
                        aria-label="Search">
                </div>
                <OtherPartsVue v-for="part in filteredSpareParts" :key="part.code" :part="part"></OtherPartsVue>
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
        }
    },
    computed: {
        ...mapGetters([
            "getOtherSpareParts",
        ]),
        filteredSpareParts() {
            const searchText = this.searchText.toLocaleLowerCase('tr')
            return this.getOtherSpareParts.filter((part) => {
                if (part.name.toLocaleLowerCase('tr').match(searchText) ||
                    part.code.toLocaleLowerCase('tr').match(searchText) ||
                    part.explanation.toLocaleLowerCase('tr').match(searchText)
                ) return part
            })
        }
    },
    components: {
        OtherPartsVue
    },
    methods: {
        btnAction() {
            this.btnClass = "btn-success";
        },
        sendSparePartInfo() {
            this.sparePartInfo.id = this.sparePartInfo.name;
        },
        findPartNumber() {
            // this.spareParts.forEach(item => {
            //     if (item.name == this.sparePartInfo.selectedPart) {
            //         this.sparePartInfo.selectedPartCode = item.code
            //     }
            // });
        },
        onSubmit(e) {
            e.preventDefault();
            this.btnAction();
            this.sendSparePartInfo();
        },
        showSerialInput() {
            if (this.thePartsHaveSerialNumber.includes(this.sparePartInfo.selectedPart) && this.sparePartInfo.defectCode == "defective") {
                this.needSerial = true;
            }
        },
    },

}
</script>
<style scoped>
input[type="submit"] {
    height: 100%;
    border-radius: 0 10px 10px 0;
}



.right-white-border {
    border-right: 1px solid white;
}

.input-group {
    max-width: 400px;
    padding: 5px 0;
}

.top-white-border {
    border-top: 1px solid white;
}

#errorTextInput {
    width: 55px;
}

input[type="text"] {
    height: 35px;
    padding: 4px;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 400;
}

input[type="radio"] {
    margin: 5px;
}

label {
    font-size: 14px;
    line-height: 30px;
}

.textbox-label {
    line-height: 30px;
    font-weight: bold;
}

.row {
    padding: 0;
    margin: 0;
}
</style>