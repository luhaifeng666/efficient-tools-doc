<!--
 * @Author: luhaifeng666 youzui@hotmail.com
 * @Date: 2022-08-18 15:00:22
 * @LastEditors: luhaifeng666
 * @LastEditTime: 2022-08-18 15:37:04
 * @Description: 
-->

# Getting started

The [efficient-tools](https://www.npmjs.com/package/efficient-tools) is a toolset that contains some gadgets. It provides three tools now.
This section will list all tools and their commands.

## Installation

### npm

```bash
npm i -g efficient-tools
```

### yarn

```bash
yarn global add efficient-tools
```

### cnpm

```bash
cnpm install efficient-tools -g
```

## Usage

### ET-Link

A tool to help you open a link quickly.

```bash
Usage: etl [options]

Options:
  -v, --version              output the version number
  -o, --open <key>           open an address
  -a, --add <address> [key]  add an address
  -r, --remove <key...>      remove an address
  -l, --list                 show all addresses
  -c, --check <key>          show an address and its QRcode
  -e, --empty                delete all addresses
  -d, --derive               export all addresses to the target file
  -i, --init <filePath>      insert addresses to local
  -m, --modify               modify name or address
  -w, --where                show the path of the configuration file
  --directory                set custom filepath
  -h, --help                 display help for command
```

### ET-Dictionary

A tool for translation.

:::tip
This command has supported the [Youdai translation API](https://ai.youdao.com/#/) and the [Microsoft translation API](https://docs.microsoft.com/zh-cn/azure/cognitive-services/translator/quickstart-translator?tabs=csharp)🥳!!

You can switch the translation service by etd --service command.
:::

```bash
Usage: etd [options]

Options:
  -v, --version    output the version number
  -c, --config     setup your translation service's configurations
  -l, --language   list all supported languages
  -t, --translate  translate
  -s, --set        set translation rule(from A to B)
  --service        set or switch the type of translation service
  -r, --rule       print current translation rule
  -h, --help       display help for command
```

### ET-Pictures

A tool for you to compress images by [Tiny png API](https://tinypng.com).

:::tip
Before using it, you need to browse to [https://tinypng.com/developers](https://tinypng.com/developers) to get your `API KEY` first!
:::

You can choose any `WebP, JPEG(JPG) or PNG` image to compress it.

```bash
Usage: etp [options]

Options:
  -v, --version   output the version number
  -s, --set       set your API key
  -c, --compress  image compression
  -h, --help      display help for command
```
