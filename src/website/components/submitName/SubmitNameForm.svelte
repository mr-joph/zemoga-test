<script>
import Button from "../Button";

</script>
<style type="text/scss">
@import "styles/theme.scss";

section {
  display: flex;
  height: 80px;
  position: relative;
  
  & > .background {
    background-image: url("./assets/submit-name-bg.png");
    height: 100%;
    opacity: 0.3;
    position: absolute;
    width: 100%;
    z-index: -1;
  }

  & > .content {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: space-between;
    padding: 0 30px;
    position: relative;
    width: 100%;
  }
}

p {
  font-family: $font-light;
  font-size: 30px;
}

.btn-col {
  width: 210px;
}
</style>

<section>
  <div class="background"></div>
  <div class="content">
    <p>
      Is there anyone else you would want us to add?
    </p>

    <div class="btn-col">
      <Button dark big>
        Submit a Name
      </Button>
    </div>
  </div>
</section>