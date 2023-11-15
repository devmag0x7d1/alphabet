<template>
  <div class="sidebar_widget-search text-14">
    <form>
      <div class="sidebar_widget-search-field">
        <input class="text-14" type="text" name="query" placeholder="Поиск...">
      </div>
      <div class="sidebar_widget-search-submit">
        <button>
          S
        </button>
      </div>
    </form>
  </div>
</template>

<style>
.sidebar_widget-search {
  width: 100%;
  height: 40px;
}

.sidebar_widget-search>form {
  display: flex;
  align-items: center;
  gap: 5px;
  width: 100%;
  height: 100%;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.15);
}

.sidebar_widget-search-field {
  width: 100%;
  height: 30px;
}

.sidebar_widget-search-field>input {
  width: 100%;
  height: 100%;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: inset 0 0 4px 0 rgba(0, 0, 0, 0.25);
}

.sidebar_widget-search-submit {
  max-width: 30px;
  min-width: 30px;
  height: 30px;
}

.sidebar_widget-search-submit>button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: inset 0 0 4px 0 rgba(0, 0, 0, 0.25);
}

.sidebar_widget-search-field>input:hover,
.sidebar_widget-search-field>input:focus,
.sidebar_widget-search-submit>button:hover {
  box-shadow: inset 0 0 8px 0 rgba(0, 0, 0, 0.25);
}

.sidebar_widget-search-submit>button:active {
  box-shadow: inset 0 0 4px 0 rgba(0, 0, 0, 0.25);
}
</style>
