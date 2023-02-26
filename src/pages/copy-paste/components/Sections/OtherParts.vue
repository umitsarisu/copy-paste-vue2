<template>
    <div :class="part.activeClass" @click="selectPart(part)" class="partStyle btn m-0 p-0 d-flex">
        <div>
            <img :src="findImage(part)" :alt="part.alt">
        </div>
        <div class="d-flex align-self-center">
            <span style="width: 180px;"><b>{{ part.name }}</b></span>
            <span style="min-width: 100px;"><i>{{ part.code }}</i></span>
            <span style="width: 50px;">{{ part.viCode }}</span>
            <span class="d-none d-lg-block" style="border: none;">{{ "(" + part.explanation + ")" }}</span>
        </div>
        <SerialNumberCardVue v-if="serialContentVisible" :part="part"></SerialNumberCardVue>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex';
import SerialNumberCardVue from "./SerialNumberCard.vue"

export default {
    data() {
        return {
            activeClass: "bg-light"
        }
    },
    props: ["part"],
    components: {
        SerialNumberCardVue
    },
    computed:{
        ...mapGetters([
            "getSerialContentVisible"
        ]),
        serialContentVisible(){
            return this.getSerialContentVisible
        }
    },
    methods: {
        ...mapMutations([
            "setSelectedPartsOther",
            "deleteSelectedPartOther",
            "setSerialContentVisible"
        ]),
        findImage(part) {
            return require("../../assets/imagesYdk/" + part.code + ".jpg")
        },
        selectPart(part) {
            if (part.activeClass == "bg-light") {
                part.activeClass = "bg-success";
                this.$store.commit("setSelectedPartsOther", part)
            }
            else {
                part.activeClass = "bg-light";
                this.$store.commit("deleteSelectedPartOther", part)
            }
            this.$store.commit("setSerialContentVisible", true)
        }
    }
}
</script>
<style scoped>
.partStyle {
    width: 100%;
    border: 1px solid saddlebrown;
    border-radius: 20px;
    text-align: start;
}

.partStyle img {
    width: 75px;
    height: 75px;
    border-radius: 20px 0 0 20px;
}
span{
    border-right: 1px solid #aaa;
    padding: 0 10px;
}
</style>