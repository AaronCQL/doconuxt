# Page Routing

The page routing mirrors the directory structure within the `/content` directory.

Any `index.md` file will be routed as the root of the directory. For example, with the following directory structure:

```
content
├── index.md
├── welcome.md
└── nested
    ├── index.md
    └── hello.md
```

The page routes will be transformed as such:

|   Relative Path    |   Page Route    |
| :----------------: | :-------------: |
|    `/index.md`     |       `/`       |
|   `/welcome.md`    |   `/welcome`    |
| `/nested/index.md` |    `/nested`    |
| `/nested/hello.md` | `/nested/hello` |

Internally, every route with a trailing `/index` will be redirected to a route without it. For example, assuming you are developing locally, the route at `localhost:3000/index` will be redirected to `localhost:3000`.
