<template >
    <v-hover v-slot="{ hover }">
        <v-list-group :value="variant ? false : ''" @click="activarGenerosHijo">


            <template v-slot:activator>
                <v-tooltip left>
                    <template v-slot:activator="{ on, attrs }" v-bind="attrs" v-on="on">
                        <v-list-item-action  >
                            <v-icon :class="`${hover ? 'blue--text' : ''}`">mdi-view-grid</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title v-text="'Generos'" :class="hover ? 'blue--text' : ''">
                            </v-list-item-title>
                        </v-list-item-content>
                    </template>
                    <span>Generos</span>
                </v-tooltip>
            </template>



            <v-row style="width: 300px; height: 300px; overflow: auto; ">
                <v-col cols="6">
                    <template v-for="(item, index) in generos" v-if="index < ((generos.length - 1) / 2)">
                        <v-hover v-slot="{ hover }">
                            <v-list-item :key="item.mal_id">
                                <v-list-item-content>
                                    <v-list-item-title :class="hover ? 'blue--text' : ''">{{ item.name }}
                                    </v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-hover>
                    </template>
                </v-col>
                <v-col cols="6">
                    <v-hover v-for="(item, index) in generos" v-slot="{ hover }">
                        <template v-if="index > ((generos.length - 1) / 2)">
                            <v-list-item :key="item.mal_id">
                                <v-list-item-content>
                                    <v-list-item-title :class="hover ? 'blue--text' : ''">{{ item.name }}
                                    </v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </template>
                    </v-hover>
                </v-col>
            </v-row>

        </v-list-group>
    </v-hover>

</template>
<script>
import axios from "axios"
export default {
    name: 'Generos',
    data() {
        return {
            generas:[]
        }
    },
    props: ['variant','generos'],
    methods: {
        activarGenerosHijo() {
            this.$emit('activarGenerosPadre')
        }
    },

}
</script>
<style lang="">
    
</style>