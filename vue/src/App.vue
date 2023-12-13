<script lang="ts">
import AtributionComponent from '@/components/AtributionComponent.vue';
import FormComponent from '@/components/form/FormComponent.vue';

export default {
  components: { AtributionComponent, FormComponent }
};
</script>

<template>
  <main
    class="flex flex-col text-white justify-center items-center p-4 text-center desktop2:flex-row desktop2:gap-8"
  >
    <div class="max-w-[28rem] desktop2:text-left">
      <h1 class="text-2xl font-bold desktop2:text-4xl">Learn to code by watching others</h1>

      <h2 class="my-5 text-sm leading-6">
        See how experienced developers solve problems in real-time. Watching scripted tutorials is
        great, but understanding how developers think is invaluable.
      </h2>
    </div>

    <div>
      <h3 class="my-5 bg-blue text-sm p-4 rounded-lg shadow-[0_8px_1px_rgba(0,0,0,.1)]">
        <strong>Try it free 7 days</strong>
        then $20/mo. thereafter
      </h3>

      <form-component />
    </div>
  </main>

  <atribution-component />
</template>
