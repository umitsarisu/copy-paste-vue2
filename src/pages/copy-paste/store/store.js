import Vue from "vue";
import Vuex from "vuex";
import * as mutations from "./mutations";
import * as getters from "./getters";
import * as actions from "./actions";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        spareParts: [],
        pumpTests: [],
        visualSparePartsAll: [],
        visual122: [],
        visual141: [],
        visualFilteredParts: [],
        selectedPartsVisual: [],
        customerExperience: "",
        selectedModel: { class: "plumTrColor" },
        activeComponent: "HomePageVue"
    },
    mutations,
    getters,
    actions
})