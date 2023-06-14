<template>
  <div>
    <v-card class="mx-auto mb-12" width="auto">
      <v-layout>
        <v-app-bar class="custom-app-bar" style="background-color: teal;" color= "teal" density="compact">
          <v-app-bar-title to="/">
            <v-btn :ripple="false" variant="plain" to="/">
              <v-icon size="40" class="mdi mdi-robot-confused-outline"></v-icon>
              <span style="margin-left: 8px">Home</span>
            </v-btn>
          </v-app-bar-title>
          <template v-slot:prepend> </template>
          <template v-slot:append>
            <v-menu>
              <template v-slot:activator="{ props }">
                <v-btn v-bind="props">
                  <Icon icon="charm:menu-hamburger" color="white" width="25" height="25" />
                </v-btn>
              </template>
              <v-list style="background-color: 	rgb(0,145,139)">
                <v-list-item>
                  <RouterLink to="/chatgpt">ChatGPT</RouterLink>
                </v-list-item>
                <v-list-item>
                  <RouterLink to="/instructions">Instructions</RouterLink>
                </v-list-item>
                <v-list-item>
                  <RouterLink to="/instructions">Home</RouterLink>
                </v-list-item>
              </v-list>
            </v-menu>
          </template>
        </v-app-bar>
      </v-layout>
    </v-card>
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify/lib/framework.mjs'
import { reactive } from 'vue'
import { useDisplay } from 'vuetify'
import { provide } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { Icon } from '@iconify/vue'
const theme = useTheme()
const display = reactive(useDisplay())


</script>
