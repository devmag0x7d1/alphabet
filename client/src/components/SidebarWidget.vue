<template>
  <div class="sidebar_widget">
    <div class="sidebar_widget-head">
      <div>
        <h2>
          {{ this.title }}
        </h2>
      </div>
      <div class="sidebar_widget-list">
        <RouterLink :to="{ name: 'Home' }">
          <BookIcon />
        </RouterLink>
        <RouterLink :to="{ name: 'Search' }">
          <SearchIcon />
        </RouterLink>
        <RouterLink :to="{ name: 'Profile' }">
          <ProfileIcon />
        </RouterLink>
      </div>
    </div>
    <div class="sidebar_widget-view">
      <div class="sidebar_widget-wrapp">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import BookIcon from "@/components/icons/BookIcon.vue"
import SearchIcon from "@/components/icons/SearchIcon.vue"
import ProfileIcon from "@/components/icons/ProfileIcon.vue"

export default {
  components: {
    BookIcon,
    SearchIcon,
    ProfileIcon
  },
  props: {
    title: String
  }
}
</script>

<style>
.sidebar_widget {
  min-width: 270px;
  max-width: 270px;
  align-self: flex-start;
}

.sidebar_widget-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: #f0e5da;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.15);
}

.sidebar_widget-list {
  display: flex;
  gap: 5px;
  height: 30px;
}

.sidebar_widget-list>a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: inset 0 0 4px 0 rgba(0, 0, 0, 0.25);
}

.sidebar_widget-list>a:hover {
  box-shadow: inset 0 0 8px 0 rgba(0, 0, 0, 0.25);
}

.sidebar_widget-list>a:active {
  box-shadow: inset 0 0 4px 0 rgba(0, 0, 0, 0.25);
}

.sidebar_widget-list>a.router-link-active {
  position: relative;
}

.sidebar_widget-list>a.router-link-active::before {
  content: "";
  position: absolute;
  top: 33px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  display: block;
  width: 10px;
  height: 10px;
  background-color: #fffaf5;
}

.sidebar_widget-view {
  position: relative;
}

.sidebar_widget-view::after {
  content: "";
  position: relative;
  display: block;
  width: 100%;
  height: 10px;
  background-color: #f0e5da;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.15);
}

.sidebar_widget-wrapp {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
