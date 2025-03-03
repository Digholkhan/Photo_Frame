document
  .getElementById("imageInput")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        document.getElementById("previewImage").src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });

document.getElementById("nameInput").addEventListener("input", function () {
  document.getElementById("previewName").textContent = this.value;
});

document.getElementById("batchInput").addEventListener("input", function () {
  document.getElementById("previewBatch").textContent = "Batch: " + this.value;
});

document.getElementById("wishInput").addEventListener("input", function () {
  document.getElementById("previewWish").textContent = this.value;
});

document.getElementById("downloadBtn").addEventListener("click", function () {
  html2canvas(document.getElementById("preview")).then((canvas) => {
    const link = document.createElement("a");
    link.download = "frame.png";
    link.href = canvas.toDataURL();
    link.click();
  });
});
