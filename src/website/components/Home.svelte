<script type="text/javascript">
import { onMount } from "svelte";

import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import RulingCard from "components/rulingCard/RulingCard";
import SubmitNameForm from "components/submitName/SubmitNameForm";
import Message from "components/message/Message";

let rulings = [];

onMount(async () => {
  try {
    const response = await fetch("/mock-data/previous-rulings.json");
    const payload = await response.json();

    rulings = payload;
  } catch(error) {
    console.error("Error: ", error);
  }
});


</script>

<div>
  <Header />
  <main class="layout-center">
    <Message />
    <h3>Previous Rulings</h3>
    <div class="previous-rulings">

      {#each rulings as celebrity}
        <RulingCard 
          personaData={{
            name: celebrity.name,
            description: celebrity.description,
            duration: celebrity.duration,
            careerField: celebrity.careerField,
            picture: celebrity.picture
          }}
        />
      {:else}
        <p>Loading...</p>
      {/each}

    </div>
    <SubmitNameForm />
    <Footer />
  </main>

</div>

<style type="text/scss">
@import "styles/theme.scss";

main {
  position: relative;
}

h3 {
  font-family: $font-light;
  font-size: 40px;
  margin: 30px 0; 
}

.previous-rulings {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

}

@media only screen and (max-width: $laptop) {
  h3 {
    margin: 30px auto 15px auto;
    width: 492px;
  }

  .previous-rulings {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

</style>