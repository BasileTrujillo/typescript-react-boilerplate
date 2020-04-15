module.exports = {
    stories: ['../src/**/*.stories.(ts|tsx|js|jsx|mdx)'],
    addons: [
        '@storybook/preset-create-react-app',
        '@storybook/addon-a11y',
        {
            name: '@storybook/addon-docs',
            options: {
                configureJSX: true,
            },
        },
        '@storybook/addon-actions',
        '@storybook/addon-knobs',
    ],
};