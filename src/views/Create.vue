<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar>
        <ion-title>Hello World</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-item>
        <ion-label position="floating">
          Фамилия
        </ion-label>
        <ion-input
          :value="state.user.lastName"
          mode="ios"
          @input="state.user.lastName = $event.target.value"
        />
      </ion-item>

      <ion-item>
        <ion-label position="floating">
          Имя
        </ion-label>
        <ion-input
          :value="state.user.firstName"
          mode="ios"
          @input="state.user.firstName = $event.target.value"
        />
      </ion-item>

      <ion-item>
        <ion-label position="floating">
          Город
        </ion-label>
        <ion-input
          :value="state.user.city"
          mode="ios"
          @input="state.user.city = $event.target.value"
        />
      </ion-item>

      <ion-item>
        <input
          v-model="state.user.birthday"
          type="date"
        >
      </ion-item>

      <ion-item>
        <input
          type="file"
          @input="onFileUpload($event.target.files)"
        >
      </ion-item>
    </ion-content>

    <ion-button @click="onSubmit">
      submit
    </ion-button>
  </div>
</template>

<script lang="ts">

import {
  ref,
  reactive,
  defineComponent,
} from '@vue/composition-api';
import { User } from '@/types/entities';
import { useStore } from '../store';
import { MODULES, ACTIONS } from '../store/types';

interface State {
  user: Omit<User, 'id' | 'avatar'>;
  form: FormData;
}

export default defineComponent({
  setup() {
    const store = useStore();

    const state = reactive<State>({
      user: {
        firstName: '',
        lastName: '',
        birthday: '2002-09-23',
        city: '',
      },
      form: new FormData(),
    });

    function onInput(value: any) {
      console.log({ value });
    }

    async function onSubmit(value: MouseEvent) {
      console.log({ value });

      state.form.append('firstName', state.user.firstName);
      state.form.append('lastName', state.user.lastName);
      state.form.append('birthday', state.user.birthday);
      state.form.append('city', state.user.city);

      await store.dispatch({
        type: `${MODULES.Users}/${ACTIONS.Users.create}`,
        form: state.form,
      });

      state.form.delete('firstName');
      state.form.delete('lastName');
      state.form.delete('birthday');
      state.form.delete('city');
    }

    function onFileUpload(files: FileList) {
      const file = files.item(0);
      if (!file) { return; }
      state.form.delete('avatar');
      state.form.append('avatar', file);
    }

    const customPickerOptions = ref({
      buttons: [{
        text: 'Save',
        handler: () => console.log('Clicked Save!'),
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        },
      }],
    });

    return {
      state,
      onInput,
      onSubmit,
      onFileUpload,
      customPickerOptions,
    };
  },
});

</script>
