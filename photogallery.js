const imageFilenames = [
  "image1.webp",
  "image2.webp",
  "image3.webp",
  "image4.webp",
  "image5.webp",
  "image6.webp",
  "image7.webp",
  "image8.webp",
  "image9.webp",
  "image10.webp",
  "image11.webp",
];

const gallery = document.getElementById("photo-gallery");


imageFilenames.sort(() => Math.random() - 0.5); // Shuffle the array
// Shuffle the array
imageFilenames.forEach((filename) => {
  const container = document.createElement("div");
  container.className = "project-item";

  container.innerHTML = `
    <div class="project-header">
      <h3></h3>
      <div class="star">✱</div>
    </div>
    <img
      class="project-image"
      src="assets/images/photography/${filename}"
      alt="Photo"
    />
  `;

  gallery.appendChild(container);
});