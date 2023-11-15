<template>
  <div class="book">
    <h3 class="book-title text-18">
      Властелин Колец. Братство Кольца
    </h3>
    <p class="book-desc text-16">
      Данный текст должен кратко
      описывать книгу в 3 абзаца и после
      за ним и будут идти троеточие
    </p>
    <p class="book-subtext text-14">
      Авторы: <span>Такой то такой то, Был там то там то, Звать никак и никто</span>
    </p>
    <p class="book-subtext text-14">
      Жанры: <span>Фантастика, Психология, Классика, Наука, Техника, Философия</span>
    </p>
    <p class="book-creator text-14">
      Добавил: <span>_NiGMaT_</span>
    </p>
    <div class="book-file">
      <a href="/" target="_blank">
        .pdf
      </a>
    </div>
  </div>
</template>

<style>
.book {
  width: 270px;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.15);
}

.book-title,
.book-desc,
.book-subtext,
.book-creator {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  margin-bottom: 10px;
}

.book-subtext>span,
.book-creator>span {
  color: #888888;
}

.book-title {
  height: 36px;
  -webkit-line-clamp: 2;
}

.book-desc {
  height: 48px;
  -webkit-line-clamp: 3;
}

.book-subtext {
  height: 28px;
  -webkit-line-clamp: 2;
}

.book-creator {
  -webkit-line-clamp: 1;
}

.book-file {
  width: 100%;
  height: 30px;
}

.book-file>a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  box-shadow: inset 0 0 4px 0 rgba(0, 0, 0, 0.15);
}

.book-file>a:hover {
  box-shadow: inset 0 0 8px 0 rgba(0, 0, 0, 0.15);
}

.book-file>a:active {
  box-shadow: inset 0 0 4px 0 rgba(0, 0, 0, 0.15);
}
</style>
