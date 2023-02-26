export const SET_SPARE_PARTS = (state, payload) => {
    state.spareParts.all = payload
    state.spareParts.all.map((part) => {
        if (part.test == "visual inspection") state.spareParts.visual.push(part);
        else if (part.test == "other") state.spareParts.other.push(part);
    })
}
export const SET_PUMP_TESTS = (state, payload) => {
    state.pumpTests = payload;
}
export const SET_CURRENT_CODES = (state, payload) => {
    state.currentCodes = payload;
}
export const setCustomerExperience = (state, payload) => {
    state.customerExperience = payload;
}
export const setSelectedModel = (state, payload) => {
    state.selectedModel = payload
    const model = state.selectedModel;
    // visual inspection parts filter
    let filteredParts = state.spareParts.visual.filter((part) => {
        if (model.type == part.model)
            return part;
    })
    filteredParts = filteredParts.filter((part) => {
        if (model.name == "Plum A TR") {
            if (part.name != "Keypad EN")
                return part;
        }
        else if (model.name == "Plum A EN") {
            if (part.name != "Keypad TR")
                return part;
        }
        else return part;
    })
    state.filtered.visualParts = filteredParts
    // other parts filter
    filteredParts = state.spareParts.other.filter((part) => {
        if (model.type == part.model)
            return part;
    })
    state.filtered.otherParts = filteredParts
}
export const setFilteredVisualParts = (state, payload) => {
    state.filtered.visualParts = payload;
}
export const setFilteredOtherParts = (state, payload) => {
    state.filtered.otherParts = payload;
}

export const setSelectedPartsVisual = (state, payload) => {
    if (state.selected.visualParts.find(e => e.name === payload.name));
    else {
        state.selected.visualParts.push(payload);
    }
}
export const deleteSelectedPartVisual = (state, payload) => {
    const newSelectedPart = state.selected.visualParts.filter(
        part => part.name !== payload.name
    )
    state.filtered.visualParts.map(item => {
        if (item.name == payload.name) {
            return item.activeClass = "bg-light";
        }
    })
    state.selected.visualParts = newSelectedPart;
}
export const setSelectedPartsOther = (state, payload) => {
    if (state.selected.otherParts.find(e => e.name === payload.name));
    else {
        state.selected.otherParts.push(payload);
    }
}
export const deleteSelectedPartOther = (state, payload) => {
    const newSelectedPart = state.selected.otherParts.filter(
        part => part.name !== payload.name
    )
    state.filtered.otherParts.map(item => {
        if (item.name == payload.name) {
            return item.activeClass = "bg-light";
        }
    })
    state.selected.otherParts = newSelectedPart;
}
export const setSerialContentVisible = (state, payload) => {
    state.serialContentVisible = payload
}