export const setCustomerExperience = (state, payload) => {
    state.customerExperience = payload;
}
export const SET_SPARE_PARTS = (state, payload) => {
    state.spareParts = payload
    const filteredParts = state.spareParts.filter((part) => {
        return part.test == "visual inspection";
    })
    state.visualSparePartsAll = filteredParts
    const filter122 = state.spareParts.filter(part => {
        return part.viCode == 122;
    })
    state.visual122 = filter122
    const filter141 = state.spareParts.filter(part => {
        return part.viCode == 141;
    })
    state.visual141 = filter141
    const filteredPartsOthers = state.spareParts.filter((part) => {
        return part.test != "visual inspection";
    })
    state.otherSpareParts = filteredPartsOthers;
}
export const SET_PUMP_TESTS = (state, payload) => {
    state.pumpTests = payload;
}
export const setVisualFilteredParts = (state, payload) => {
    state.visualFilteredParts = payload;
}
export const setSelectedPartsVisual = (state, payload) => {
    if (state.selectedPartsVisual.find(e => e.name === payload.name));
    else {
        state.selectedPartsVisual.push(payload);
    }
}
export const deleteSelectedPartVisual = (state, payload) => {
    const newSelectedPart = state.selectedPartsVisual.filter(
        part => part.name !== payload.name
    )
    state.visualFilteredParts.map(item => {
        if (item.name == payload.name) {
            return item.activeClass = "bg-light";
        }
    })
    state.selectedPartsVisual = newSelectedPart;
}