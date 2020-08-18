<script>
  import LikeBar from "./LikeBar";
  import Vote from "./Vote";
  import Button from "../Button";
  import Icon from "../icons/Icon";

  export let personaData = {
    name: "",
    description: "",
    careerField: "",
    duration: "",
    picture: "",
    likes: 0,
    unlikes: 0,
  };

</script>

<figure class="ruling-card">
  <img src={`${personaData.picture}`} alt="Photo here"/>
  <figcaption>
      <aside class="like-winning">
        <span class="square" class:approve={true}>
          <Icon type="like" small/>
        </span>
      </aside>

      <section class="persona-content">
        <h4>{personaData.name}</h4>
        <p>{personaData.description}</p>
        <footer>
          <div class="btn-col">
            <!-- <Button light>View Full Report</Button> -->
            <Vote />
          </div> 
          <div class="career-duration">
            <div>{personaData.duration}</div>
            <div>in {personaData.careerField}</div>
          </div>
        </footer>
      </section>

  </figcaption>
  <LikeBar likes={personaData.likes} unlikes={personaData.unlikes}/>
</figure>

<style type="text/scss">
@import "styles/theme.scss";

figure {
  background: linear-gradient(180deg, transparentize($darkest-color, 1) 30%, transparentize($darkest-color, .2) 100%);
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
    align-items: flex-end;
    display: flex;
    flex-grow: 1;
    padding-bottom: 30px;
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
      width: 300px;
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
  height: 145px;
  width: 31px;

  .square {
    align-items: center;
    display: flex;
    height: 31px;
    justify-content: center;
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
