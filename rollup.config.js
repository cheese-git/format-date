import typescript from '@rollup/plugin-typescript'

export default {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/index.esm.js'
        },
        {
            file: 'dist/index.cjs.js',
            format: "cjs"
        }
    ],
    plugins: [typescript()]
}