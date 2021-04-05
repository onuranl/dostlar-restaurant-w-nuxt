<template>
    <main class="container restaurant">
        <div class="restaurantheading">
            <h1>Dostlar Restaurant Menu</h1>

            <div>
                <label for="food">Which cuisine do you want ?</label>
                <select
                v-model="selectedFood"
                id="food"
                name="thing">
                    <option value>All Foods</option>
                    <option v-for="option in fooddata" :key="option" :value="option.name">{{option.name}}</option>
                </select>
            </div>
        </div>


        <section class="restaurantinfo">
            <div v-for="store in filteredFoods" :key="store.id">
                <h2>{{store.name}} </h2>

                <div class="row">
                    <div
                    class="items"
                    v-for="menuitem in store.menu"
                    :key="menuitem.id"
                    :style="`background: url(/${menuitem.img}) no-repeat center center`">
                        <div class="iteminfo">
                            <div>
                                <h4>{{ menuitem.item }} </h4>
                                <p>{{ menuitem.price }}</p>
                            </div>
                            <nuxt-link :to="`/items/${menuitem.id}`">
                                <button class="ghost"> View item </button>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import { mapState } from "vuex";

    export default {
        computed: {
            ...mapState([
                "fooddata"
            ]),
            filteredFoods() {
                if (this.selectedFood) {
                    return this.fooddata.filter((el) => {
                        let food = el.name.toLowerCase()
                        return food.includes(this.selectedFood.toLowerCase())
                    })
                }
                return this.fooddata
            }
        },
        data() {
            return {
                selectedFood : ""
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>