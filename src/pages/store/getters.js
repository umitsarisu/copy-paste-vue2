export const customerExperience = (state) => {
    return state.customerExperience;
}
export const selectedModel = (state) => {
    return state.selectedModel;
}

export const getVisualSpareParts = (state) => {
    return state.spareParts.visual;
}
export const getOtherSpareParts = (state) => {
    return state.spareParts.other;
}

export const getFilteredVisualParts = (state) => {
    return state.filtered.visualParts;
}
export const getFilteredOtherParts = (state) => {
    return state.filtered.otherParts;
}

export const getSelectedPartsVisual = (state) => {
    return state.selected.visualParts;
}
export const getSelectedPartsOther = (state) => {
    return state.selected.otherParts;
}
export const getSerialContentVisible = (state) => {
    return state.serialContentVisible;
}
export const getCurrentCodes = (state) => {
    return state.currentCodes;
}
