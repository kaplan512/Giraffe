<template>
    <div class = "auth">
        <div class = "auth-form">
            <form v-if="!currentUser">
                <input v-model="userName" type = "text" placeholder="username">
                <br>
                <input v-model="password" type="password" placeholder="password">
                <br>
                <button class = "btn" @click="addUser">add User</button>
                <br>
            </form>
            <div v-if="errors.length">
                <b class = "error-title">Please input correct data:</b>
                <ul class = "error-list">
                    <li v-for="error in errors">{{ error }}</li>
                </ul>
            </div>
        </div>


        <router-link v-if="currentUser" class = "link" to="/logout">Logout</router-link>
        <div v-if="currentUser">
            Current user: {{ currentUser }}
        </div>

        <router-link v-if="currentUser" class = "link" to="/edit">Create Ad</router-link>

        <Ads
            :currentUser = "currentUser"
        ></Ads>

    </div>
</template>

<script>
    import Ads from './Ads.vue'
    export default {
        name: "Auth",

        components: {
            Ads
        },
        data () {
            return {
                userName: '',
                password: '',
                currentUser: '',
                error_massage: '',
                errors: [],
                id: '',
                ads: []
            }
        },
        methods: {
            addUser(e) {
                e.preventDefault();

                this.errors = [];
                if(!this.userName) {
                    this.errors.push("input 'name' is necessary");
                }
                if (!this.password) {
                    this.errors.push("input 'password' is necessary");
                }
                if ((this.userName) && (this.password)) {

                    let storage = localStorage.getItem(this.userName);

                    if((!storage) || (storage === this.password)) {
                        this.$store.dispatch('addUser', this.userName);
                        this.currentUser = this.userName;
                        localStorage.setItem(this.userName, this.password);
                        localStorage.setItem('current user', this.currentUser);
                    }
                    else {
                        this.errors.push("password incorrect for this user");
                    }

                }
            }
        },
        created: function () {
            this.currentUser = localStorage.getItem('current user');
        }
    }

</script>

<style scoped>
    .auth {
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
        flex-wrap: wrap;
        width: 700px;
        margin: 0 auto;
        padding: 15px;
    }
    .auth-form input {
        width: 200px;
        border: 1px solid blue;
        border-radius: 5px;
        margin-bottom: 15px;
        padding-left: 15px;
    }
    .auth-form .btn {
        margin: 0 auto;
        display: block;
    }
    .error-title {
        color: red;
    }
    .error-list {
        padding: 0px;
        color: red;
    }
</style>