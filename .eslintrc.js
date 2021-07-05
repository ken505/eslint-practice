module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "plugin:react/recommended",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    // suppress errors for missing 'import React' in files
    // ファイルに「importReact」がない場合のエラーを無視
    "react/react-in-jsx-scope": "off",

    // allow jsx syntax in js files ( for next.js project )
    // js ファイルで jsx 構文を許可する（ next.js プロジェクトの場合）
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    //should add ".ts" if typescript project
    // typescript プロジェクトの場合は「.ts」を追加する必要があります
    "react/prop-types": "off",
  },
};
