/**
 * Get image path with basePath for production
 */
export const getImgPath = (path: string): string => {
  if (typeof window === "undefined") {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
    return basePath ? `${basePath}${path}` : path;
  }
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return basePath ? `${basePath}${path}` : path;
};
