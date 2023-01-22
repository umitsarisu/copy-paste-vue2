<template>
    <input type="submit" form="form1" style="cursor: pointer;" @click.prevent="goToResultPage()"
        value="Sonuç Sayfasına Gitmek İçin Tıklayın ----->">
</template>
<script>
export default {
    props: ["isEveryThingOk"],
    methods: {
        goToResultPage() {
            this.isEveryThingOk ? alert("ok") : alert("Herhangi bir işlem yapmadınız!")
        }
    }
}
</script>
<style scoped>
input {
    width: 100%;
    height: 40px;
    margin: 10px 0;
    padding: 0;
    border: 0;
    background-color: tomato;
    color: white;
    text-align: center;
}
</style>