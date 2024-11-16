#### Remember to add

For some reason, this is always missing from the Gemfile.lock file. To add it, run the following command:

```bash
bundle lock --add-platform x86_64-linux
```

#### Prettier

```bash
npx prettier . --check
```

```bash
npx prettier . --write
```
