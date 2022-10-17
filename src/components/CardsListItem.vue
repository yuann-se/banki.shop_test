<template >
    <button class="card" :class="{sold: props.card.isSold}" @click="handleCardClick">
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
                <button class="price-block__btn basic-btn" @click.stop="handleBuyClick">Купить</button>
            </div>

            <div v-else class="card__price-block">
                <p class="card__sold">Продана на аукционе</p>
            </div>
        </div>
    </button>
</template>
<script setup lang="ts">
import { ICard } from '../store';

interface IProps {
    card: ICard
}
const props = defineProps<IProps>()

const handleCardClick = () => {
    console.log('card')
}

const handleBuyClick = () => {
    console.log('btn')
}

</script>

<style scoped>
.card {
    width: calc(25% - 24px);
    min-width: 275px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    margin-bottom: 32px;
}

.card:not(:nth-child(4n)) {
    margin-right: 32px;
}

.card.sold {
    opacity: .5;
}

.card__preview {
    display: flex;
    justify-content: center;
    border: 1px solid #e7e7e7;
}

.card__descr {
    padding: 20px 25px 25px;
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
</style>