<template>
  <button class="sidebar_widget-genre-btn text-14">
    <slot></slot>
  </button>
</template>

<style>
.sidebar_widget-genre-btn {
  display: flex;
  align-items: center;
  width: calc(50% - 5px);
  height: 30px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 0 2px 0 rgba(0,0,0,0.15);
  user-select: none;
  cursor: pointer;
}

.sidebar_widget-genre-btn:hover {
  box-shadow: 0 0 8px 0 rgba(0,0,0,0.15);
}

.sidebar_widget-genre-btn:active {
  box-shadow: 0 0 2px 0 rgba(0,0,0,0.15);
}
</style>
