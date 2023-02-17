<template>
    <nav>
        <ul class="nav__ul">
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/about">About</RouterLink></li>
            <li><RouterLink to="/profile">Profile</RouterLink>  </li>
            <li><RouterLink to="/cart">Carrito</RouterLink>  </li>
            <li><RouterLink to="/loginRegister">Iniciar sesión</RouterLink>  </li>
        </ul>
    </nav>
</template>
<script>
    export default {
        name: 'TheNavigation',
    }
</script>
<style>
    .nav__ul{
        display: flex;
        column-gap: 30px;
    }
    .active-link{
        color: rgb(0, 13, 255);
    }
</style>