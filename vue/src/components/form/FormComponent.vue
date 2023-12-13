<script lang="ts">
import InputComponent from './InputComponent.vue';

export default {
  components: { InputComponent },
  data() {
    return {
      firstName: ' ' as string,
      firstNameValid: true as boolean,

      lastName: ' ' as string,
      lastNameValid: true as boolean,

      email: ' ' as string,
      emailValid: true as boolean,

      password: ' ' as string,
      passwordValid: true as boolean
    };
  },
  methods: {
    handleSubmit() {
      this.firstNameValid = this.firstName.trim() !== '';

      this.lastNameValid = this.lastName.trim() !== '';

      this.emailValid = this.email.endsWith('@gmail.com') || this.email.endsWith('@hotmail.com');

      this.passwordValid = this.password.trim() !== '';
    }
  }
};
</script>

<template>
  <form
    @submit.prevent="handleSubmit"
    class="flex flex-col p-4 bg-white gap-4 rounded-lg shadow-[0_8px_1px_rgba(0,0,0,.1)]"
  >
    <input-component
      :placeholder="'First Name'"
      :is-valid="firstNameValid"
      v-model:inputValue="firstName"
    />

    <input-component
      :placeholder="'Last Name'"
      :is-valid="lastNameValid"
      v-model:inputValue="lastName"
    />

    <input-component
      :placeholder="'Email Address'"
      :is-valid="emailValid"
      :type="email"
      v-model:inputValue="email"
    />

    <input-component
      :placeholder="'Password'"
      :is-valid="passwordValid"
      :type="'password'"
      v-model:inputValue="password"
    />

    <!-- <div class="input-form">
      <input type="text" id="first-name" placeholder="First Name" v-model="firstName" />
      <img
        src="../../assets/icon-error.svg"
        alt="icon error"
        v-if="!firstNameValid"
        class="error-icon"
      />
      <small v-if="!firstNameValid" class="small-error">First name cannot be empty</small>
    </div> -->

    <!-- <div class="input-form">
      <input type="text" id="last-name" placeholder="Last Name" v-model="lastName" />
      <img src="./images/icon-error.svg" alt="icon error" class="hidden" />
      <small class="hidden">Last name cannot be empty</small>
    </div>

    <div class="input-form">
      <input type="text" id="e-mail" placeholder="Email Address" v-model="email" />
      <img src="./images/icon-error.svg" alt="icon error" class="hidden" />
      <small class="hidden">Looks like this is not an email</small>
    </div>

    <div class="input-form">
      <input type="password" id="password" placeholder="Password" v-model="password" />
      <img src="./images/icon-error.svg" alt="icon error" class="hidden" />
      <small class="hidden">Password cannot be empty</small>
    </div> -->

    <button
      type="submit"
      id="button-submit"
      class="h-full bg-green text-sm p-4 rounded-md uppercase shadow-[inset_0_-4px_1px_rgba(0,0,0,.1)] hover:brightness-110"
    >
      Claim your free trial
    </button>

    <small class="text-grayishBlue text-xs">
      By clicking the button, you are agreeing to our
      <strong class="text-red">Terms and Services</strong>
    </small>
  </form>
</template>
