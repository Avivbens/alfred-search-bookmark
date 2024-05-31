WORKFLOW_NAME=$(jq -r '.name' package.json)

# bundle all code
npm run esbuild

# pack to Alfred Workflow
zip -9 -r "esbuild/$WORKFLOW_NAME.alfredworkflow" *.png *.plist README.md esbuild/** package.json