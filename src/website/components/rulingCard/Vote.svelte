<script>
import Icon from "../icons/Icon";
import Button from "../Button";

export let id = "";
export let likes = 0;
export let unlikes = 0;

const VOTE_EVENT_LIKE = "like";
const VOTE_EVENT_UNLIKE = "unlike";

function vote(type, event) {
  console.log("clicked " + type);
}

</script>

<div class="voting">
  <div>
    <button on:click={vote.bind( null, VOTE_EVENT_LIKE)} class="like-btn">
      <Icon type="like" mid />
    </button>
    <button on:click={vote.bind(null, VOTE_EVENT_UNLIKE)} class="unlike-btn">
      <Icon type="unlike" mid />
    </button>
  </div>
  <aside>
    <Button light>Vote Now</Button>
  </aside>
</div>

<style type="text/scss">
@import "styles/theme.scss";

.voting {
  display: flex;
  flex-direction: row;

  div {
    display: flex;
    flex-direction: row;

    button {
      align-items: center;
      display: flex;
      height: 42px;
      justify-content: center;
      width: 42px;
      border: none;
      &.like-btn {
        background-color: $primary-color;
      }

      &.unlike-btn {
        background-color: $secondary-color;
      }

      &.active {
        border: 4px solid $lightest-color;
        box-sizing: content-box;
      }
    }
  }

  aside {
    margin-left: 20px;
  }
}
</style>