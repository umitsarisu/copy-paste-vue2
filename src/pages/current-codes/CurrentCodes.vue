<template>
    <div class="row">
        <div class="col-sm-12 col-md-10 m-auto">
            <div class="input-group my-4">
                <div class="input-group-prepend">
                    <span class="input-group-text">Search</span>
                </div>
                <input class="form-control" type="search" v-model="searchText" placeholder="Search" aria-label="Search">
            </div>
            <div class="table-responsive-lg">
                <table class="table table-fixed overflow-auto">
                    <tr>
                        <th colspan="5">
                            <h4 class="ps-3 text-start">Hastaneler</h4>
                        </th>
                    </tr>
                    <tr v-for="(currentCode, i) in filteredCurrentCodes">
                        <th class="text-center">{{ i + 1 }}.</th>
                        <td>
                            <button type="button" @click="copy(currentCode.code)"
                                class="btn btn-outline-primary">Copy</button>
                        </td>
                        <td>{{ currentCode.code }}</td>
                        <td><button type="button" @click="copy(currentCode.name)"
                                class="btn btn-outline-danger">Copy</button></td>
                        <td>{{ currentCode.name }}</td>
                    </tr>
                </table>
            </div>
            <!-- For Copy Function -->
            <div ref="reference"></div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            searchText: ""
        }
    },
    mounted() {
        this.$store.dispatch("getCurrentCodes")
    },
    computed: {
        ...mapGetters([
            "getCurrentCodes"
        ]),
        filteredCurrentCodes() {
            const searchText = this.searchText.toLocaleLowerCase('tr')
            return this.getCurrentCodes.filter((part) => {
                if (part.name.toLocaleLowerCase('tr').match(searchText) ||
                    part.code.toLocaleLowerCase('tr').match(searchText)
                ) return part
            })
        }
    },
    methods: {
        copy(currentCode) {
            const storage = document.createElement('textarea');
            storage.value = currentCode;
            this.$refs.reference.appendChild(storage);
            storage.select();
            storage.setSelectionRange(0, 99999);
            document.execCommand('copy');
            this.$refs.reference.removeChild(storage);
        }
    }
}
</script>
<style scoped>
table {
    background-color: whitesmoke;
}

tr:nth-child(even) {
    background-color: #bdbcbc;
}

td {
    padding: 2px 5px;
}

th,
td:nth-child(even) {
    width: 50px;
}

table tr td:nth-child(3) {
    width: 100px;
    text-align: center;
}

.btn {
    border-top: 0;
    border-bottom: 0;
}
</style>