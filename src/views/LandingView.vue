<template>
    <v-container class="fill-height" fluid>
        <v-row justify="center">
            <v-col cols="12">
                <h1 class="text-h2" style="text-align: center">ChatGPT Demo</h1>
            </v-col>
        <v-col cols="12" style="display: flex; flex-direction: column; align-items: center">
            <v-btn
                variant="outlined"
                class="text-h6"
                style="min-height: 60px; min-width: 200px"
                to="/instructions"
                >
                    Instructions
                </v-btn>
                <v-btn
                variant="outlined"
                class="text-h6"
                style="min-height: 60px; min-width: 200px"
                to="/chatgpt"
                >
                    ChatGPT Demo
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>