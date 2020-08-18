<script>
import Icon from "../icons/Icon";
</script>

<style type="text/scss">
@import "styles/theme.scss";

.like-bar {
  display: flex;
  height: 49px;
  margin-top: auto;
  width: 100%;
}

.bar {
  align-items: center;
  display: flex;
  height: 100%;
  width: 50%;
}

.approval{
  background-color: transparentize($primary-color, .3);
  justify-content: flex-start;

}

.disapproval {
  background-color: transparentize($secondary-color, .3);
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

<div class="like-bar">
  <div class="bar approval">
    <div class="vote-btn">
      <div class="value">
        <Icon type="like" big />
        <span>50<span class="percent">%</span></span>
      </div>
    </div>
  </div>
  
  <div class="bar disapproval">
    <div class="vote-btn">
      <div class="value">
        <span>50<span class="percent">%</span></span>
        <Icon type="unlike" big />
      </div>
    </div>
  </div>

</div>
