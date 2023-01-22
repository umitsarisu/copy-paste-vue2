<template>
    <form class="row m-0 contentBgColor lr-white-border bottom-white-border" id="OtherTestVue" style="height: 25vh;" @submit="onSubmit">
        <div class="col-5 p-0 ps-2">
            <div class="d-flex flex-wrap align-content-around justify-content-around">
                <div class="input-group">
                    <label for="errCodeInput" class="textbox-label row w-100">
                        <span class="col-4 p-0">Hata Kodu: </span>
                        <div class="col-3 p-0">
                            <input type="text" id="errCodeInput" class="form-control text-center"
                                autocapitalize="characters" placeholder="Hata" maxlength="4"
                                v-model="sparePartInfo.errorCode" required>
                        </div>
                    </label>
                </div>
                <div class="input-group">
                    <label for="spInput" class="textbox-label row w-100"> <span class="col-4 p-0">Parça Adı:</span>
                        <div class="col-8 p-0">
                            <input type="text" id="spInput" class="form-control" list="spareParts" autocomplete="off"
                                v-model="sparePartInfo.name" @click="sparePartInfo.name = ''"
                                v-on:blur="showSerialInput" v-on:change="findPartNumber" required>
                            <datalist id="spareParts">
                                <option v-for="sparePart in spareParts" :value="sparePart.name"></option>
                            </datalist>
                        </div>
                    </label>
                </div>
                <div class="input-group">
                    <label for="pompTestsInput" class="textbox-label row w-100"> <span class="col-4 p-0">Pompa
                            Testleri:</span>
                        <div class="col-8 p-0">
                            <input type="text" id="pompTestsInput" class="form-control" list="pumpTests"
                                autocomplete="off" v-model="sparePartInfo.selectedTest"
                                @click="sparePartInfo.selectedTest = ''" required>
                            <datalist id="pumpTests">
                                <option v-for="test in pumpTests[0]" :value="test"></option>
                            </datalist>
                        </div>
                    </label>
                </div>
            </div>
        </div>
        <div class="col-5 p-0">
            <div class="input-group d-flex flex-column flex-wrap p-0">
                <label for="damaged">Damaged
                    <input type="radio" name="radio-buttons" id="damaged" value="damaged" required
                        v-model="sparePartInfo.defectCode"></label>
                <label for="missing">Missing
                    <input type="radio" name="radio-buttons" id="missing" value="missing" required
                        v-model="sparePartInfo.defectCode"></label>
                <label for="calibrated">Calibrated
                    <input type="radio" name="radio-buttons" id="calibrated" value="calibrated" required
                        v-model="sparePartInfo.defectCode"></label>
                <label for="defective">Defective
                    <input type="radio" name="radio-buttons" id="defective" value="defective" required
                        v-model="sparePartInfo.defectCode" v-on:change="showSerialInput"></label>
            </div>
        </div>
        <div class="col-2 d-flex flex-column p-0">
            <input type="text" class="btn" :class="btnClass" value="Ekle">
        </div>
    </form>
</template>
<script>

export default {
    data() {
        return {
            btnClass: "btn-danger",
            thePartsHaveSerialNumber: ["Power PWA", "CPU", "Peripheral PWA", "Driver PWA", "App PWA", "Mechanism"],
            needSerial: false,
            spareParts: "",
            pumpTests: "",
            sparePartInfo: {
                id: null,
                name: null,
                test: null,
                partNumber: null,
                errorCode: null,
                defect: null,
                serialNumber: null
            }
        }
    },
    methods: {
        btnAction() {
            this.btnClass = "btn-success";
        },
        sendSparePartInfo() {
            this.sparePartInfo.id = this.sparePartInfo.name;
        },
        findPartNumber() {
            // this.spareParts.forEach(item => {
            //     if (item.name == this.sparePartInfo.selectedPart) {
            //         this.sparePartInfo.selectedPartCode = item.code
            //     }
            // });
        },
        onSubmit(e) {
            e.preventDefault();
            this.btnAction();
            this.sendSparePartInfo();
        },
        showSerialInput() {
            if (this.thePartsHaveSerialNumber.includes(this.sparePartInfo.selectedPart) && this.sparePartInfo.defectCode == "defective") {
                this.needSerial = true;
            }
        },
    },
    
}
</script>
<style scoped>
input[type="submit"] {
    height: 100%;
    border-radius: 0 10px 10px 0;
}



.right-white-border {
    border-right: 1px solid white;
}

.input-group {
    max-width: 400px;
    padding: 5px 0;
}

.top-white-border {
    border-top: 1px solid white;
}

#errorTextInput {
    width: 55px;
}

input[type="text"] {
    height: 35px;
    padding: 4px;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 400;
}

input[type="radio"] {
    margin: 5px;
}

label {
    font-size: 14px;
    line-height: 30px;
}

.textbox-label {
    line-height: 30px;
    font-weight: bold;
}

.row {
    padding: 0;
    margin: 0;
}
</style>