<script>
import page from "page";

import Home from "components/Home";
import Trials from "components/Trials";
import HowWorks from "components/HowWorks";
import Login from "components/Login";

let currentPage = Home;

page("", () => (currentPage = Home ));
page("/past-trials", () => (currentPage = Trials));
page("/how-it-works", () => (currentPage = HowWorks));
page("/login", () => (currentPage = Login));

page.start();
</script>

<style type="text/scss">
@import "styles/theme.scss";
</style>

<svelte:component this={currentPage} />
