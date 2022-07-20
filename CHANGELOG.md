# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog][keep-a-changelog], and this project adheres to [Semantic Versioning][semver].


<!-- ## [Unreleased] -->

<!-- ## [0.6.0] - 2022-07-19 -->
### Added
- Add `react-helmet` dependency for meta tags
### Fixed
- Assorted style fixes


## [0.5.2] - 2022-07-17
- Fixes to new mobile pages


## [0.5.1] - 2022-07-17
- Fixes to new mobile pages

## [0.5.0] - 2022-07-17
- Testing out new mobile styles & components


## [0.4.1] - 2022-07-14
### Added
- Add side navigation
- Add persisted state (you can close the page and come back and not lose progress)
- Add custom context menus for equipment slots
- Add tooltips for items in armor & talisman grids
- Add *Status* page
- Add *Settings* page
- Add custom cursor styles
- Begin work on mobile styles
### Fixed
- Improve behavior of affinity select:
    - Add functionality to *Undo Enhancement* button
    - Persist current affinity when changing affinity for the current weapon skill
### Changed
- Improve *About* page
- Update routes; begin moving components to individual pages
- Various minor changes


## [0.3.0] - 2022-07-08
### Changed
- Use [keen-slider][keen-slider] for the starting class menu
- Update deployment script


## [0.2.1] - 2022-07-07
### Changed
- Output big data file as json; much faster


## [0.2.0] - 2022-07-07
### Added
- Set starting equipment after confirming starting class
### Fixed
- Fix scrolling behavior on starting class page
- Fix issue allowing attribute levels to be lowered below zero
### Changed
- Include data in client build instead of fetching from server
- Update readme
- Other assorted changes


## [0.1.0] - 2022-07-04
- Initial release


<!-- ======================================================================= -->
<!-- Links                                                                   -->
<!-- ======================================================================= -->

[keep-a-changelog]: https://keepachangelog.com/en/1.0.0/
[semver]: https://semver.org/spec/v2.0.0.html
[keen-slider]: https://github.com/rcbyr/keen-slider
