#!/bin/bash
# Replace YOUR_TOKEN_HERE with your actual GitHub Personal Access Token
# Then run: bash push_with_token.sh

TOKEN="YOUR_TOKEN_HERE"
git remote set-url origin https://Prathyushapritila:${TOKEN}@github.com/Prathyushapritila/Abhi_Construction.git
git push -u origin main

