import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src/',

  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        user: resolve(__dirname, 'src/user/index.html'),
        login: resolve(__dirname, 'src/user/login.html'),
        register: resolve(__dirname, 'src/user/register.html'),
        prayerselector: resolve(__dirname, 'src/user/classroulette.html'),
        classregistration: resolve(__dirname, 'src/user/classregistration.html'),
        updateinfo: resolve(__dirname, 'src/user/updateinfo.html'),
      },
    },
  },
});
