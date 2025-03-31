const imageFilenames = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg",
  "image4.jpg",
  "image5.jpg",
  "image6.jpg",
  "image7.jpg",
  "image8.jpg",
  "image9.jpg",
  "image10.jpg",
  "image11.jpg",
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