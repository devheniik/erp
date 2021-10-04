import { defineConfig, loadEnv  } from 'vite'
import pugPlugin from "vite-plugin-pug"
import vue from '@vitejs/plugin-vue'
import path from 'path'

const options = { pretty: true } // FIXME: pug pretty is deprecated!
const locals = { name: "My Pug" }
 

export default ({ mode }) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  // import.meta.env.VITE_NAME available here with: process.env.VITE_NAME
  // import.meta.env.VITE_PORT available here with: process.env.VITE_PORT

  return defineConfig({
    plugins: [vue(), pugPlugin(options, locals)],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '/src'),
        'h_list': path.resolve(__dirname, '/src/hooks/list.js'),
        '@user': path.resolve(__dirname, '/src/containers/User'),
        '@person': path.resolve(__dirname, '/src/containers/Person'),
        '@dashboard': path.resolve(__dirname, '/src/containers/Dashboard'),
        '@axios': path.resolve(__dirname, '/src/plugins/axios'),
      },
    }
  });
}