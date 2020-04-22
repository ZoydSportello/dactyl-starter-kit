# Translation Information

Translating content for Dactyl works differently depending on the type of text being translated:

- _Documents_ (as in, Markdown files) should be translated in whole and provided as separate files in the `content` folder.
- _Messages_ (individual strings from the templates) are translated using locale files in this folder.

This README describes how to update the locale files for template _messages_.

## Overview

The templates can contain strings that are intended to be translated. These strings are marked off with `{% trans %}` and `{% endtrans %}` tags. You can't have any Jinja block control structures in these tags, but you can have some HTML markup and some basic Jinja variable-printing logic. See the [Jinja Documentation](https://jinja.palletsprojects.com/en/2.11.x/templates/#i18n-in-templates) for what's possible.

After you've done the initial setup, you

### Install Babel

The examples in this guide use the handy [Babel](http://babel.pocoo.org/) (`pybabel`) commandline utility, so you need Babel installed to manage the locale files:

```sh
sudo pip3 install Babel
```

You don't need Babel to build and view the site otherwise.

### Add a language

This repo has English (en) and Japanese (ja) locales set up by default. To add a language (do this from the repo top dir):

```sh
$ pybabel init -l ja -i ./locale/messages.pot -o ./locale/ja/LC_MESSAGES/messages.po
```

Instead of `ja` (in two places in the above line!!) use the locale code for the language you plan to add. There's no exhaustive, definitive list, but [this list of locale codes](https://www.science.co.il/language/Locale-codes.php) is a good starting place.

This creates a "PO" file (`./locale/ja/LC_MESSAGES/messages.po`) with empty translations for the strings in the templates, based on the "PO Template" file (`./locale/messages.pot`).

To actually add translations for strings, you need to edit the new PO file for this translation. You can edit the PO file file with a text editor, or use a more advanced tool if you're a pro. Don't change the `msgid` values, _do_ change the `msgstr` values.

When you're done translating, [compile the PO files](#compile-strings).

### Update Strings

If there are new or updated `{% trans %}` tags in the templates, first use this command to extract them:

```sh
$ pybabel extract -F ./locale/babel.cfg -o ./locale/messages.pot ./
```

Then, update _every_ language's `.po` files with the list of strings, as follows:

```sh
$ pybabel update -l en -d ./locale/ -i ./locale/messages.pot
```

The above example is for English (`-l en`). **Repeat for each language code.**

Now edit the PO files (for example, `locale/ja/LC_MESSAGES/messages.po`) to add translations for each newly-added string. Again, **repeat for each language.**

If you only want to change an existing translation for a given string that hasn't changed in the original, you can skip straight to editing the PO files without running any `update` or `extract` commands.

After you've edited all the PO files, be sure to [compile them](#compile-strings).

***TODO: I don't know what happens if you skip a language or don't translate the new strings.***

### Compile Strings

Whether you added a language, added new strings, or tweaked an existing translation, you must compile the PO files (text) to MO files (binary) to get Dactyl to use them.

To compile all PO files:

```sh
$ pybabel compile -f -d ./locale/
```

If you added a new language for the first time, you need to make sure its target definition (in the `dactyl-config.yml` file) has the MO file in the `locale_file` field. ***TODO: might be able to skip this part and automate choosing the locale file.***

After that, next time you build the site using Dactyl it should pull the updated translations!
