import axios from "axios"

export const getSpareParts = ({ commit }) => {
    axios.get("http://localhost:3000/SPARE_PARTS")
        .then(response => {
            commit("SET_SPARE_PARTS", response.data)
        })
}
export const getPumpTests = ({ commit }) => {
    axios.get("http://localhost:3000/PUMP_TESTS")
        .then(response => {
            commit("SET_PUMP_TESTS", response.data)
        })
}
export const getCurrentCodes = ({ commit }) => {
    axios.get("http://localhost:3000/CURRENT_CODES")
        .then(response => {
            commit("SET_CURRENT_CODES", response.data)
        })
}