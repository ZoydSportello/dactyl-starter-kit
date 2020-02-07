# Dactyl Starter Kit

This is a repository template that provides a basis for documentation projects using [Dactyl](https://github.com/ripple/dactyl/). This "opinionated" standard for a documentation site can be styled for different aesthetics while providing a consistent functional experience for users and a consistent editing experience for contributors.

The contents of the Dactyl Starter Kit are as follows:

- **Templates:** These provide a solid foundation for navigating a documentation site.  They're modular so you can customize parts that are specific to your site, while using common standards for things that make sense. Template features include:
    - The left navigation provides a hierarchical, collapsible view of pages (capable of at least 5 levels deep). The breadcrumbs in the center column reflect the same hierarchy.
    - The right navigation contains a scrollspy-enabled table of contents for the current page.
    - There are reusable template blocks for things like showing a table of page children or curated links within a page.
    - There are premade ways to add hard-coded links to navigation elements, or omit pages from automatically-generated navigation.
    - "Edit on GitHub" button with minimal configuration.
    - After you fork from this project, you should be able to pull in updates and new features without breaking your own navigation.
    - Automatic "Related Pages" navigation based on metadata tags connects related content that's distant in the hierarchy.
    - Toolbox for making interactive tutorials with in-browser code.
    - "Lightboxing" so you can click on any large image to expand it to full size within the same page.
- **Styles:** The included styles make sure that the templates display properly and the content works well for documentation that's built from Markdown. Specifically:
    - Content is optimized for reading. For example, links in the middle of paragraphs should be underlined so users can find them, tables should have borders, and list items and paragraphs should have consistent spacing.
    - Content styles are isolated to minimize the risk of clashes with custom styles for the unique parts of a site.
    - Enables Dactyl features like callouts and code tabs out of the box, while allowing you to customize those features' look and feel.
    - Print styles support quality PDF export.
- **Scripts:** The included JavaScript bits do syntax highlighting, interactive bits like tabs, and a "jump to top" link, and so on.
- **Continuous Integration:** The included GitHub Actions workflow files should allow automatic building, link checking, style checking, and more directly in GitHub. (GitHub Actions support required.)
- **Repo Structure:** This repo represents a skeleton you can fork to build a new Dactyl-powered website, with the config and folders already in place. The folders and templates work together to handle the hierarchy for the site.
- **Analytics:** The default templates use Google Tag Manager for collecting usage data and include advanced features such as tagging content by category and page type.
- **Internationalization:** The config has places for strings files and optional template pieces for multiple language support.

This repository (will be) published under a permissive open-source license such as MIT.
