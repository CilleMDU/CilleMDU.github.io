import cases from "../Data/cases.json";

export const CASE_CATEGORIES = {
  research: "Research",
  optimization: "Optimization",
  afterthought: "Afterthought",
};

export const findCase = (slug) => cases.find((item) => String(item.id) === slug);

export const getCaseRectangle = (caseItem) =>
  caseItem.imageRectangle ?? caseItem.imageLandscape;

export const getCaseSolution = (caseItem, category) =>
  caseItem.solution?.find((item) => item.category === category);

// Galleries are matched on the category name, or on the solution title
// (e.g. the "Research" solution is titled "Initial review").
export function getCaseGallery(caseItem, category) {
  const solution = getCaseSolution(caseItem, category);
  return caseItem.imageGallery?.find(
    (item) => item.category === category || item.category === solution?.title,
  );
}

// Each slide is one entry of the gallery; before/after style entries become a
// slide with several labelled images shown side by side.
export function getGallerySlides(gallery) {
  return (gallery?.images ?? []).map((image, index) => {
    if (typeof image === "string") {
      return { key: `${index}`, media: [{ label: "", src: image }] };
    }

    const media = Object.entries(image).flatMap(([label, paths]) =>
      (Array.isArray(paths) ? paths : [paths]).map((src) => ({
        label: label.replace(/:$/, ""),
        src,
      })),
    );
    return { key: `${index}`, media };
  });
}
