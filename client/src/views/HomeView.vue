<template>
  <main>
    <section>
      <SidebarWidget title="Жанры">
        <SidebarWidgetGenreBtn v-for="(item, key) in Object.keys(genres)" :key="key">
          {{ genres[item] }}
        </SidebarWidgetGenreBtn>
      </SidebarWidget>
      <ContentWrapper>
      </ContentWrapper>
    </section>
  </main>
</template>

<script>
import SidebarWidget from "@/components/SidebarWidget.vue";
import SidebarWidgetGenreBtn from "@/components/SidebarWidgetGenreBtn.vue";
import ContentWrapper from "@/components/ContentWrapper.vue";

export default {
  components: {
    SidebarWidget,
    SidebarWidgetGenreBtn,
    ContentWrapper
  },
  data() {
    return {
      genres: {
        business: "Бизнес",
        detective: "Детектив",
        health: "Здоровье",
        history: "История",
        classic: "Классика",
        science: "Наука",
        non_fiction: "Нон-фикшн",
        education: "Образование",
        adventure: "Приключение",
        psychology: "Психология",
        self_development: "Саморазвитие",
        technic: "Техника",
        thriller: "Триллер",
        fantastic: "Фантастика",
        fantasy: "Фэнтези",
        philosophy: "Философия",
        hobby: "Хобби",
        humor: "Юмор"
      }
    }
  }
}
</script>
