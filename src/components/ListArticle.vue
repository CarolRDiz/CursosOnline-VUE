<template>
    <article class="createCourse__list">
        <span class="form__label">{{ label }}</span>
        <p class="text">{{ text }}</p>
        <div class="formkit-list">
            <ListInput :name=name :value=value :placeholder=placeholder></ListInput>
        </div>
    </article>
</template>
<script>
    import ListInput from "../components/ListInput.vue";
    export default {
        props:[
            "label", "text", "name", "value", "placeholder"
        ],
        components:{
            ListInput
        },
        
    }
    
</script>