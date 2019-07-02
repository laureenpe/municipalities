<template>
  <div>
    <main>
      <h1 class="py-5">Trondheim municipalities</h1>
      <p>Here you cand find the Trondheim municipalities, including its <strong>number</strong>, <strong>name</strong>, and when it will/got <strong>retired</strong>/active.
        You can also <strong>filter</strong> by name and for status.
      </p>
      <div class="container">
        <div class="autocomplete d-flex row">
          <div class="flex-6 my-5">
            <input
              v-model="cityName"
              type="autocomplete"
              placeholder="Write the name of the city..."
            >
            <button>↩</button>
          </div>
          <span class="custom-dropdown flex-6 my-5">
            <select v-model="selectedStatus">
              <option
                disabled
                value=""
              >select one</option>
              <option value="valid">valid</option>
              <option value="retired">retired</option>
              <option value="submitted">submitted</option>
              <option value="all">all</option>
            </select>
          </span>
        </div>
      </div>

      <div v-if="items.length == 0">
        <img
          src="../assets/images/loader.svg"
          alt="loader"
        >
      </div>

      <section v-if="items.length > 0">
        <article
          class="flex-element"
          v-for="item in items"
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
      municipalities: [],
      items: [],
      selectedStatus: "",
      cityName: ""
    };
  },
  async mounted() {
    let municipalities = await axios.get(municipalitiesApi);
    let containedItems = municipalities.data.containeditems;
    this.municipalities.push(...containedItems);
    this.items.push(...containedItems);
  },

  watch: {
    selectedStatus(val) {
      if (val != "all") {
        let status = "";
        if (val == "valid") {
          status = "Gyldig";
        } else if (val == "retired") {
          status = "Utgått";
        } else {
          status = "Sendt inn";
        }
        //Filter all items with the norwegian status
        this.items = this.municipalities.filter(function(item) {
          return item.status == status;
        });
      } else {
        this.items = this.municipalities;
      }
    },
    cityName(name) {
      //Filter by name, binded with input
      this.items = this.municipalities.filter(function(item) {
        const description = item.description.toLowerCase();
        return description.includes(name.toLowerCase());
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
h1 {
  font-weight: bold;
}
p {
  font-family: "Open Sans", sans-serif;
  font-size: 1.2rem;
}
.py-5 {
  padding-top: 2rem;
  padding-bottom: 2rem;
}
.my-5 {
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.card {
  background-image: linear-gradient(
      352deg,
      rgba(192, 27, 115, 1.8) 0%,
      rgba(255, 154, 0, -0.8) 100%
    ),
    url("../assets/images/trondheim.jpg");
}
</style>
