<template>
  <div>
    <keep-alive>
      <component :is="selectedComponent">
      </component>
    </keep-alive>
  </div>

</template>

<script>
import CopyAppVue from './pages/copy-paste/CopyPaste.vue';
import CurrentCodesVue from './pages/current-codes/CurrentCodes.vue'
export default {
  data: function () {
    return {
      selectedComponent: "CurrentCodesVue"
    }
  },
  components: {
    CopyAppVue,
    CurrentCodesVue
  }
}
</script>

<style>
body::-webkit-scrollbar {
  width: 0 !important
}
</style>
