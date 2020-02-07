# Dactyl Starter Kit

This is a repository template that provides a basis for documentation projects using [Dactyl](https://github.com/ripple/dactyl/). This "opinionated" standard for a documentation site can be styled for different aesthetics while providing a consistent functional experience for users and a consistent editing experience for contributors.

The contents of the Dactyl Starter Kit are as follows:

- **Templates:** These provide a solid foundation for navigating a documentation site. The left navigation provides a hierarchical, collapsible view of pages while the right navigation contains a scrollspy-enabled table of contents for the current page. They're modular so you can customize parts that are specific to your site, while using common standards for things that make sense.
- **Styles:** The included styles make sure that the templates display properly and the content works well for documentation that's built from Markdown. For example, links in the middle of paragraphs should be underlined so users can find them, tables should have borders, and list items and paragraphs should have consistent spacing. The styles also make sure Dactyl features like callouts and code tabs look and work right. These styles are specially isolated to minimize the risk of clashes with custom styles for the unique parts of the site.
- **Scripts:** The included JavaScript bits do syntax highlighting,
- **Continuous Integration:** The included GitHub Actions workflow files should allow automatic building, link checking, style checking, and more directly in GitHub. (GitHub Actions support required.)
- **Repo Structure:** This repo represents a skeleton you can fork to build a new Dactyl-powered website, with the config and folders already in place. The folders and templates work together to handle the hierarchy for the site.
- **Analytics:** The default templates use Google Tag Manager for collecting usage data and include advanced features such as tagging content by category and page type.
- **Internationalization:** The config has places for strings files and optional template pieces for multiple language support.

This repository (will be) published under a permissive open-source license such as MIT.
