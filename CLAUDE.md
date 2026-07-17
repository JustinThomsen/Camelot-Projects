# Claude Code Environment

## Environment Setup

### Detected Runtimes

- **node**: .nvmrc (24.18.0)

### Package Managers

- **npm**: package.json with package-lock.json

### SessionStart Hooks

The following commands run automatically when a Claude Code session starts:

```bash
nvm install
```
*Install Node.js from .nvmrc (24.18.0)*

```bash
npm ci
```
```
*Install Node.js dependencies with package-lock.json*

## Agentic Continuous Delivery (ACD)

To comply with Agentic Continuous Delivery (ACD) practices (as defined by [MinimumCD](https://beyond.minimumcd.org/docs/agentic-cd/)), all agents operating in this workspace must strictly follow these rules:

### 1. The Delivery Contract
* **No Direct Promotion:** Agents do not have autonomy to deploy directly or merge to `main`. All changes must be submitted via Pull Requests.
* **Spec/Test-Driven Development (TDD):** Every implementation change must have an accompanying test (defined before or alongside the code) validating its behavior.

### 2. Mandatory Pre-Flight Validation
Before marking any task as complete or requesting human review, the agent **MUST** run the local validation pipeline and verify it passes:
```bash
npx biome check && npm test && npm run build
```
Any failing test, lint warning, or build error is a blocker and must be resolved.

### 3. Setup Version Locking
Workspace setups are automated and pinned. If dependencies or actions are added, the `.github/workflows/copilot-setup-steps.yml` workflow must be updated with pinned commit SHAs.

