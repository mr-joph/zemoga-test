<script>
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
  height: 100%;
  width: 50%;
}

.approval{
  background-color: transparentize($primary-color, .3);

}

.disapproval {
  background-color: transparentize($secondary-color, .3);

  .value {
    text-align: right;
  }
}

.value {
  color: $lightest-color;
  cursor: pointer;
  font-family: $font-light;
  font-size: 30px;
  padding: 0 10px;

  span {
    color: $lightest-color;
    font-size: 20px;
  }
}

</style>

<div class="like-bar">
  <div class="bar approval">
    <div class="value">50<span>%</span></div>
  </div>
  
  <div class="bar disapproval">
    <div class="value">50<span>%</span></div>
  </div>

</div>
