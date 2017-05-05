# eslint-plugin-ejs

> ESLint rules for ejs

## Usage

1. Install `eslint-plugin-ejs` as a dev-dependency:

    ```shell
    npm install --save-dev @silesia-corporation/eslint-plugin-ejs
    ```

2. Enable the plugin by adding it to your `.eslintrc`:

    ```yaml
    plugins:
      - ejs
    ```

## Configuration

This plugin exports a `recommended` configuration that enforces good practices.

To enable this configuration, use the `extends` property in your `.eslintrc`
config file:

```yaml
plugins:
  - ejs
extends: 'plugin:ejs/recommended'
```

See the [ESLint config docs][] for more information about extending
configuration files.

[eslint config docs]: http://eslint.org/docs/user-guide/configuring#extending-configuration-files

### Rules

Rule                                  | Recommended      | Options
----                                  | -----------      | -------
no-func-definitions                   | 1                |
no-global-variables                   | 1                |
no-string-concatenations              | 1                |
no-view-onoff-binding                 | 1                |
no-unwanted-literals                  | 1                |
no-variable-declarations              | 1                |

For example, using the recommended configuration, the `no-func-definitions` rule
is enabled and will cause ESLint to throw an error (with an exit code of `1`)
when triggered.

You may customise each rule by adding a value in your `.eslintrc` `rules`
property:

```yaml
plugins:
  - ejs
rules:
  ejs/no-func-definitions: 1,
  ejs/no-global-variables: 1,
  ejs/no-string-concatenations: 1,
  ejs/no-view-onoff-binding: 1,
  ejs/no-unwanted-literals: 1,
  ejs/no-variable-declarations: 1
```

See [configuring rules][] for more information.

[configuring rules]: http://eslint.org/docs/user-guide/configuring#configuring-rules

## Author

© 2017 Silesia Corporation and [contributors][].

[contributors]: https://github.com/silesia-corporation/eslint-plugin-ejs/graphs/contributors
