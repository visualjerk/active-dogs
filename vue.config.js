const WorkboxPlugin = require('workbox-webpack-plugin')
const ReplaceInFileWebpackPlugin = require('replace-in-file-webpack-plugin')

const baseUrl = process.env.BASE_URL || '/'

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
      new ReplaceInFileWebpackPlugin([
        {
          dir: 'dist',
          files: ['manifest.json'],
          rules: [
            {
              search: new RegExp('<%= BASE_URL %>', 'g'),
              replace: baseUrl,
            },
          ],
        },
      ]),
    ],
  },
}
