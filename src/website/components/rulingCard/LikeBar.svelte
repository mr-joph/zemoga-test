<script>
import Icon from "../icons/Icon";

export let likes = 0;
export let unlikes = 0;

let totalVotes = likes + unlikes;
let likePercent = totalVotes != 0 ? parseInt(likes / (totalVotes * 0.01)) : 50;
let unlikePercent = totalVotes != 0 ? parseInt(unlikes / (totalVotes * 0.01)) : 50;
</script>

<div class="like-bar">
  <div class="bar">
    <div class="bar-indicator bar-approval" style={`width: ${likePercent}%`}></div>
    <div class="bar-indicator bar-disapproval" style={`width: ${unlikePercent}%`}></div>
  </div>

  <div class="percent-indicator approval">
    
    <div class="vote-btn">
      <div class="value">
        <Icon type="like" big />
        <span>{likePercent}<span class="percent">%</span></span>
      </div>
    </div>
  </div>
  
  <div class="percent-indicator disapproval">
    <div class="vote-btn">
      <div class="value">
        <span>{unlikePercent}<span class="percent">%</span></span>
        <Icon type="unlike" big />
      </div>
    </div>
  </div>

</div>

<style type="text/scss">
@import "styles/theme.scss";

.like-bar {
  display: flex;
  height: 49px;
  margin-top: auto;
  position: relative;
  width: 100%;
}

.percent-indicator {
  align-items: center;
  display: flex;
  height: 100%;
  position: relative;
  width: 50%;
}

.bar {
  align-items: center;
  display: flex;
  height: 100%;
  position: absolute;
  width: 100%;
}

.bar-indicator {
  height: 100%;

  &.bar-approval {
    justify-content: flex-start;
    background-color: transparentize($primary-color, .3);
  }

  &.bar-disapproval {
    justify-content: flex-end;
    background-color: transparentize($secondary-color, .3);
  }
}

.approval {
  justify-content: flex-start;

}

.disapproval {
  justify-content: flex-end;
}

.vote-btn {
  width: 110px;
}

.value {
  align-items: center;
  color: $lightest-color;
  cursor: pointer;
  display: flex;
  flex-wrap: nowrap;
  font-family: $font-light;
  font-size: 30px;
  justify-content: space-between;
  padding: 0 10px;

  span {
    color: $lightest-color;
    &.percent {
      font-size: 20px;
    }
  }
}

</style>
