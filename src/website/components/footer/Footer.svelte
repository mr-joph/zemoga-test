<script>
</script>

<style type="text/scss">
@import "styles/theme.scss";

footer {
  background-image: linear-gradient(to right, $darkest-color 33%, white 0%);
  background-position: top;
  background-size: 3px 1px;
  background-repeat: repeat-x;
  color: $darkest-color;
  display: flex;
  font-family: $font-light;
  font-size: 12px;
  justify-content: space-between;
  position: relative;
  width: 100%;

  & > ul {
    display: flex;
  }

  & > div {
    display: flex;
  }
}

</style>

<footer>
  <ul>
    <li>Terms and Conditions</li>
    <li>Privacy Policy</li>
    <li>Contact Us</li>
  </ul>

  <div>
    <span>
      Follow Up
    </span>
    <ul>
      <li>Facebook icon</li>
      <li>Twitter icon</li>
    </ul>
  </div>

</footer>
