<template>
    <div class="menu-btn">
        <div class="menu-btn__burger">
        </div>
    </div>
</template>

<style scoped>
.menu-btn {
    width: 80px;
    height: 80px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all .2s ease-in-out;
    border: 4px solid var(--btn-normal);
}

.menu-btn__burger {
    position: absolute;
    top: calc(50% - 2px);
    left: calc(50% - 25px);
    width: 50px;
    height: 6px;
    background: var(--btn-normal);
    border-radius: 5px;
    transition: all .2s ease-in-out;
}

.menu-btn__burger::before,
.menu-btn__burger::after {
    content: '';
    position: absolute;
    width: 50px;
    height: 6px;
    background: var(--btn-normal);
    border-radius: 5px;
    transition: all .2s ease-in-out;
}

.menu-btn__burger::before {
    transform: translateY(-16px);
}

.menu-btn__burger::after {
    transform: translateY(16px);
}


.menu-btn.open .menu-btn__burger {
    transform: translateX(-50px);
    background: transparent;
}

.menu-btn.open .menu-btn__burger::before {
    transform: rotate(45deg) translate(35px, -35px);
}

.menu-btn.open .menu-btn__burger::after {
    transform: rotate(-45deg) translate(35px, 35px);
}
</style>