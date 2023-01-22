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
export default {
  data: function () {
    return {
      selectedComponent: "CopyAppVue"
    }
  },
  components: {
    CopyAppVue,
  }
}
</script>

<style>
body::-webkit-scrollbar {
  width: 0 !important
}
</style>
