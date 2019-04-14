export const imports = {
  'src/docs/Link.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-docs-link" */ 'src/docs/Link.mdx'
    ),
  'src/docs/button.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-docs-button" */ 'src/docs/button.mdx'
    ),
  'src/docs/cool-kids.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-docs-cool-kids" */ 'src/docs/cool-kids.mdx'
    ),
  'src/docs/greet.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-docs-greet" */ 'src/docs/greet.mdx'
    ),
  'src/docs/javascript.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-docs-javascript" */ 'src/docs/javascript.mdx'
    ),
}
