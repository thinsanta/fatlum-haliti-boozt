<template>
  <button type="button" class="btn btn-primary" @click="$router.go(-1)">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-arrow-left"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
      ></path>
    </svg>
    Go back
  </button>

  <div v-if="products" class="product">
    <div class="left">
      <img
        v-bind:src="products.filename"
        class="rounded float-left"
        alt="..."
      />
    </div>

    <div class="right">
      <h5>{{ products.brand_name }}</h5>
      <p>{{ products.product_name }}</p>
      <h5>
        {{
          new Intl.NumberFormat("en-In", {
            style: "currency",
            currency: "EUR",
          }).format(products.base_price)
        }}
      </h5>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      products: null,
    };
  },

  mounted() {
    fetch("http://localhost:3000/products/" + this.id)
      .then((res) => res.json())
      .then((data) => (this.products = data))
      .catch((err) => console.log(err));
  },
};
</script>

<style>
.product {
  display: flex;
  width: 900px;
  margin-left: auto;
  margin-right: auto;
}
.right {
  width: inherit;
}
</style>