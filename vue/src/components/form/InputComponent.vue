<script lang="ts">
export default {
  props: {
    inputValue: String,
    placeholder: { type: String, required: true },
    isValid: { type: Boolean, required: true },
    type: String
  },
  emits: ['update:inputValue'],
  computed: {
    value: {
      get() {
        return this.inputValue?.trim();
      },
      set(value: any) {
        this.$emit('update:inputValue', value);
      }
    }
  }
};
</script>

<template>
  <div class="input-form">
    <input
      :placeholder="placeholder"
      v-model="value"
      :type="type"
      v-if="type === 'password'"
      :class="{ 'input-error': !isValid }"
    />
    <input
      type="text"
      :placeholder="placeholder"
      v-model="value"
      v-else
      :class="{ 'input-error': !isValid }"
    />

    <div v-if="isValid === false" class="self-end">
      <img src="../../assets/icon-error.svg" alt="icon error" class="error-icon" />

      <small v-if="type === 'email'" class="small-error"> Looks like this is not an email </small>
      <small v-else class="small-error"> {{ placeholder }} cannot be empty </small>
    </div>
  </div>
</template>
