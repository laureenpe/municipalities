<template>
  <div>
    <main>
      <h1 class="py-5">Trondheim Municipalities</h1>

      <div class="container">
        <div class="block-autocomplete">
          <div class="flex-6">
            <input
              id="input"
              type="autocomplete"
              placeholder="Filter..."
            >
            <button>↩</button>
          </div>
          <span class="custom-dropdown">
            <select>
              <option>status</option>
              <option>retired</option>
              <option>All</option>

            </select>
          </span>
        </div>

      </div>

      <section>
        <article
          class="flex-element"
          v-for="item in municipalities"
          :key="item.id"
        >
          <div class="card">
            <div class="card-header">
              <h1>{{item.description}} :</h1>
              <span>{{item.label}}</span>
            </div>
            <div class="card-footer animate">
              <span>Status:</span>
              <span> {{item.status}}</span>
            </div>
          </div>
        </article>
      </section>
    </main>
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
h1 {
  font-weight: bold;
}
.py-5 {
  padding-top: 2rem;
  padding-bottom: 2rem;
}
</style>
