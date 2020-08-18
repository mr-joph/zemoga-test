<style type="text/scss">
@import "styles/theme.scss";

.vote-card {
  height: 491px;
  width: 495px;
}

.content {
  backdrop-filter: blur(30px);
  background-color: transparentize($darkest-color, .7);
  height: 370px;
  padding: 30px 25px 0px 20px;
}

span {
  color: $lightest-color;
}

h3.title {
  color: $lightest-color;
  margin-bottom: 35px;
  margin-top: 10px;
  span {
    display: block;

    &.small {
      font-family: $font-light;
      font-size: 16px; 
    }

    &.highlight {
      font-size: 60px;
    }
  }
}

.news {
  color: $lightest-color;
  font-family: $font-light;
  font-size: 21px;
  line-height: 1.2em;
  margin: 20px 0;
  padding-right: 20px;
}

.more-info {
  color: $lightest-color;
  font-family: $font-light;
  font-size: 14px;
  margin-bottom: 50px;
  
  span {
    text-decoration: underline;
  }
}

.verdict {
  color: $lightest-color;
  font-family: $font-bold;
  font-size: 20px;
}

.vote-thumbs {
  display: flex;
  width: 100%;

  div {
    height: 82px;
    cursor: pointer;
    width: 50%;

    &.approve {
      background-color: $primary-color;
    }
    
    &.disapprove {
      background-color: $secondary-color;
    }
  }
}

</style>

<div class="vote-card">
  <div class="content">
    <h3 class="title">
      <span class="small">What’s your opinion on</span>
      <span class="highlight">Pope Francis?</span>
    </h3>

    <p class="news">
      He’s talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up) 
    </p>

    <p class="more-info">
      <span>W</span> <span> More information</span>
    </p>

    <p class="verdict">What’s Your Verdict?</p>
  </div>

  <div class="vote-thumbs">
    <div class="approve"></div>
    <div class="disapprove"></div>
  </div>
</div>
