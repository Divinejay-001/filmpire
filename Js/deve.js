const images = [
    "/assets/Snapchat-248508878.jpg",
    "/assets/Snapchat-398784111.jpg",
      "/assets/Snapchat-1603294518.jpg",
      "/assets/Snapchat-162961214.jpg",
      "/assets/Snapchat-514942064.jpg",
      "/assets/Snapchat-708917003.jpg",
      "/assets/Snapchat-1826920176.jpg",
      "/assets/Snapchat-1545811714.jpg"
  ];
  
  const imgElement = document.querySelector(".img");
  let currentIndex = 0;
  
  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    imgElement.src = images[currentIndex];
  }, 5000); // Change image every 30 seconds
  
  