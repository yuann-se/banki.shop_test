<template>
    <router-view></router-view>
</template>
  
<script lang="ts" setup>
import router from './router'

router.beforeEach((to, from, next) => {
    document.title = to.name?.toString() || 'Gallery';
    next();
});

</script>

<style>
@font-face {
    font-family: 'Merriweather';
    src: local('Merriweather Light'), local('Merriweather Light'),
        url('./assets/fonts/merriweatherlight.woff2') format('woff2'),
        url('./assets/fonts//merriweatherlight.woff') format('woff');
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: 'Merriweather';
    src: local('Merriweather Regular'), local('Merriweather Regular'),
        url('./assets/fonts/merriweatherregular.woff2') format('woff2'),
        url('./assets/fonts//merriweatherregular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: 'Merriweather';
    src: local('Merriweather Bold'), local('Merriweather Bold'),
        url('./assets/fonts/merriweatherbold.woff2') format('woff2'),
        url('./assets/fonts//merriweatherbold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
}

:root {
    --bg: #e5e5e5;
    --bg-dark: #ECEAEA;
    --black: #343030;
    --btn-normal: #403432;
    --btn-hover: #776763;
    --btn-disabled: #C1B4B1;
    --btn-selected: #5B3A32;
}

body {
    color: var(--black);
    background-color: var(--bg);
    width: 100vw;
    overflow-x: hidden;
}

* {
    -webkit-tap-highlight-color: transparent;
    font-family: 'Merriweather', sans-serif;
    font-weight: 400;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.container {
    max-width: calc(1216px + 60px);
    margin: 0 auto;
    padding: 0 40px 0 20px;
}
</style>