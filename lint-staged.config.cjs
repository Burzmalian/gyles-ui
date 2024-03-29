module.exports = {
  '**/*.+(js|ts|tsx|cjs)': 'eslint --fix',
  '**/*.{js,tsx,ts,tsx,json,md,cjs}': 'prettier --write',
  '**/*.+(ts|tsx)': () => 'tsc --skipLibCheck --noEmit',
};
