module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react",
    "plugin:sonarjs/recommended",
    "plugin:react-hooks/recommended",
  ],
  plugins: ["@typescript-eslint", "react", "import", "sonarjs"],
  globals: {
    process: true,
    require: true,
    cy: true,
  },
  env: {
    browser: true,
    jest: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "@typescript-eslint/no-empty-function": 0,
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/interface-name-prefix": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-use-before-define": 0,
    "@typescript-eslint/no-explicit-any": 1,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/explicit-member-accessibility": 0,
    camelcase: "off",
    // Allow oauth snake_case params
    "@typescript-eslint/camelcase": [
      "error",
      {
        properties: "always",
        allow: [
          "client_id",
          "response_type",
          "redirect_uri",
          "logout_uri",
          "code_challenge",
          "code_challenge_method",
          "access_token",
          "id_token",
          "refresh_token",
          "expires_in",
          "token_type",
          "grant_type",
          "client_secret",
          "code_verifier",
          "identity_provider",
          "qub_id",
          "auth_params",
          "current_email",
          "new_email",
          "drop_console",
          "native_webview",
          "google_tag_manager",
          "subscription_flow",
          "logo_url",
          "tracking_object",
          "device_code",
          "user_code",
          "verification_uri",
        ],
      },
    ],
    "no-restricted-imports": [
      "error",
      {
        patterns: [
          "**/server/**", // Blacklist server files imports in client-side code,
        ],
      },
    ],
    "@typescript-eslint/no-namespace": 0,
    "react/prop-types": 0,
    eqeqeq: 2,
    "import/order": [
      2,
      {
        groups: [
          ["builtin", "external"],
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        pathGroupsExcludedImportTypes: ["builtin"],
        pathGroups: [
          {
            pattern: "server/**",
            group: "internal",
          },
          {
            pattern: "modules/**",
            group: "internal",
          },
          {
            pattern: "reducer**",
            group: "internal",
          },
          {
            pattern: "stores/**",
            group: "internal",
          },
          {
            pattern: "typings/**",
            group: "internal",
          },
        ],
      },
    ],
    "import/no-duplicates": 2,
    "sonarjs/no-small-switch": 0,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
