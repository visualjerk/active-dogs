const WorkboxPlugin = require('workbox-webpack-plugin')

const baseUrl = process.env.BASE_URL || '/'
const BASE_URL_REGEX = new RegExp('<%= BASE_URL %>', 'g')

function replaceBaseUrl(content) {
  const stringContent = content.toString()
  if (stringContent.match(BASE_URL_REGEX)) {
    return stringContent.replace(BASE_URL_REGEX, baseUrl)
  }
  return content
}

module.exports = {
  publicPath: baseUrl,
  configureWebpack: {
    plugins: [
      new WorkboxPlugin.GenerateSW({
        // these options encourage the ServiceWorkers to get in there fast
        // and not allow any straggling "old" SWs to hang around
        clientsClaim: true,
        skipWaiting: true,
      }),
    ],
  },
  chainWebpack: (config) => {
    config.plugin('copy').tap((args) => {
      const newArgs = [
        {
          patterns: [
            {
              ...args[0].patterns[0],
              transform: replaceBaseUrl,
            },
          ],
        },
      ]

      return newArgs
    })
  },
}
