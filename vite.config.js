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
    // server: {
    //   host: "megatree.biz",
    //   port: 3000,
    //   https: true,
    // },
    plugins: [vue(), pugPlugin(options, locals)],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '/src'),
        '@axios': path.resolve(__dirname, '/src/plugins/axios.js'), 
        '@api_base': path.resolve(__dirname, '/src/api/base'), 
        '@api': path.resolve(__dirname, '/src/api/index'), 
        'h_list': path.resolve(__dirname, '/src/hooks/list.js'),
        '@user': path.resolve(__dirname, '/src/containers/User'),
        '@permitions': path.resolve(__dirname, '/src/containers/Permitions'),
        '@sale': path.resolve(__dirname, '/src/containers/Sale'),
        '@product': path.resolve(__dirname, '/src/containers/Product'),
        '@operation': path.resolve(__dirname, '/src/containers/Operation'),
        '@firm': path.resolve(__dirname, '/src/containers/Firm'),
        '@finance': path.resolve(__dirname, '/src/containers/Finance'),
        '@person': path.resolve(__dirname, '/src/containers/Person'),
        '@dashboard': path.resolve(__dirname, '/src/containers/Dashboard')
      },
    }
  });
}