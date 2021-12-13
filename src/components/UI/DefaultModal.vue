<template>
  <div class="modal" v-if="isActive">
    <div class="modal__body">
      <button
          class="btn btn-primary"
          @click="onClose"
      >
        Close
      </button>
    </div>
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'DefaultModal',
  props: {
    isActive: {
      type: Boolean,
      required: true,
    },
    onClose: {
      type: Function,
      required: true,
    }
  },
  mounted() {
    console.log(this.isActive)
  }

}
</script>

<style scoped>
.modal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, .5);

  display: flex;
  align-items: center;
  justify-content: center;
}

.modal__body {
  background: #fff;
}

</style>