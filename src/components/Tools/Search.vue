<template>
    <v-text_field
    class="expanding-search mt-1"
    placeholder="Search"
    prepend-inner-icon="mdi-magnify"
    filled
    dense
    clearable
    ></v-text_field>
</template>

<script>
export default {

}
</script>

<style lang="sass">
    .expanding-search
        .v-input__slot
            &:before, &:after
                border-color: transparent !important
</style>
