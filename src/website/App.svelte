<script>
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import RulingCard from "components/rulingCard/RulingCard";
import SubmitNameForm from "components/submitName/SubmitNameForm";

let word = "begin";

</script>

<style type="text/scss">
@import "styles/theme.scss";

main {
  position: relative;
}

.previous-rulings {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

</style>

<div>
  <Header />

  <main class="layout-center">
    Testing our setup!! YAY!
    <div class="previous-rulings">
      <RulingCard 
        personaData={{
          name: "Cristina Fernández de Kirchner",
          description: "Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.",
          careerDuration: "1 month ago",
          careerField: "Politics",
          picture: ""
        }}
      />

            <RulingCard 
        personaData={{
          name: "Cristina Fernández de Kirchner",
          description: "Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.",
          careerDuration: "1 month ago",
          careerField: "Politics",
          picture: ""
        }}
      />

            <RulingCard 
        personaData={{
          name: "Cristina Fernández de Kirchner",
          description: "Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.",
          careerDuration: "1 month ago",
          careerField: "Politics",
          picture: ""
        }}
      />

            <RulingCard 
        personaData={{
          name: "Cristina Fernández de Kirchner",
          description: "Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.",
          careerDuration: "1 month ago",
          careerField: "Politics",
          picture: ""
        }}
      />
    </div>
    <SubmitNameForm />
    <Footer />
  </main>

</div>
