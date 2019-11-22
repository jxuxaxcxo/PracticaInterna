<template>
    <div>
        <v-container>
            <v-row 
            v-for="(noConformidad, i) in noConformidades"
            :key="i"
            >
            <v-col cols="10">
                <v-card-overview>{{noConformidad}}</v-card-overview>
            </v-col>
            <v-col cols="1">
                <v-icon
                small
                icon
                color="#3B83BD"
                >
                mdi-pencil
                </v-icon>
            </v-col>
            <v-col cols="1">
                <v-icon
                small
                icon
                color="#3B83BD"
                >
                    mdi-delete
                </v-icon>
            </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
export default {
    props: {
        noConformidades: Array
    }
}
</script>
<style scoped>

</style>