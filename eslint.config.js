import html from '@html-eslint/eslint-plugin';
import htmlParser from '@html-eslint/parser';

export default [
    // your own configurations.
    {
        // recommended configuration included in the plugin
        ...html.configs['flat/recommended'],
        files: ['**/*.html'],
        plugins: {
            '@html-eslint': html,
        },
        languageOptions: {
            parser: htmlParser,
        },
    },
];
