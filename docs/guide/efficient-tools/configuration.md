<!--
 * @Author: luhaifeng666 youzui@hotmail.com
 * @Date: 2022-08-18 15:00:31
 * @LastEditors: luhaifeng666
 * @LastEditTime: 2022-08-18 17:19:54
 * @Description: 
-->
# Configuration

This section will show you all configurations and how to export or restore them.

## Configuration keys

| Attributes        | Description           |
| ------------- |:-------------:|
| APP_ID      | Youdao translation service app id. |
| SECRET_KEY     | Youdao translation service secret key.      |
| MICROSOFT_SECRET_KEY | Microsoft translation service secret key.      |
| MIRCOSOFT_LOCATION | Microsoft translation service location.      |
| TRANSLATOR_SERVICE_TYPE | Translator service type.      |
| FROM | Which language you wanna translate from.      |
| TO | Which language you wanna translate into.      |
| TINIFY_API_KEY | Tiny png developer's api key.      |

## ET-Config

After updating the ET package, the configurations that configured before always gone. But now, you can backup the configurations by `etc -e` command before updating the package, and then, according to the `etc -i` command to restore them after updating.🥳🥳

```bash
Usage: etc [options]

Options:
  -v, --version  output the version number
  -i, --init     init ET configuration
  -e, --export   export ET configuration
  -h, --help     display help for command
```
