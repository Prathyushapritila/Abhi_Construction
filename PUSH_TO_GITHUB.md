# Push to GitHub - Step by Step

## Option 1: If you already created the GitHub repository

Replace `YOUR_USERNAME` and `REPO_NAME` with your actual values, then run:

```bash
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main
```

## Option 2: Create repository and push (if not created yet)

1. Go to https://github.com/new
2. Repository name: `abhi-constructions`
3. Make it Public or Private
4. **DO NOT** check "Initialize with README"
5. Click "Create repository"
6. Then run the commands above

## Common Issues:

- **If you get "remote origin already exists":**
  ```bash
  git remote remove origin
  git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
  ```

- **If you get authentication errors:**
  - Use GitHub Personal Access Token instead of password
  - Or use SSH: `git@github.com:YOUR_USERNAME/REPO_NAME.git`

