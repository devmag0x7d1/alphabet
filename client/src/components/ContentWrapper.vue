<template>
  <div class="content_wrapper">
    <slot></slot>
  </div>
</template>

<style>
.content_wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
}
</style>
