// JSON can't use ES imports, so resolve raw path strings against Vite's bundled images.
const projectImages = import.meta.glob("../img/projects/**/*", {
  eager: true,
  import: "default",
});
const projectTitleImages = import.meta.glob("../img/titles/**/*", {
  eager: true,
  import: "default",
});
const caseImages = import.meta.glob("../img/cases/**/*", {
  eager: true,
  import: "default",
});

function resolve(images, path) {
  if (!path) return null;
  const entries = Object.entries(images);
  const fullPath = path.toLowerCase();
  const filename = fullPath.split("/").pop();
  const match =
    entries.find(([key]) => key.toLowerCase() === fullPath) ??
    entries.find(([key]) => key.toLowerCase().split("/").pop() === filename);
  return match ? match[1] : path;
}

export const getProjectImage = (path) => resolve(projectImages, path);
export const getProjectTitleImage = (path) => resolve(projectTitleImages, path);
export const getCaseImage = (path) => resolve(caseImages, path);
