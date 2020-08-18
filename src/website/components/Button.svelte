<script>
  export let big = false;
  export let dark = false;
  export let light = false;
</script>

<style type="text/scss">
@import "styles/theme.scss";

button {
  background: none;
  border: 1px solid;
  cursor: pointer;
  font-size: 14px;
  height: 40px;
  width: 100%;

  &:active {
    transform: translate(0.5px, 0.5px);
  }
}

.big {
  border: 3px solid;
  font-size: 20px;
  height: 54px;
}

.light {
  border-color: $lightest-color;
  color: $lightest-color;
}

.dark {
  border-color: $darkest-color;
  color: $darkest-color; 
}

</style>

<button class:big class:light class:dark={dark && !light} on:click>
  <slot></slot>
</button>

