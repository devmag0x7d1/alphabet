<template>
  <main>
    <section>
      <SidebarWidget title="Поиск">
        <SidebarWidgetSearch />
      </SidebarWidget>
      <ContentWrapper>
      </ContentWrapper>
    </section>
  </main>
</template>

<script>
import SidebarWidget from "@/components/SidebarWidget.vue";
import SidebarWidgetSearch from "@/components/SidebarWidgetSearch.vue";
import ContentWrapper from "@/components/ContentWrapper.vue";

export default {
  components: {
    SidebarWidget,
    SidebarWidgetSearch,
    ContentWrapper
  }
}
</script>
