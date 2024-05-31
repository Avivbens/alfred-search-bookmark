# Contributing to `alfred-search-bookmark`

Thank you for your interest in contributing to `alfred-search-bookmark` :tada: !

We welcome contributions from everyone.

## Getting Started

To get started, follow these steps:

1. Fork the repository
1. Clone your forked repository
1. Install dependencies with `npm ci --no-fund --no-audit --no-progress`
1. Make changes
1. Test your changes locally:

```bash
npm run pack
(cd esbuild && open .)

# Double-click on the generated `alfred-search-bookmark.alfredworkflow` file
```

6. Review your changes with your Alfred app

### Consistent Development Environment :ninja:

You can use the following command, in order to trigger build & pack for each save :sparkles:

```bash
find ./src -type f -name "*.ts" | entr -s "npm run pack"
```

<br>

## Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification. Make sure your commit messages follow the format below:

```git
<type>(optional scope): <description>
```

Available types:

1. `fix` - bug fixes, e.g. fix linting errors
1. `feat` - new features, e.g. add new command
1. `docs` - changes to documentation
1. For breaking changes, add a `BREAKING CHANGE` section to the commit message body:

```git
feat: <description>

BREAKING CHANGE: <description>
```

## Contact

If you have any questions or concerns, please contact us at avivbens87@gmail.com.

Happy contributing!
