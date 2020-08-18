<script>
import Icon from "../icons/Icon";

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
  margin-top: 50px;
  padding: 20px 0 120px 0;
  position: relative;
  width: 100%;

  & > ul {
    display: flex;
    li {
      margin: 10px;

      &:first-of-type {
        margin-left: 0;
      }

      &:last-of-type {
        margin-right: 0;
      }
    }
  }

  .interactive {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
}

@media only screen and (max-width: $phone) {
  footer {
    align-items: center;
    flex-direction: column;
    justify-content: center;
    font-size: 16px;
  }

  ul {
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
}

</style>

<footer>
  <ul class="legal">
    <li class="interactive">Terms and Conditions</li>
    <li class="interactive">Privacy Policy</li>
    <li class="interactive">Contact Us</li>
  </ul>

  <ul class="social">
    <li>Follow Up</li>
    <li><Icon type="facebook" mid/></li>
    <li><Icon type="twitter" mid/></li>
  </ul>

</footer>
