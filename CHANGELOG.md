# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog][keep-a-changelog], and this project adheres to [Semantic Versioning][semver].


## [Unreleased]
### Added
- Add `CharacterStatus` feature
- Add initial audio features
### Fixed
- Update mobile dialog styles
- Remove console.log statement in viewport context


## [0.7.0] - 2022-08-08
### Added
- Add `soundsEnabled` to core state
### Fixed
- Disable redux devtools in production
- Fix links in `CHANGELOG.md`
- Fix starting class menu on mobile
- Fix mobile styles on starting menu page


## [0.6.2] - 2022-07-30
### Fixed 
- Fixed new deployment script


## [0.6.1] - 2022-07-30
### Added
- Add GitHub issue templates
- Add cross-platform deployment scripts
- Begin work on custom scroll-bars
### Changed 
- Rename folder `right-side-panels` to `character-status`
- Evenly distribute rows in main equipment detail section
- Sync styles for both *Character Status* panels


## [0.6.0] - 2022-07-19
### Added
- Add `react-helmet` dependency for meta tags
### Changed
- Update about page
- Update webpack config (use separate *.env* files for dev/prod)
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


[keep-a-changelog]: https://keepachangelog.com/en/1.0.0/
[semver]: https://semver.org/spec/v2.0.0.html
[keen-slider]: https://github.com/rcbyr/keen-slider
[usehooks-ts]: https://github.com/juliencrn/usehooks-ts
[react-hotkeys-hook]: https://github.com/JohannesKlauss/react-hotkeys-hook

[Unreleased]: https://github.com/olivierlacan/keep-a-changelog/compare/v0.7.0...HEAD
[0.7.0]: https://github.com/tcd/elden-ring-app/compare/v0.6.2...v0.7.0
[0.6.2]: https://github.com/tcd/elden-ring-app/compare/v0.6.1...v0.6.2 
[0.6.1]: https://github.com/tcd/elden-ring-app/compare/v0.6.0...v0.6.1 
[0.6.0]: https://github.com/tcd/elden-ring-app/compare/v0.5.2...v0.6.0 
[0.5.2]: https://github.com/tcd/elden-ring-app/compare/v0.5.1...v0.5.2 
[0.5.1]: https://github.com/tcd/elden-ring-app/compare/v0.5.0...v0.5.1 
[0.5.0]: https://github.com/tcd/elden-ring-app/compare/v0.4.1...v0.5.0 
[0.4.1]: https://github.com/tcd/elden-ring-app/compare/v0.3.0...v0.4.1 
[0.3.0]: https://github.com/tcd/elden-ring-app/compare/v0.2.1...v0.3.0 
[0.2.1]: https://github.com/tcd/elden-ring-app/compare/v0.2.0...v0.2.1 
[0.2.0]: https://github.com/tcd/elden-ring-app/compare/v0.1.0...v0.2.0 
[0.1.0]: https://github.com/tcd/elden-ring-app/releases/v0.1.0
