/**
 * Helper to handle image and asset paths for GitHub Pages deployment with basePath.
 * 
 * When deploying to GitHub Pages at a subpath (e.g., /FFC_Single_Page_Template/),
 * relative paths like "/logo.png" will fail because they point to the root.
 * 
 * This helper prepends the basePath from NEXT_PUBLIC_BASE_PATH environment variable
 * to ensure assets load correctly on both the custom domain and any GitHub Pages subpath.
 * 
 * @param path The relative path to the asset (must start with /)
 * @returns The absolute path including the basePath
 */
export function assetPath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  
  // Ensure we don't end up with // if path starts with /
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  
  return `${basePath}${cleanPath}`;
}
