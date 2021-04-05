<template>
  <main class="container">
    <section class="image" :style="`background: url(/${currentItem.img}) no-repeat center center`"></section>

    <section class="details">
      <h1>{{ currentItem.item }}</h1>

      <h3>Price:  ${{price}} </h3>

      <div class="quantity">
        <input type="number" min="1" v-model="count" />
        <button class="primary" @click="addToCart" >Add to Cart - ${{ totalPrice }}</button>
      </div>

      <fieldset v-if="currentItem.options">
        <legend>
          <h3>Options</h3>
        </legend>
        <div v-for="option in currentItem.options" :key="option">
          <input type="radio" name="option" :id="option" :value="option" v-model="itemOptions" />
          <label :for="option">{{ option }}</label>
        </div>
      </fieldset>

      <fieldset v-if="currentItem.addOns">
        <legend>
          <h3>Add Ons</h3>
        </legend>
        <div v-for="addon in currentItem.addOns" :key="addon">
          <input type="checkbox" name="addon" :id="addon" :value="addon" v-model="itemAddons" />
          <label :for="addon">{{ addon }}</label>
        </div>
      </fieldset>
    </section>

    <section class="added" v-if="cartSubmitted">
        <p class="text">Order Added!</p>
        <br />Return to
        <nuxt-link to="/menu">menu</nuxt-link>
        <br />Go to
        <nuxt-link to="/cart">cart</nuxt-link>
    </section>



    <section class="options">
      <h3>Description</h3>
      <p>{{ currentItem.description }}</p>
    </section>
  </main>
</template>

<script>
    export default {
        data() {
            return {
                count: 1,
                itemOptions: "",
                itemAddons: [],
                cartSubmitted: false,
            }
        },
        props : {
            currentItem : {}
        },
        computed : {
            price() {
                let price = this.currentItem.price
                return price.toFixed(2)
            },
            totalPrice() {
                let total = this.currentItem.price * this.count
                return total.toFixed(2)
            }
        },
        methods : {
            addToCart() {
                let orderOutput = {
                    item: this.currentItem.item,
                    count: this.count,
                    options: this.itemOptions,
                    addOns: this.itemAddons,
                    totalPrice: this.totalPrice
                }

                this.$store.commit("updateCart", orderOutput)

                this.cartSubmitted = true;
            }
        }
    }
</script>

<style lang="scss" scoped>
.container {
  width: 1000px;
  height: 650px;
  margin-left: 250px;
  margin-top: 60px;
  margin-bottom: auto;
  display: grid;
  grid-template-columns: 400px 1fr;
  grid-template-rows: 400px 1fr;
  grid-column-gap: 60px;
  grid-row-gap: 60px;
  line-height: 2;
}
.image {
  grid-area: 1 / 1 / 2 / 2;
  background-size: cover;
  border-radius: 10px;
}
.details {
  grid-area: 1 / 2 / 2 / 3;
  position: relative;
}
.options {
  grid-area: 2 / 1 / 3 / 2;
}
.added {
  grid-area: 1 / 3 / 3 / 3;
}
.text {
  color: green;
}
</style>