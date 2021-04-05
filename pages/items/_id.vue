<template>
    <div>
        <app-food-info :currentItem="currentItem"/>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import appFoodInfo from '../../components/appFoodInfo.vue';

export default {
  components: { appFoodInfo },
    data() {
        return {
            id: this.$route.params.id
        }
    },
    computed: {
        ...mapState([
            'fooddata',
        ]),
        currentItem() {
            let item;
                for(let i = 0; i < this.fooddata.length; i++) {
                    for(let j = 0; j < this.fooddata[i].menu.length; j++) {
                        if (this.fooddata[i].menu[j].id === this.id) {
                            item = this.fooddata[i].menu[j]
                            break;
                        }
                    }
                }
            return item
        }
    }
}
</script>

<style lang="scss" scoped>

</style>