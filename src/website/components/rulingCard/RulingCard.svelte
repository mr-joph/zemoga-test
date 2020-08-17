<script>
  import LikeBar from "./LikeBar";
  import Button from "../Button";
  export let personaData = {
    name: "",
    description: "",
    careerField: "",
    careerDuration: "",
    picture: ""
  }

</script>

<style type="text/scss">
@import "styles/theme.scss";

figure {
  display: flex;
  flex-direction: column;
  height: 550px;
  margin-bottom: 40px;
  position: relative;
  width: 492px;

  img {
    height: inherit;
    position: absolute;
    width: inherit;
    z-index: $background-layer;
  }

  figcaption {
    bottom: 70px;
    display: flex;
    position: absolute;
  }

}


section.persona-content {
  display: flex;
  flex-direction: column;
  padding: 0 20px 0 10px;


  h4, p, span {
    color: $lightest-color;
  }

  h4 {
    font-size: 45px;
    line-height: 1.0em;
  }

  p {
    font-family: $font-light;
    line-height: 1.2em;
    margin: 16px 0;
  }

  footer {
    display: flex;
    justify-content: space-between;

    .btn-col {
      width: 156px;
    }

    .career-duration {
      div {
        color: $lightest-color;
        font-size: 12px;
        text-align: right;

        &:first-child {
          font-family: $font-bold;
        }

        &:nth-child(2) {
          font-family: $font-regular;
        }

      }

    }
  }
}


.like-winning {
  width: 31px;

  .square {
    display: block;
    height: 31px;
    margin-top: 54px;
    width: 31px;
    &.disapprove {
      background-color: $secondary-color;
    }

    &.approve {
      background-color: $primary-color;
    }
  }
}

</style>

<figure class="ruling-card">
  <img src="../../assets/cristina.jpg" alt="Photo here"/>
  <figcaption>
      <aside class="like-winning">
        <span class="square" class:approve={true}></span>
      </aside>

      <section class="persona-content">
        <h4>{personaData.name}</h4>
        <p>{personaData.description}</p>
        <footer>
          <div class="btn-col">
            <Button light>View Full Report</Button>
          </div> 
          <div class="career-duration">
            <div>{personaData.careerDuration}</div>
            <div>in {personaData.careerField}</div>
          </div>
        </footer>
      </section>

  </figcaption>
  <LikeBar />
</figure>
