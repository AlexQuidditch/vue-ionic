<template>
  <div class="list">
    <ion-header>
      <ion-toolbar>
        <ion-title>Recent Conversations</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-refresher
        slot="fixed"
        @ionRefresh="doRefresh"
      >
        <ion-refresher-content />
      </ion-refresher>

      <ion-list
        inset
        mode="ios"
      >
        <ion-item
          v-for="user in users"
          :key="user.id"
          @click="openProfile(user.id)"
        >
          <ion-avatar slot="start">
            <img :src="[$filesRoot, user.avatar].join('/')">
          </ion-avatar>
          <ion-label>
            <h2>{{ user.lastName }}</h2>
            <h3>{{ user.firstName }}</h3>
            <p>{{ user.city }} {{ user.birthday }}</p>
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </div>
</template>

<script lang="ts">

import {
  inject,
  reactive,
  computed,
  onMounted,
  defineComponent,
} from '@vue/composition-api';

import { useStore } from '@/store';
import { MODULES, ACTIONS } from '@/store/types';

import { UsersProvider } from '@/providers';

import Modal from './Modal.vue';

export default defineComponent({
  components: {
    Modal,
  },

  setup(_props, { root }) {
    const $filesRoot = inject<string>('$filesRoot');

    const store = useStore();

    async function getUsers() {
      await store.dispatch({
        type: `${MODULES.Users}/${ACTIONS.Users.getList}`,
      });
    }

    async function createLoader() {
      const loading = await root.$ionic.loadingController
        .create({
          cssClass: 'my-custom-class',
          message: 'Please wait...',
        });
      return loading;
    }

    async function doRefresh(event: any) {
      await getUsers();
      event.target.complete();
    }

    async function openProfile(id: string) {
      const user = await UsersProvider.getById(id);

      const modal = await root.$ionic.modalController
        .create({
          component: Modal,
          componentProps: {
            propsData: {
              title: user.firstName,
              avatar: [$filesRoot, user.avatar].join('/'),
              user,
            },
          },
        });
      await modal.present();
    }

    const state = reactive({});

    const users = computed(() => store.state.Users.list);

    onMounted(async () => {
      const loading = await createLoader();
      loading.present();
      await getUsers();
      loading.dismiss();
    });

    return {
      $filesRoot,
      state,
      users,
      doRefresh,
      openProfile,
    };
  },
});

</script>

<style lang="scss">

.schedule {}

</style>
