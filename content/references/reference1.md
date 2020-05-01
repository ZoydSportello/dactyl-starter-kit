---
category: References
parent: references/
html: references/placeholder/
---
# Reference Placeholder

[References](/references) are exhaustive lists of information. For example, an API reference should list all methods, fields, types of values, special cases, and error information.

Depending on the size of your API, you may want to split this information into separate pages.

## Page Definition

Each page definition in your Dactyl config file's `pages` array can have the following fields:

| Field                    | Type      | Description                           |
|:-------------------------|:----------|:--------------------------------------|
| `targets`                | Array     | The short names of the targets that should include this page. |
| `html`                   | String    | _(Optional)_ The filename where this file should be written in the output directory. If omitted, Dactyl chooses a filename based on the `md` field (if provided), the `name` field (if provided), or the current time (as a last resort). By default, generated filenames flatten the folder structure of the md files. To instead replicate the folder structure of the source documents in auto-generated filenames, add `flatten_default_html_paths: true` to the top level of your Dactyl config file. |
| `name`                   | String    | _(Optional)_ Human-readable display name for this page. If omitted but `md` is provided, Dactyl tries to guess the right file name by looking at the first two lines of the `md` source file. |
| `md`                     | String    | _(Optional)_ The markdown filename to parse to generate this page, relative to the **content_path** in your config. If this is not provided, the source file is assumed to be empty. (You might do that if you use a nonstandard `template` for this page.) |
| `openapi_specification`  | String    | _(Optional)_ The file path or http(s) URL to an OpenAPI v3.0 specification to be parsed into generated documentation. If provided, this entry becomes expanded into a set of several pages that describe the methods and data types defined for the given API. The generated pages inherit the other fields of this page object. **Experimental.** If the path is a relative path, it is evaluated based on the directory Dactyl is called from, not the content directory. |
| `api_slug`               | String    | _(Optional)_ If this is an `openapi_specification` entry,
| `category` | String | _(Optional)_ The name of a category to group this page into. This is used by Dactyl's built-in templates to organize the table of contents. |
| `template`               | String    | _(Optional)_ The filename of a custom [Jinja][] HTML template to use when building this page for HTML, relative to the **template_path** in your config. |
| `pdf_template`           | String    | _(Optional)_ The filename of a custom [Jinja][] HTML template to use when building this page for PDF, relative to the **template_path** in your config. |
| `openapi_md_template_path` | String | _(Optional)_ Path to a folder containing [templates to be used for OpenAPI spec parsing](#openapi-spec-templates). If omitted, use the [built-in templates](dactyl/templates/).
| ...                      | (Various) | Additional arbitrary key-value pairs as desired. These values can be used by templates or pre-processing. |

[Jinja]: http://jinja.pocoo.org/


### Bonus Fields

The following fields are automatically added after a page has been parsed to HTML. (They're not available when preprocessing or rendering Markdown to HTML, but _are_ available when rendering HTML templates.)

| Field                    | Type      | Description                           |
|:-------------------------|:----------|:--------------------------------------|
| `plaintext` | String     | A plaintext-only version of the page's markdown content, with all Markdown and HTML syntax removed. |
| `headermap` | Dictionary | A mapping of the page's headers to the unique IDs of those headers in the generated HTML version. |
| `blurb`     | String     | An introductory blurb generated from the page's first paragraph of text. |
| `children`  | List       | A list of pages, in order of appearance, that refer to this page as their `parent`. Each of these "child" pages is a reference to the page definition (dictionary) for that child. |
| `is_ancestor_of` | Function | A function that takes one argument, the string identifying a potential child page by that child's `html` field. This function returns `True` if this page is a direct or indirect parent of the child page. |


## Pre-processing

Dactyl pre-processes Markdown files by treating them as [Jinja][] Templates, so you can use [Jinja's templating syntax](http://jinja.pocoo.org/docs/dev/templates/) to do advanced stuff like include other files or pull in variables from the config or commandline. Dactyl passes the following fields to Markdown files when it pre-processes them:

| Field             | Value                                                    |
|:------------------|:---------------------------------------------------------|
| `target`          | The [target](#targets) definition of the current target. |
| `pages`           | The [array of page definitions](#pages) in the current target. Use this to generate navigation across pages. (The default templates don't do this, but you should.) |
| `currentpage`     | The definition of the page currently being rendered.     |
| `categories`      | A de-duplicated array of categories that are used by at least one page in this target, sorted in the order they first appear. |
| `config`          | The global Dactyl config object. |
| `content`         | The parsed HTML content of the page currently being rendered. |
| `current_time`    | The current date as of rendering. The format is YYYY-MM-DD by default; you can also set the `time_format` field to a custom [stftime format string](http://strftime.org/). |
| `mode`            | The output format: either `html` (default), `pdf`, or `md`. |
