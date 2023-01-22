<template>
    <div :class="bgColor">
        <button v-show="!isHome" @click="goTo('home')" class="nav-btn" id="backwardButton">
            <img src="../../assets/backward.png" class="nav-img">
            <span>ANA SAYFA</span>
        </button>
        <h2>KOPYALA-YAPIŞTIR</h2>
        <button v-show="isHome" @click="goTo('result')" class="nav-btn" id="forwardButton">
            <span>SONUÇ</span>
            <img src="../../assets/forward.png" class="nav-img">
        </button>
    </div>
</template>
<script>
export default {
    data: function () {
        return {
            isHome: true,
        }
    },
    methods: {
        goTo(where) {
            if (where == "home") {
                this.isHome = true;
                this.$store.state.activeComponent = "HomePageVue"
            }
            else if (where == "result") {
                this.isHome = false
                this.$store.state.activeComponent = "ResultPageVue"
            }
        }
    },
    computed: {
        bgColor() {
            return this.$store.state.bgColor
        }
    },
}
</script>
<style scoped>
.nav-btn {
    background-color: transparent;
    height: 100%;
    padding: 3px;
    border: 2px solid transparent;
    border-radius: 10px;
    box-sizing: border-box;
}

.nav-btn:hover {
    background-color: rgba(128, 128, 128, 0.5);
}

.nav-btn:active {
    border: 2px coral solid;
}

#backwardButton {
    position: absolute;
    top: 0;
    left: 0;
}

#forwardButton {
    position: absolute;
    top: 0;
    right: 0;
}

.nav-img {
    width: 5vh;
    padding: 0;
    cursor: pointer;
}

h2 {
    display: inline-block;
    font-size: 1.6rem;
    line-height: 7vh;
    margin: 0;
    text-shadow: 2px 2px 5px white;
}

span {
    line-height: 40px;
    font-size: 15px;
    font-weight: bold;
    color: #212529;
    text-shadow: 0.5px 0.5px 5px rgba(196, 115, 115, 0.774);
}

</style>