import { spawnSync } from "node:child_process";
import { existsSync, renameSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const apiDir = join(process.cwd(), "src/app/api");
const apiBackup = join(process.cwd(), ".api-backup");

function runBuild() {
  const result = spawnSync("npx", ["next", "build"], {
    stdio: "inherit",
    env: process.env,
    shell: true,
  });
  return result.status ?? 1;
}

if (isGitHubPages && existsSync(apiDir)) {
  if (existsSync(apiBackup)) {
    spawnSync("rm", ["-rf", apiBackup], { shell: true });
  }
  renameSync(apiDir, apiBackup);
}

let code = 1;
try {
  code = runBuild();
} finally {
  if (isGitHubPages && existsSync(apiBackup) && !existsSync(apiDir)) {
    renameSync(apiBackup, apiDir);
  } else if (isGitHubPages && existsSync(apiBackup) && existsSync(apiDir)) {
    // build may have recreated empty tree; restore backup
    spawnSync("rm", ["-rf", apiDir], { shell: true });
    renameSync(apiBackup, apiDir);
  }
}

process.exit(code);
