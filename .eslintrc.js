plugins: ['import'],
extends: [
  'plugin:import/errors',
  'plugin:import/warnings',
  'plugin:import/typescript', // optional if using TS
],
rules: [{
  'import/no-extraneous-dependencies': 'error',
  'import/extensions': 'error',
}]
