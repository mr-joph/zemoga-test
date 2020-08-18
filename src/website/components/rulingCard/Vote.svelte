<script>
import { createEventDispatcher } from 'svelte';

import {
  VOTE_EVENT_LIKE,
  VOTE_EVENT_UNLIKE
} from "./constants";
import Icon from "../icons/Icon";
import Button from "../Button";

export let id = "";
export let likes = 0;
export let unlikes = 0;

const dispatch = createEventDispatcher();


let selectLike = false;
let selectUnlike = false;
let voted = false;

function selectOption(type, event) {
  console.log("clicked " + type);

  switch(type) {
    case VOTE_EVENT_LIKE:
      //likes++;
      selectLike = true;
      selectUnlike = false;
      break;
    case VOTE_EVENT_UNLIKE:
      //unlikes++;
      selectLike = false;
      selectUnlike = true;
      break;
  }
}

function vote() {

  if(selectLike) {
    likes++
    selectLike = false
    voted = true;

    dispatch("updateVotes", {value: likes, type: VOTE_EVENT_LIKE});
  } else if(selectUnlike) {
    unlikes++;
    selectUnlike = false;
    voted = true;

    dispatch("updateVotes", {value: unlikes, type: VOTE_EVENT_UNLIKE});
  }

}

function activeVote() {
  voted = false;
}

</script>

<div class="voting">
  {#if !voted}
    <div>
      <button
        on:click={selectOption.bind( null, VOTE_EVENT_LIKE)}
        class="like-btn"
        class:active={selectLike}>
        <Icon type="like" mid />
      </button>
      <button
        on:click={selectOption.bind(null, VOTE_EVENT_UNLIKE)}
        class="unlike-btn"
        class:active={selectUnlike}>
        <Icon type="unlike" mid />
      </button>
    </div>

    {#if selectLike || selectUnlike}
      <aside>
        <Button light on:click={vote}>Vote Now</Button>
      </aside>
    {/if}

  {:else}
    <div>
      <div class="thanks-reply">Thank you for voting!</div>
      <Button light on:click={activeVote}>Vote Again</Button>
    </div>
  {/if}
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
      border: none;
      border-color: $lightest-color;
      display: flex;
      height: 42px;
      justify-content: center;
      transition: all 0.2s ease-out;
      width: 42px;

      &.like-btn {
        background-color: $primary-color;
      }

      &.unlike-btn {
        background-color: $secondary-color;
      }

      &.active {
        border: 4px solid $lightest-color;
      }
    }
  }

  aside {
    margin-left: 20px;
  }

  .thanks-reply {
    color: $lightest-color;
  }
}
</style>