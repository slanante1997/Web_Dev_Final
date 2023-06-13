<template>
  <div>
    <v-card class="mx-auto mb-12" width="auto">
      <v-layout>
        <v-app-bar class="custom-app-bar" color="yellow" density="compact">
          <v-app-bar-title to="/">
            <v-btn :ripple="false" variant="plain" to="/">
              <v-icon class="mdi mdi-cellphone-settings"></v-icon>
              Home
            </v-btn>
          </v-app-bar-title>
          <template v-slot:prepend> </template>
          <template v-slot:append>
            <v-menu>
              <template v-slot:activator="{ props }">
                <v-btn v-bind="props">
                  <Icon icon="charm:menu-hamburger" color="#120" width="25" height="25" />
                </v-btn>
              </template>
              <v-list>
                <v-list-item>
                  <RouterLink to="/chatgpt">ChatGPT</RouterLink>
                </v-list-item>
                <v-list-item>
                  <RouterLink to="/instructions">Instructions</RouterLink>
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