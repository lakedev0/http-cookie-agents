module.exports = {
  extends: [require.resolve('@3846masa/configs/eslint')],
  overrides: [
    {
      files: ['examples/**/*'],
      rules: {
        'import/order': [
          'error',
          {
            pathGroups: [
              {
                group: 'external',
                pattern: 'http-cookie-agents/http',
              },
              {
                group: 'external',
                pattern: 'http-cookie-agents/undici',
              },
            ],
          },
        ],
      },
    },
  ],
};
