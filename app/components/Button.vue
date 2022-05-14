<template>
    <div>
        <button class="button" role="button"><slot /></button>
    </div>
</template>

<style lang ="scss" scoped>
.button {
    box-sizing: border-box;
    appearance: none;
    background-color: var(--color);
    border-radius: 0.6em;
    cursor: pointer;
    display: flex;
    align-self: center;
    font-size: 1rem;
    line-height: 1;
    margin: 20px;
    padding: 1.2em 2.8em;
    color:#fff;
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;
    font-weight: 700;

    &:hover,
    &:focus {
        outline: 0;
    }
}

.button {
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
  &:hover {
    box-shadow: 0 0 40px 40px var(--color-dark) inset;
  }
}
</style>
