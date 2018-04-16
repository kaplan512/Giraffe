<template>
    <div class = "add">
        <div class = "add-form">
            <form>
                <input v-model = "title" type = "text" placeholder = "title"/>
                <textarea v-model = "description" placeholder="description"></textarea>
                <button class = "btn" @click = 'addAd'>Create</button>
            </form>
            <div v-if="errors.length">
                <b class = "error-title">Please input correct data:</b>
                <ul class = "error-list">
                    <li v-for="error in errors">{{ error }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Add",
        data(){
            return{
                title: '',
                description: '',
                createUser: '',
                date: '',
                errors: [],
                lastAd: ''
            }
        },
        methods: {
            addAd(e) {
                e.preventDefault();
                this.errors = [];
                if(!this.title) {
                    this.errors.push("title shouldn't be empty");
                }
                if (!this.description) {
                    this.errors.push("description shouldn't be empty");
                }
                if ((this.title) && (this.description)) {
                    let ads = JSON.parse(localStorage.getItem('ads'));
                    let user = localStorage.getItem('current user');
                    let date = new Date();
                    let n = localStorage.getItem('last ad');
                    if(!ads){
                        ads=[];
                    }

                    this.lastAd = localStorage.getItem('last ad');
                    if (n === null) {
                        n = 0;
                    }
                    n++;
                    localStorage.setItem("last ad", n);

                    ads.unshift({id: n, title: this.title, description: this.description, user: user, date: date});
                    localStorage.setItem('ads',JSON.stringify(ads));

                    this.$router.push('/'+n)

                }
            }
        }
    }
</script>

<style scoped>
    .add {
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
        flex-wrap: wrap;
        width: 700px;
        margin: 0 auto;
        padding: 15px;
    }
    .add-form form {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
    .add-form input, .add-form textarea {
        width: 200px;
        border: 1px solid blue;
        border-radius: 5px;
        margin-bottom: 15px;
        padding-left: 15px;
    }
    .add-form textarea {
        height: 100px;
    }
    .add-form .btn {
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