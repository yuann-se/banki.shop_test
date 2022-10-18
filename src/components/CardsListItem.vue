<template >
    <router-link :to="`/${props.card.id}`" class="card" :class="{sold: props.card.isSold}">
        <div class="card__preview">
            <img :src=props.card.images[0] :alt=props.card.title>
        </div>
        <div class="card__descr">
            <p class="card__name">{{props.card.title}}</p>
            <p class="card__name">{{props.card.author}}</p>

            <div class="card__price-block" v-if="!props.card.isSold">
                <div class="price-block__price">
                    <p class="init-price" v-if="props.card.initialPrice">{{props.card.initialPrice}}</p>
                    <p class="price">{{props.card.price}}</p>
                </div>
                <button class="buy-btn basic-btn" :class="{isInCart: isInCart}" @click.prevent="handleAddToCart"
                    :disabled="isInCart">
                    <CheckIcon v-if="isInCart" />
                    <SpinnerIcon v-if="purchaseState === 'loading'" />
                    <span v-if="purchaseState !== 'loading'">{{isInCart ? 'В корзине' : 'Купить'}}</span>
                </button>
            </div>

            <div v-else class="card__price-block">
                <p class="card__sold">Продана на аукционе</p>
            </div>
        </div>
    </router-link>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ICard } from '../store';
import CheckIcon from './icons/CheckIcon.vue';
import SpinnerIcon from './icons/SpinnerIcon.vue';

interface IProps {
    card: ICard
}
const props = defineProps<IProps>()

const purchaseState = ref('')
const ls = localStorage.getItem('Cart')
const LSInfo: string[] = ls ? JSON.parse(ls) : []
const isInCart = ref(LSInfo.includes(props.card.id))

const handleAddToCart = () => {
    purchaseState.value = 'loading'
    setTimeout(() => {
        purchaseState.value = ''
        isInCart.value = true
        if (!LSInfo.length) {
            const products: string[] = []
            products.push(props.card.id)
            localStorage.setItem('Cart', JSON.stringify(products))
        } else {
            localStorage.setItem('Cart', JSON.stringify([...LSInfo, props.card.id]))
        }
    }, 2000);
}

</script>

<style scoped>
.card {
    width: calc(25% - 24px);
    min-width: 275px;
    margin-right: 32px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    margin-bottom: 32px;
    outline: 2px solid transparent;
    outline-offset: 0;
    transition: outline .2s ease, outline-offset .2s ease;
}

.card:nth-child(4n) {
    margin-right: 0;
}

.card:focus-visible {
    outline: 2px solid var(--btn-normal);
    outline-offset: 10px;
}

.card.sold {
    opacity: .5;
}

.card__preview {
    display: flex;
    justify-content: center;
    border: 1px solid #e7e7e7;
}

.card__preview img {
    width: 100%;
}

.card__descr {
    padding: 20px 20px 25px;
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    border: 1px solid var(--border);
    border-top: none;
}

.card__name {
    font-size: 18px;
    line-height: 27px;
    text-align: start;
}

.card__price-block {
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
}

.init-price {
    font-size: 14px;
    font-weight: 300;
    color: #a0a0a0;
    text-decoration: line-through;
}

.init-price,
.price {
    text-align: start;
}

.price,
.card__sold {
    font-size: 16px;
    font-weight: 700;
}

.buy-btn {
    position: relative;
    padding: 0 9px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.buy-btn:deep(svg) {
    margin-right: 5px;
}

.buy-btn.isInCart {
    background-color: var(--btn-selected);
}

@media(max-width: 1300px) {
    .card {
        width: calc(33% - 24px);
    }

    .card:nth-child(4n) {
        margin-right: 32px;
    }

    .card:nth-child(3n) {
        margin-right: 0;
    }
}

@media(max-width: 1000px) {
    .card {
        width: calc(50% - 24px);
    }

    .card:nth-child(3n) {
        margin-right: 32px;
    }

    .card:nth-child(2n) {
        margin-right: 0;
    }
}

@media(max-width: 700px) {
    .card {
        width: 100%;
        margin-right: 0;
    }

    .card:nth-child(3n) {
        margin-right: 0;
    }
}
</style>