<template>
  <div class="home">
    <Municipalities />
  </div>
</template>

<script>
// @ is an alias to /src
import Municipalities from "@/components/Municipalities";

export default {
  name: "home",
  components: {
    Municipalities
  }
};
</script>
