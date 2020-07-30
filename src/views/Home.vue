<template>
  <!-- Listen to before and after tab change events -->
  <ion-tabs>
    <ion-vue-router />

    <!-- Use v-slot:bottom with Vue ^2.6.0 -->
    <template slot="bottom">
      <ion-tab-bar>
        <ion-tab-button tab="list">
          <ion-icon name="calendar" />
          <ion-label>Schedule</ion-label>
          <ion-badge>6</ion-badge>
        </ion-tab-button>

        <!-- Provide a custom route to navigate to -->
        <ion-tab-button tab="create">
          <ion-icon name="person-add" />
          <ion-label>Speakers</ion-label>
        </ion-tab-button>

        <!-- Provide custom click handler -->
        <ion-tab-button tab="about">
          <ion-icon name="information-circle" />
          <ion-label>About</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </template>
  </ion-tabs>
</template>

<script lang="ts">

import { defineComponent } from '@vue/composition-api';

import {
  calendar,
  personAdd,
  informationCircle,
} from 'ionicons/icons';
import { addIcons } from 'ionicons';

addIcons({
  'ios-information-circle': informationCircle.ios,
  'md-information-circle': informationCircle.md,
  'ios-calendar': calendar.ios,
  'md-calendar': calendar.md,
  'ios-person-add': personAdd.ios,
  'md-person-add': personAdd.md,
});

export default defineComponent({
  setup() {
    return {};
  },
});

</script>
