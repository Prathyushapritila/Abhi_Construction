# Push Code to GitHub - Instructions

## Step 1: Create GitHub Personal Access Token

1. Go to: https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Name: "Abhi Construction Deploy"
4. Expiration: Choose your preference (90 days recommended)
5. Select scopes: ✅ **repo** (check the entire repo checkbox)
6. Click "Generate token"
7. **COPY THE TOKEN** (you won't see it again!)

## Step 2: Push Code

Run this command:
```bash
git push -u origin main
```

When prompted:
- **Username:** Prathyushapritila (or your GitHub username)
- **Password:** Paste your Personal Access Token (NOT your GitHub password)

---

## Alternative: Use SSH (More Secure)

If you prefer SSH:

1. **Check if you have SSH key:**
   ```bash
   ls -la ~/.ssh
   ```

2. **If no SSH key, generate one:**
   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```
   (Press Enter to accept defaults)

3. **Add SSH key to GitHub:**
   ```bash
   cat ~/.ssh/id_ed25519.pub
   ```
   Copy the output, then:
   - Go to https://github.com/settings/keys
   - Click "New SSH key"
   - Paste the key and save

4. **Change remote to SSH:**
   ```bash
   git remote set-url origin git@github.com:Prathyushapritila/Abhi_Construction.git
   git push -u origin main
   ```

---

## If You Still Get Permission Denied

Make sure:
- ✅ You're logged into GitHub with the correct account (Prathyushapritila)
- ✅ You have write access to the repository
- ✅ The repository exists and isn't archived
- ✅ You're using the Personal Access Token (not password)

