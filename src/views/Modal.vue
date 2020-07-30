<template>
  <div>
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ title }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-card>
        <img :src="avatar">
        <ion-card-header>
          <ion-card-subtitle>{{ user.firstName }}</ion-card-subtitle>
          <ion-card-title>{{ user.lastName }}</ion-card-title>
        </ion-card-header>

        <ion-card-content>
          <p>{{ user.city }}</p>
          <p>{{ user.birthday }}</p>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </div>
</template>

<script lang="ts">

import {
  inject,
  defineComponent,
} from '@vue/composition-api';

import { User } from '@/types/entities';

interface Props {
  title: string;
  avatar: string;
  user: User;
}

export default defineComponent<Props>({
  props: {
    title: {
      type: String,
      default: 'Super Modal',
    },

    avatar: {
      type: String,
      default: 'Super Modal',
    },

    user: {
      type: Object,
      required: true,
    },
  },

  setup() {
    const $filesRoot = inject<string>('$filesRoot');

    return {
      $filesRoot,
    };
  },
});

</script>
