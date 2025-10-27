/**
 * Get image path with basePath for production
 * In development, returns the path as-is. In production, adds the basePath prefix.
 */
export const getImgPath = (path: string): string => {
  // In static export, NEXT_PUBLIC_BASE_PATH is set at build time
  // Empty string in dev, "/Resume-Nextjs" in production
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  // If basePath is empty (dev mode), return path as-is
  if (!basePath) {
    return path;
  }

  // If path already starts with basePath, return as-is
  if (path.startsWith(basePath)) {
    return path;
  }

  // Add basePath prefix
  return `${basePath}${path}`;
};
