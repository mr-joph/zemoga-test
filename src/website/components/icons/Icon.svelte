<script>

export let type = "";
export let small = false;
export let mid = false;
export let big = false;
export let extra = false;
</script>

<style type="text/scss">

i {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: inline-block;

  &.small {
    height: 16px;
    width: 16px;
  }

  &.mid {
    height: 24px;
    width: 24px;
  }

  &.big {
    height: 32px;
    width: 32px;
  }
  
  &.extra {
    height: 45px;
    width: 45px;
  }
}

.facebook {
  background-image: url("./assets/facebook-icon.svg");
}

.close {
  background-image: url("./assets/close-icon.svg");
}

.like {
  background-image: url("./assets/like-icon.svg");
}

.unlike {
  background-image: url("./assets/like-icon.svg");
  transform: rotate(180deg);
}

.search {
  background-image: url("./assets/search-icon.svg");
}

.twitter {
  background-image: url("./assets/twitter-icon.svg");
}

.wikipedia {
  background-image: url("./assets/wikipedia-icon.svg");
}

</style>

<i
  class={`${type}`}
  class:small={small}
  class:mid={mid}
  class:big={big}
  class:extra={extra}
></i>