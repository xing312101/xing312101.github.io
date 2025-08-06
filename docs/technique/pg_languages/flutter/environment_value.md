# environment value
> flutter_config: https://pub.dev/packages/flutter_config

> environment_config: https://pub.dev/packages/environment_config

```
Using flutter_config to get environment value from .env

Using environment_config to generate .env
```

# environment_config
## set up environment_config.yaml
vim environment_config.yaml
```
environment_config:
  path: environment_config.dart # optional, result file path against `lib/` folder
  dotenv_path: .env # optional, result file path for .env file against project root folder
  class: EnvironmentConfig # optional, class name
  dev_extension: # optional, by default undefined, allows to specify command option to use extension

  fields: # set of fields for command
    some_key: # key name
      type: # optional, default to 'String'
      short_name: # optional, short name for key during command run
      const: # optional, default to TRUE
      pattern: # optional, specified pattern for key value, use __VALUE__ to insert entered value anywhere in the pattern
      default: # optional, default value for key, if not provided key will be required during command run
      dotenv: # optional, default to FALSE, if this field should be added to .env file
      config_field: # optional, default to TRUE, if this field should be added to Dart file
      env_var: # optional, global environment variable name
      static: # options, default to TRUE, if this field should be static, if FALSE, `const` will be be ignored

  imports: # optional, array of imports, to include in config file
    - package:some_package

  extensions: # set of extensions for default field list
    some_extension: # extension name
      some_key:
        const: # optional, overrides `const` value for the field
        pattern: # optional, overrides `pattern` value for the field
        default: # optional, overrides `default` value for the field
        env_var: # optional, overrides `env_var` value for the field

    imports: # optional, adds set of imports to main configulration
      - package:some_other_package

```

## using file to general config file
```
flutter pub run environment_config:generate --config=path/to/file.yaml

```

## using extension to identify config mode
```
flutter pub run environment_config:generate --config-extension=dev
```


