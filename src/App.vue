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

/* html {
    overflow-x: hidden;
} */

:root {
    --bg: #F6F3F3;
    --bg-dark: #ECEAEA;
    --border: #E1E1E1;

    --black: #343030;
    --black55: #555555;
    --btn-normal: #403432;
    --btn-hover: #776763;
    --btn-disabled: #C1B4B1;
    --btn-selected: #5B3A32;
}

body {
    width: 100vw;
    color: var(--black);
    font-size: 14px;
    background-color: var(--bg);
    overflow-x: hidden;
}

#root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

* {
    -webkit-tap-highlight-color: transparent;
    font-family: 'Merriweather', sans-serif;
    font-weight: 400;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

input,
a,
button {
    outline: none;
    border: none;
    text-decoration: none;
    color: inherit;
}

button {
    cursor: pointer;
    background-color: transparent;
    font-size: 0;
}

input:focus,
a:focus,
button:focus {
    outline: none;
}

li {
    list-style: none;
}

a:visited {
    color: inherit;
}

.container {
    max-width: calc(1216px + 80px);
    margin: 0 auto;
    padding-right: 40px;
    padding-left: 40px;
}

.basic-btn {
    width: 122px;
    height: 48px;
    background-color: var(--btn-normal);
    font-size: 14px;
    color: white;
    font-weight: 700;
    outline: 2px solid transparent;
    transition: outline .2s ease, background-color .2s ease;
}

.basic-btn:focus-visible {
    background-color: var(--btn-hover);
    outline: 2px solid var(--btn-normal);
}

.basic-btn:hover {
    background-color: var(--btn-hover);
}

.basic-btn:active {
    background-color: var(--black);
}

.basic-btn:disabled {
    pointer-events: none;
    opacity: .9;
    cursor: default;
}

@media(max-width: 700px) {
    .container {
        padding-right: 15px;
        padding-left: 15px;
    }
}
</style>