const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    publicPath: "/REPO_NAME/",
    transpileDependencies: [
        'vuetify'
    ]
})
