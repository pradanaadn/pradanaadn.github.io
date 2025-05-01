export function getPath(path: string): string {
  const basePath = import.meta.env.BASE_URL || "";
  const cleanPath = path.replace(/^\//, "");
  if (basePath.endsWith("/")) {
    return `${basePath}${cleanPath}`;
  }

  return basePath ? `${basePath}/${cleanPath}` : `/${cleanPath}`;
}
