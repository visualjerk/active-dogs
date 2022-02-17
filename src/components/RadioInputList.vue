<template>
  <ion-list>
    <ion-radio-group
      :allow-empty-selection="true"
      :value="modelValue"
      @ionChange="setOption"
    >
      <ion-item v-for="item in list" :key="item.id">
        <ion-radio :value="item.id"> </ion-radio>
        <slot v-bind="item">
          <ion-label>{{ item.name }}</ion-label>
        </slot>
      </ion-item>
    </ion-radio-group>
  </ion-list>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {
  IonRadioGroup,
  IonRadio,
  IonItem,
  IonLabel,
  IonList,
  RadioGroupCustomEvent,
} from '@ionic/vue'

export default defineComponent({
  name: 'RadioInputList',
  components: {
    IonRadioGroup,
    IonRadio,
    IonItem,
    IonLabel,
    IonList,
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    modelValue: {
      type: Number,
      default: null,
    },
  },
  setup(props, { emit }) {
    function setOption(event: RadioGroupCustomEvent<number>) {
      emit('update:model-value', event.detail.value)
    }

    return {
      setOption,
    }
  },
})
</script>
