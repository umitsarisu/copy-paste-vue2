import Vue from "vue";
import Vuex from "vuex";
import * as mutations from "./mutations";
import * as getters from "./getters";
import * as actions from "./actions";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        pumpTests: [],
        spareParts: {
            all: [],
            visual: [],
            other: []
        },
        filtered: {
            visualParts: [],
            otherParts: []
        },
        selected: {
            visualParts: [],
            otherParts: []
        },
        currentCodes: [],
        customerExperience: "",
        selectedModel: { class: "plumTrColor" },
        activeComponent: "HomePageVue",
        serialContentVisible: false
    },
    mutations,
    getters,
    actions
})