// JSON can't use ES imports, so resolve raw path strings against Vite's bundled images.
const projectImages = import.meta.glob("../img/projects/**/*", {
  eager: true,
  import: "default",
});
const projectTitleImages = import.meta.glob("../img/titles/**/*", {
  eager: true,
  import: "default",
});

function resolve(images, path) {
  if (!path) return null;
  const filename = path.split("/").pop();
  const match = Object.entries(images).find(([key]) => key.endsWith(filename));
  return match ? match[1] : path;
}

export const getProjectImage = (path) => resolve(projectImages, path);
export const getProjectTitleImage = (path) => resolve(projectTitleImages, path);
