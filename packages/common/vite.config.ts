/// <reference types="vitest" />
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
    plugins: [
        dts({
            rollupTypes: true,
            insertTypesEntry: true,
        }),
    ],
    build: {
        rollupOptions: {
            output: {
                preserveModules: true,
            },
            external: ['child_process', 'fs', 'path'],
        },
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            fileName: (format, filename) => `${filename}.js`,
            formats: ['es'],
        },
    },
    test: {
        globals: true,
        environment: 'node',
    },
});
