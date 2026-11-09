# Project Rules — marmuftech.com

## 0. Rule Inheritance Reference
This project strictly inherits all global workspace standards, UI/UX responsiveness rules, security guidelines, and server credentials defined in:
- **Primary Global Rules:** [`P:\global-rules.md`](P:/global-rules.md)
- **Local Fallback:** [`projects/.agents/rules/global-rules.md`](../.agents/rules/global-rules.md)

---

## 1. Project Overview & Architecture
- **Project Name:** `marmuftech.com`
- **Location:** `C:\Users\sarav\Desktop\jagan\projects\marmuftech.com`
- **GitHub Repository:** `https://github.com/saravanajagan007/marmuftech.com`
- **Live Production URL:** `https://marmuftech.cloudcrafts.net`
- **VPS app path:** `/srv/apps/marmuftech.cloudcrafts.net`
- **Processes:** pm2 `marmuftech-web` on port 3021 and `marmuftech-api` on port 4021
- **Nginx site file:** `/srv/docker/nginx/conf.d/marmuftech.cloudcrafts.net.conf`, baked into the `srv-nginx` image

---

## 2. Mandatory Git & Access Directives
- **Automatic Git Pull On Access:** Whenever this project workspace directory is accessed by an AI assistant CLI or model, `git pull` MUST be executed immediately before reading, modifying, or building.
- **Git Sync for Rules:** When updating `rules.md`, stage ONLY `rules.md` (`git add rules.md`), commit with `chore: sync custom workspace rules`, and push to the active remote branch.
