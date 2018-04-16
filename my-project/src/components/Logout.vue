<template>
    <div>
        <router-link class = "link" to="/">Home</router-link>
    </div>
</template>

<script>
    export default {
        name: "Logout",
        created: function () {
            localStorage.setItem('current user', '');
        }
    }
</script>

<style scoped>
.link {
    margin: 15px auto;
}
</style>