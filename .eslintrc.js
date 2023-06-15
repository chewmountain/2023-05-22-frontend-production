module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['plugin:react/recommended', 'airbnb'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        'react/jsx-indent': [2, 4],
        indent: ['error', 4],
        'import/prefer-default-export': 'off',
        'react/function-component-definition': 'off',
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        ],
        'import/no-unresolved': 'off',
        'react/react-in-jsx-scope': 'off',
        'import/order': 'off',
        'import/extensions': 'off',
        'linebreak-style': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-unused-vars': 'off',
    },
};
