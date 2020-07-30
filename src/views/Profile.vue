<template>
  <div class="list">
    <ion-header>
      <ion-toolbar>
        <ion-title>Профиль</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      {{ id }}
    </ion-content>
  </div>
</template>

<script lang="ts">

import {
  reactive,
  defineComponent,
} from '@vue/composition-api';

export default defineComponent({
  props: {
    id: {
      type: String,
      required: true,
    },
  },

  setup(props, ctx) {
    const state = reactive({});

    return {
      state,
    };
  },
});

</script>

<style lang="scss">

.speakers {}

</style>
