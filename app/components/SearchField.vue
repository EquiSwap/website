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
  font-weight: 500;
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
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAQAAAC1QeVaAAAAxElEQVR4AXXPIUuDcRDA4Zv4AUSwTLEKVoNlySyCYLO98CCsahGrX0AW/QhmBRHEJghLS4JFBBXDgrJi2In78w8v4v3S8XDh4nd0DTxLEzd2RC2EnrH07trQVDrXqbhs7FvfnBDWDKWTigOpL2oWvZpYKPjio1zVHEt7BdOtaLUtHRX8MmqjRjooeCVttPBOWi+4JT1aLaDjVLpU/5ytn840Dj1IaWSpYmi8yVlTF54qh9K8nn27usJK5fC3yvfhPx7a/AE9dYwDEfKrlAAAAABJRU5ErkJggg==);
  background-position-y: 50%;
  background-repeat: no-repeat;
  color: #6D6D6D;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  transition: left 0.3s, transform 0.3s;
  padding-left: 1.25em;
}

.search__input {
  border: 1px solid #dfdfdf;
  border-radius: 0.25em;
  display: block;
  padding: 0.5em 1.75em;
  width: 100%;
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