<script>
import Icon from "../icons/Icon";
</script>

<style type="text/scss">
@import "styles/theme.scss";

.message {
  align-items: center;
  background-color: $light-gray-color;
  border-radius: 2px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 40px;
  padding: 20px 0;
  width: 100%;
}

.title {
  text-align: center;
  width: 200px;

  span {
    display: block;

    &:first-child {
      font-family: $font-light;
      font-size: 21px;
    }

    &:nth-child(2) {
      font-family: $font-bold;
      font-size: 37px;
      line-height: 1em;
    }
  }
}

.content {
  display: flex;
  font-family: $font-light;
  font-size: 15px;
  max-width: 700px;
  margin-left: 20px;  
}

.close-btn {
  margin-left: 15px;
}

</style>

<div class="message">
  <div class="title">
    <span>Speak out. Be heard.</span>
    <span>Be counted</span>
  </div>

  <div class="content">
    Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It’s easy: You share your opinion, we analyze and put the data in a public report.
  </div>

  <div class="close-btn">
    <Icon type="close" big/>
  </div>
</div>