<template>
  <div>
    <main>
      <h1 class="py-5">Trondheim Municipalities</h1>

      <div class="container">
        <div class="block-autocomplete">
          <input
            id="input"
            type="autocomplete"
            placeholder="Filter..."
          >
          <button>↩</button>
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
.py-5 {
  padding-top: 2rem;
  padding-bottom: 2rem;
}
//Autocomplete

.block-autocomplete {
  position: relative;
  margin: 1rem;
  padding: 1rem;
  left: 0;
  top: 0;
  background-color: white;
  border-radius: 0;
  font-size: 2rem;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  max-width: 100%;

  button {
    background: transparent;
    border: none;
    outline: none;
    font-size: 2rem;
    padding-right: 2rem;
    color: #c1c1c1;
    transition: inherit;
    flex: 0;
    height: 2rem;
    margin-top: auto;
    margin-bottom: auto;
  }

  &::focus-within,
  ::active {
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.16);
  }

  &:focus-within button {
    color: green;
  }

  &:focus-within::before {
    opacity: 1;
  }
}

input[type="autocomplete"] {
  font-size: 2rem;
  border: none;
  outline: none;
  box-sizing: unset;
  background: transparent;
  opacity: 0.999;
  flex: 1;
  width: 100%;
}
</style>
