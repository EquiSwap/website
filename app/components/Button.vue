<template>
    <div>
        <button class="button" role="button">Hello</button>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang ="scss" scoped>

$green: #9bda5d;
$darkGreen: #8bc254;
$red: #e74c3c;
$blue: #3498db;
$yellow: #f1c40f;
$purple: #8e44ad;
$turquoise: #1abc9c;

.button {
    box-sizing: border-box;
    appearance: none;
    background-color: $green;
    border-radius: 0.6em;
    cursor: pointer;
    display: flex;
    align-self: center;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1;
    margin: 20px;
    padding: 1.2em 2.8em;
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;

    &:hover,
    &:focus {
        color: #fff;
        outline: 0;
    }
}

.button {
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
  &:hover {
    box-shadow: 0 0 40px 40px $darkGreen inset;
  }
}

</style>