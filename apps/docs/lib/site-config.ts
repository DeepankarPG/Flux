/**
 * Public UI docs — branding and outbound links.
 *
 * Env (Vercel / .env.local):
 * - NEXT_PUBLIC_UI_DOCS_GITHUB_URL — repo URL for the header icon
 * - NEXT_PUBLIC_UI_DOCS_SITE_URL — canonical URL for metadata (optional)
 */

export const UI_DOCS_NAME = "Flux UI";
export const UI_DOCS_TAGLINE = "Open design system for modern products";

export function getGitHubUrl(): string {
  if (typeof process !== "undefined" && process.env.NEXT_PUBLIC_UI_DOCS_GITHUB_URL) {
    return process.env.NEXT_PUBLIC_UI_DOCS_GITHUB_URL;
  }
  return "https://github.com/PayGlocal-Technologies/Flux";
}

export function getNpmInstallCommand(): string {
  return "npm install @payglocal_ui/flux-ui";
}
