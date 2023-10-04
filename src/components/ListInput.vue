<template>
    <FormKit type="list" dynamic #default="{ items, node, value }" :name=name
        :value=value>
        <FormKit v-for="(item, index) in items" :key="item" :index="index"
            :placeholder=placeholder suffix-icon="trash"
            @suffix-icon-click="() => node.input(value.filter((_, i) => i !== index))" />
        <button type="button" class="button button--text" @click="() => node.input(value.concat(''))">
            + Añadir algo más a tu respuesta
        </button>
    </FormKit>
</template>
<script>
    export default {
        props: ["name", "value", "placeholder"]
    }
</script>


<!-- <FormKit type="list" dynamic #default="{ items, node, value }" name="teaches"
        :value="course.teaches">
        
        <FormKit v-for="(item, index) in items" :key="item" :index="index"
            placeholder="Conocimiento o habilidad que enseñas" suffix-icon="trash"
            @suffix-icon-click="() => node.input(value.filter((_, i) => i !== index))" />
        <button type="button" class="button--text" @click="() => node.input(value.concat(''))">
            + Añadir algo más a tu respuesta
        </button>
    </FormKit> -->