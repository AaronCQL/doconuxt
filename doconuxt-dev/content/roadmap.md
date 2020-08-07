# Roadmap

## Goals

- Plug and play solution for creating documentation in markdown
  - With possible option to eject the theme and customise
- Opinionated but as customisable as is needed
- Contains commonly used components

## Todos

### Major

- [x] Mobile responsiveness
- [x] Themes with [Nuxt color mode](https://nuxtjs.org/blog/going-dark-with-nuxtjs-color-mode/)
- [x] Prism themes for code syntax highlighting
- [x] Rework main layout?
- [x] VuePress like directory structure and behaviour for `content`
- [ ] Locale/language picker for i18n support
- [ ] Options merging with user defined configurations in `nuxt.config.js`

### Minor

- [x] External links should have target `_blank` to open in another tab
- [x] Inline code with class `select-all` for easy copy pasta
- [x] Style class `contains-task-list` (this list!) properly
- [x] Style tables properly
- [x] Scroll to header anchor functionality
  - [x] Properly offset and scroll to element
- [x] In `default` layout, use Vuex and `nuxtServerInit` to get `content` changes to [support Dev mode hot reload](https://content.nuxtjs.org/advanced#handling-hot-reload)
- [ ] Test out full suite of markdown styles
- [ ] [Search functionality](https://content.nuxtjs.org/examples#search)
- [ ] Table of contents for current page
- [ ] Code block
  - [x] Style filename properly
  - [ ] Include way to copy code block
  - [ ] Add line highlighting
- [ ] Style checkbox properly
- [ ] Handle and style 404 not found errors
- [x] User customisable side nav
- [ ] User customisable top nav

### Components

- [x] Custom alert blocks
- [ ] Directory structure tree
- [ ] Spoiler block
- [ ] Panel block (for different code languages)

### Future

- [ ] Developer and user guide
- [ ] Landing page
