<script>
</script>

<style type="text/scss">
@import "styles/theme.scss";

a {
  color: $lightest-color;
  font-family: $font-light;
  font-size: 16px;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
}

</style>

<div>
  <a href="#">
    <slot></slot>
  </a>
</div>