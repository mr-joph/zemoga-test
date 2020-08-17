<script>
import RuleOfThumb from "./RuleOFThumbLogo";
import Link from "./Link";
</script>

<style type="text/scss">
@import "styles/theme.scss";

header {
  align-items: center;
  background-image: url("./assets/pope.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% auto;
  display: flex;
  flex-direction: column;
  height: 740px;
}

nav {
  background-color: rgb(51,51,51); /* fallback */
  background: linear-gradient(0deg, transparentize($darkest-color, 1) 0%, transparentize($darkest-color, .2) 100%);
  height: 100px;
}

.closing-days {
  display: flex;
  height: 50px;
  margin-top: auto;
  width: 100%;

  & > div:first-child {
    background-color: transparentize($mid-gray-color, .7); /* fallback */
    background: linear-gradient(270deg, transparentize($mid-gray-color, .7) 0%, transparentize($mid-gray-color, 1) 140%);
    color: $lightest-color;
    font-size: 13px;
    width: 40%;
  }

  & > div:nth-child(2) {
    background-color: transparentize($lightest-color, .3);
    color: $dark-graycolor;
    width: 60%;
  }
}
</style>

<header class="row">
  <nav class="row">
    <div class="col-4">
      <RuleOfThumb />
    </div>
    <ul class="col-7">
      <li class="col-3">
        <Link>Past Trials</Link>
      </li>
      <li class="col-3">
        <Link>How It Works</Link>
      <li class="col-3">
        <Link>Login/Sign Up</Link>
      </li>
      <li class="col-3">
        <Link>Search</Link>
      </li>
    </ul>
  </nav>

  <div class="row">card here</div>

  <div class="closing-days">
    <div>Closing</div>
    <div>22 days</div>
  </div>
</header>
