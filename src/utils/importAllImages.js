// src/utils/importAllImages.js

function importAll(r) {
  let images = {};
  Object.keys(r).forEach((item) => {
    images[item.replace("./", "")] = r[item].default;
  });
  return images;
}

const images = importAll(
  import.meta.glob("../assets/images/guide-images/*.{png,jpg,jpeg,svg}", {
    eager: true,
  })
);

export default images;
