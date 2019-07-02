<template>
  <div>
    <div class="d-flex">
      <div
        class=""
        v-for="item in municipalities"
        :key="item.id"
      >
        <div class="card">
          <div class="d-flex justify-around">
            <h1><strong><i>{{item.description}} </i></strong></h1>
            <p>: {{item.label}}</p>
          </div>
          <div class="d-flex justify-around">
            <h1><strong>Status: </strong></h1>
            <p>{{item.status}}</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import axios from "axios";
import Axios from "axios";
import { log } from "util";
import { async } from "q";

var municipalitiesApi =
  "https://register.geonorge.no/api/subregister/sosi-kodelister/kartverket/kommunenummer-alle.json";
export default {
  name: "Municipalities",
  data() {
    return {
      name: "Municipalities",
      municipalities: []
    };
  },
  async mounted() {
    let municipalities = await axios.get(municipalitiesApi);
    console.log(municipalities.data.containeditems);
    let containeditems = municipalities.data.containeditems;
    this.municipalities.push(...containeditems);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
.card {
  //width: 30%;
  border: 1px solid darkblue;
  padding: 5rem;
  background: #fbd1b7;
}
article {
  margin: 1rem;
}
.md-6 {
  flex: 6;
}
</style>
