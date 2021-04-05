<template>
    <div >
        <table class="container cart">
            <thead>
                <tr>
                <th>Item</th>
                <th>Add Ons</th>
                <th>Amount</th>
                <th>Total Price</th>
                </tr>
            </thead>
            <tbody v-for="orders in cart" :key="orders.id">
                <tr>
                <td>
                    {{orders.item}}
                    <span v-if="orders.options">- {{orders.options}} </span>
                </td>
                <td><span v-for="addOns in orders.addOns" :key="addOns" class="comma"> {{addOns}} </span></td>
                <td> {{orders.count}} </td>
                <td> {{orders.totalPrice}} </td>
                </tr>
            </tbody>
                <tr>
                <td colspan="3"></td>
                <td class="total">Total: ${{totalOrderPrice}} </td>
                </tr>
        </table>
        <div v-if="!cart.length" class="if">
            <p>Your cart is empty</p>
            <nuxt-link to="/menu"> <button class="primary">Fill it up !</button> </nuxt-link>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState([
            'cart',
        ]),
        totalOrderPrice() {
            let total = 0;

            for (let i = 0; i < this.cart.length ; i++) {
                let price = this.cart[i].totalPrice
                total += parseFloat(price)
            }
            return total
        }
    },
};
</script>

<style lang="scss" scoped>
.if {
    text-align: center;
    margin-top: 50px;
}

</style>