<script setup lang="ts">
defineProps<{
  element: string
  ariaLabel: string
  isDisabled: boolean
}>()
</script>
<script lang="ts">
function add(...args: number[]) {
  return args.reduce((a, b) => a + b, 0)
}

// in-source test suites
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it('add', () => {
    expect(add()).toBe(0)
    expect(add(1)).toBe(1)
    expect(add(1, 2, 3)).toBe(6)
  })
}
</script>

<template>
  <component :is="element" :ariaLabel="ariaLabel" :isDisabled="isDisabled">
    <slot></slot>
  </component>
</template>

<style scoped></style>
