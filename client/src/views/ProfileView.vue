<template>
  <main>
    <section>
      <SidebarWidget title="Профиль">
      </SidebarWidget>
      <ContentWrapper>
      </ContentWrapper>
    </section>
  </main>
</template>

<script>
import SidebarWidget from "@/components/SidebarWidget.vue";
import ContentWrapper from "@/components/ContentWrapper.vue";

export default {
  components: {
    SidebarWidget,
    ContentWrapper
  }
}
</script>
