<template>
  <div class="modal" v-if="isActive">
    <div class="modal__body">
      <div class="modal__header">
        <h3 class="modal__title">Title</h3>
        <button class="btn btn-primary" @click="onClose">Close</button>
      </div>

      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "DefaultModal",
  props: {
    isActive: {
      type: Boolean,
      required: true,
    },
    onClose: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style scoped>
.modal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;
}

.modal__body {
  background: #fff;
  min-width: 500px;
  padding: 20px 30px;
}

.modal__header {
  display: flex;
  justify-content: space-between;
}
</style>
