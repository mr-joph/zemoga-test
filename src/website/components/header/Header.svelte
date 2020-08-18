<script>
import RuleOfThumb from "./RuleOFThumbLogo";
import Link from "./Link";
import VoteCard from './VoteCard';
import Icon from "../icons/Icon";

</script>

<header class="">
  <div class="nav-wrapper">
    <nav class="layout-center">
      <div class="logo">
        <RuleOfThumb />
      </div>
      <ul class="nav-links">
        <li>
          <Link path="/past-trials">Past Trials</Link>
        </li>
        <li>
          <Link path="/how-it-works">How It Works</Link>
        <li>
          <Link path="/login">Login/Sign Up</Link>
        </li>
        <li class="search-button">
          <Link><Icon type="search" big /></Link>
        </li>
      </ul>
    </nav>
  </div>

  <div class="vote-wrapper">
    <div class="layout-center">
      <VoteCard />
    </div>
  </div>

  <div class="closing-days">
    <div>Closing In</div>
    <div>22 <span>days</span></div>
  </div>
</header>

<style type="text/scss">
@import "styles/theme.scss";

header {
  align-items: center;
  background-image: url("/assets/pope.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% auto;
  display: flex;
  flex-direction: column;
  height: 740px;
}

.nav-wrapper {
  background-color: rgb(51,51,51); /* fallback */
  width: 100%;

  .logo {
    margin-top: 30px;
  }

  nav {
    display: flex;

  }

  .nav-links {
    display: flex;
    justify-content: flex-end;
    margin-top: 30px;

    li {
      margin: 0 20px;
      padding: 7px 3px;

      &.search-button {
        margin-top: -5px;
      }
    }
  }
}

.vote-wrapper {
  margin-top: 20px;
  width: 100%;
}

.closing-days {
  display: flex;
  height: 50px;
  margin-top: auto;
  width: 100%;

  & > div {
    align-items: center;
    display: flex;
    padding: 0 10px;
  }

  & > div:first-child {
    background-color: transparentize($mid-gray-color, .7); /* fallback */
    background: linear-gradient(270deg, transparentize($mid-gray-color, .7) 0%, transparentize($mid-gray-color, 1) 140%);
    color: $lightest-color;
    font-size: 13px;
    justify-content: flex-end;
    text-align: right;
    text-transform: uppercase;
    width: 40%;
  }

  & > div:nth-child(2) {
    background-color: transparentize($lightest-color, .3);
    color: $dark-graycolor;
    font-size: 36px;
    justify-content: flex-start;
    text-align: left;
    width: 60%;
    
    span {
      display: inline-block;
      font-family: $font-light;
      margin-left: 7px;
    }
  }
}

@media only screen and (max-width: $laptop) {
  header {
    background-size: auto;
  }

}

@media only screen and (max-width: $phone) {
  header {
    height: 1200px;
    background-position: top;
  }

  .nav-wrapper {
    background: linear-gradient(0deg, transparentize($darkest-color, 1) 0%, transparentize($darkest-color, 0) 100%);
  }

  nav {
    align-items: center;
    flex-direction: column;
    height: 130px;
    justify-content: center;
  }

  .vote-wrapper {
    margin-top: auto;
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    align-self: flex-end;

    div {
      margin-top: auto;
    }
  }
}

@media only screen and (min-width: $phone) {
  .nav-wrapper {
    background: linear-gradient(0deg, transparentize($darkest-color, 1) 0%, transparentize($darkest-color, .2) 100%);
  }

  nav {
    height: 100px;
    justify-content: space-between;
  }



}


</style>