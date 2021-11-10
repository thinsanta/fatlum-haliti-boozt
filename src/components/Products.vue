<template>
  <div>
    <div class="px-4 pt-5 my-5 text-center border-bottom">
      <h1 class="display-4 fw-bold">Centered screenshot</h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">
          Quickly design and customize responsive mobile-first sites with
          Bootstrap, the world’s most popular front-end open source toolkit,
          featuring Sass variables and mixins, responsive grid system, extensive
          prebuilt components, and powerful JavaScript plugins.
        </p>
        <div
          class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5"
        ></div>
      </div>
      <div class="overflow-hidden" style="max-height: 30vh">
        <div class="container px-5">
          <img
            src="../assets/fashion.png"
            class="img-fluid border rounded-3 shadow-lg mb-4"
            alt="Example image"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
      </div>
    </div>

    <div id="background">
      <button
        v-if="isAsc"
        type="button"
        class="btn btn-primary"
        @click="sortByasc('asc'), (isAsc = !isAsc)"
        v-bind:class="{ active: isAsc }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-arrow-down"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
          ></path>
        </svg>
        Sort
      </button>

      <button
        v-if="!isAsc"
        type="button"
        class="btn btn-primary"
        @click="sortByasc('asc'), (isAsc = !isAsc)"
        v-bind:class="{ active: isAsc }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-arrow-up"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
          ></path>
        </svg>
        Sort
      </button>

      <div class="album py-5 bg-light">
        <div class="container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div class="col" v-for="p in products" :key="p.id">
              <router-link
                :to="{ name: 'ProductDetail', params: { id: p.id } }"
              >
                <div class="card shadow-sm">
                  <img
                    class="bd-placeholder-img card-img-top"
                    v-bind:src="p.filename"
                    alt=""
                  />
                  <div class="card-body">
                    <p class="card-text brand-name" id="inbox-title">
                      {{ p.brand_name }}
                    </p>
                     <p class="card-text" id="inbox-title">
                      {{ p.product_name }}
                    </p>
                    <div
                      class="d-flex justify-content-between align-items-center"
                    >
                      <h4 id="product-price">
                        {{
                          new Intl.NumberFormat("en-In", {
                            style: "currency",
                            currency: "EUR",
                          }).format(p.base_price)
                        }}
                      </h4>

                      <small class="text-muted"></small>
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";

export default {
  components: {},

  data() {
    return {
      // to store the data in an array
      products: [],
      isAsc: false,
    };
  },
  // Fetching the json data
  mounted() {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => (this.products = data))
      .catch((err) => console.log(err));
  },
  computed: {},
  methods: {
    sortByasc() {
      if (this.isAsc) {
        return this.products.sort((a, b) => {
          return a.base_price - b.base_price;
        });
      } else if (!this.isAsc) {
        return this.products.sort((a, b) => {
          return b.base_price - a.base_price;
        });
      }
    },

    /* even: function(arr) {
      // Set slice() to avoid to generate an infinite loop!
      return arr.slice().sort(function(a, b) {
        return a.base_price - b.base_price;
      });
    }*/
  },
};
</script>

<style>


#inbox-overview a {
  text-decoration: none;
  color: #000000;
}
.col{
  width: 20%;
}
.col:hover {
  transform: scale(1.03);
  transition: all 0.2s ease-in-out;
}

#inbox-title {
  margin-top: 0;
  padding-top: 5px;
  font-size: 14px;
}
#product-price {
  font-size: 16px;
}
#constrains {
  margin-left: auto;
  margin-right: auto;
  margin-top: 90px;
  width: 1100px;
}
 .btn-primary{
   background: transparent;
    color: black;
    border: solid 1.4px black;
 }
.btn-primary.active{
  
   background: transparent;
    color: black;
    border: solid 1.4px black;
}
.btn-primary:hover{
  background: #0d6efd;
  color: white;
}
.card-text {
  text-align: left;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.px-4 {
  background: #f0c4c4;
}
a {
  text-decoration: none;
  color: #000000;
}
a:hover {
  color: #000000;
  
}
#background{
  background: #f8f9fa;
}
li:hover{
  transform: scale(1.03);
  transition: all 0.2s ease-in-out;
}
</style>