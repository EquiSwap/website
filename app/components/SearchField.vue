<template>
<div class="grid">
  <form action="https://httpbin.org" method="GET" class="search">
    <div class="search__field">
      <input type="text" class="search__input" id="query" name="query" required>
      <label for="query" class="search__label">Search</label>
    </div>
  </form>
</div>
</template>

<script lang="ts">
export default({
  name: 'SearchField'
})
</script>

<style>
@use postcss-preset-env {
  stage: 0;
}

* {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
}

input {
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  margin: 0;
}

.grid {
  inline-size: 90%;
  max-inline-size: 302px;
}

.search__field {
  position: relative;
}

.search__label {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' /%3E%3C/svg%3E");
  background-repeat: no-repeat;
  color: #6D6D6D;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  transition: left 0.3s, transform 0.3s;
  padding-left: 1.8em;
}

.search__input {
  border: 1px solid #dfdfdf;
  border-radius: 0.3em;
  display: block;
  padding: 0.5em 1.75em;
  width: 100%;
  background-color: #EBEBEB;
}

.search__input:focus + .search__label,
.search__input:valid + .search__label {
  left: 0.5em;
  transform: translate(0, -50%);
}

.search__input:valid + .search__label {
  text-indent: -9999px;
}

</style>