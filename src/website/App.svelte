<script>
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import RulingCard from "components/rulingCard/RulingCard";
import SubmitNameForm from "components/submitName/SubmitNameForm";
import Message from "components/message/Message";

</script>

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

@media only screen and (max-width: 1000px) {
  .previous-rulings {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

</style>

<div>
  <Header />
  <main class="layout-center">
    <Message />
    <h3>Previous Rulings</h3>
    <div class="previous-rulings">
      <RulingCard 
        personaData={{
          name: "Cristina Fernández de Kirchner",
          description: "Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.",
          careerDuration: "1 month ago",
          careerField: "Politics",
          picture: "kanye.jpg"
        }}
      />

            <RulingCard 
        personaData={{
          name: "Cristina Fernández de Kirchner",
          description: "Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.",
          careerDuration: "1 month ago",
          careerField: "Politics",
          picture: "mark.jpg"
        }}
      />

            <RulingCard 
        personaData={{
          name: "Cristina Fernández de Kirchner",
          description: "Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.",
          careerDuration: "1 month ago",
          careerField: "Politics",
          picture: "cristina.jpg"
        }}
      />

            <RulingCard 
        personaData={{
          name: "Cristina Fernández de Kirchner",
          description: "Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.",
          careerDuration: "1 month ago",
          careerField: "Politics",
          picture: "malala.jpg"
        }}
      />
    </div>
    <SubmitNameForm />
    <Footer />
  </main>

</div>
