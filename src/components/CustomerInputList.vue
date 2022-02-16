<template>
  <ion-list>
    <ion-item v-for="item in list" :key="item.id">
      <ion-checkbox
        slot="start"
        @update:modelValue="toggleCustomer(item.id)"
        :modelValue="isCustomerChecked(item.id)"
      >
      </ion-checkbox>
      <slot v-bind="item">
        <ion-label>{{ item.dogname }} ({{ item.name }})</ion-label>
      </slot>
    </ion-item>
  </ion-list>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, watch } from 'vue'
import { IonCheckbox, IonItem, IonLabel, IonList } from '@ionic/vue'

export default defineComponent({
  name: 'CustomerInputList',
  components: {
    IonCheckbox,
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
      type: Array,
      required: true,
    },
  },
  setup(props, { emit }) {
    const selectedCustomerIds: Ref<Set<number>> = ref(new Set())

    watch(
      () => props.modelValue,
      () => {
        selectedCustomerIds.value = new Set(props.modelValue as number[])
      },
      {
        immediate: true,
      }
    )

    function isCustomerChecked(id: number) {
      return selectedCustomerIds.value.has(id)
    }

    function toggleCustomer(id: number) {
      if (isCustomerChecked(id)) {
        selectedCustomerIds.value.delete(id)
      } else {
        selectedCustomerIds.value.add(id)
      }
      emit('update:model-value', Array.from(selectedCustomerIds.value))
    }

    return {
      isCustomerChecked,
      toggleCustomer,
    }
  },
})
</script>
