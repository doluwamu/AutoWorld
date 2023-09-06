<template>
  <div
    :class="show ? 'block' : 'hidden'"
    style="width: 50px; height: 2px; background-color: #000; border-radius: 10px"
  ></div>
</template>

<script>
export default {
  name: 'CarBrand',
  props: ['show']
}
</script>
