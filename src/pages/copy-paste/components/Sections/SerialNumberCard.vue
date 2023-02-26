<template>
    <div class="card" style="width: 18rem;">
        <div class="card-header">
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"
                @click="close"></button>
        </div>
        <div class="card-body">
            <h5 class="card-title">{{ part.name }}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
        </div>
    </div>
</template>
<script>
import { mapMutations } from 'vuex';

export default {
    props: ["part"],
    methods: {
        ...mapMutations([
            "setSerialContentVisible"
        ]),
        close(){
            this.$store.commit("setSerialContentVisible", false)
        }
    }
}
</script>
<style scoped>
.card{
    position: absolute;
    z-index: 3;
    left: 50%;
}
</style>