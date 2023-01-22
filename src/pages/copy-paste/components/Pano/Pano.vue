<template>
    <div class="pano position-relative p-1">
        <p class="text-center position-sticky panoText">PANO</p>
        <table class="position-absolute top-0 mt-2 table table-bordered align-middle">
            <thead>
                <tr>
                    <th>Part Name</th>
                    <th>Part Number</th>
                    <th>Error Code</th>
                    <th>Defect</th>
                    <th>Serial Number</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="part in getSelectedPartsVisual">
                    <td>{{ part.name }}</td>
                    <td>{{ part.code }}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td class="text-center py-1"><input type="button"
                            @click="$store.commit('deleteSelectedPartVisual', part)"
                            class="btn btn-danger btn-close"></td>
                </tr>
                <tr v-for="part in sparePartsList">
                    <td class="d-flex flex-column">
                        <span>
                            {{ part.name }}
                        </span>
                        <span>
                            {{ part.partNumber }}
                        </span>
                    </td>
                    <td>{{ part.test }}</td>
                    <td>{{ part.errorCode }}</td>
                    <td>{{ part.defect }}</td>
                    <td>{{ part.serialNumber }}</td>
                    <td><button class="btn btn-danger ">Delete</button></td>
                </tr>
                <tr v-for="part in spareParts">
                    <td> {{ part.name }}</td>
                    <td> {{ part.code }}</td>
                    <td> {{ part.model }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
    data() {
        return {
            sparePartsList: [],
            spareParts: []
        }
    },
    computed: {
        ...mapGetters([
            "getSelectedPartsVisual"
        ])
    },
    methods: {
        ...mapMutations([
            "deleteSelectedPartVisual"
        ])
    }
}
</script>
<style>
.pano {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    background-color: white;
}

.panoText {
    top: 15%;
    z-index: 0;
    font-size: 80px;
    font-weight: bold;
    color: #99999940;
}

table {
    width: 99% !important;
}

td,
th {
    padding: 1px 5px !important;
}

.btn-close {
    width: 30px;
    height: 20px;
}
</style>