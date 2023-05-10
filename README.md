# OPRA - An RPI Mentor Matching project

[ description ]

<hr>

## Initial Project Setup
```
npm install
```

## Run Local Development Server
```
npm run serve
```

## GitHub Pages Deployment Steps

1. Run `npm run build`. This creates the /dist directory for deployment.
2. Run `git add dist && git commit -m 'dist subtree'`. This will add the new /dist folder to the active commit.
3. Run `git subtree push --prefix dist origin gh-pages`. This pushes the contents of /dist to the *gh-pages* branch.