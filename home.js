document.getElementById("searchButton").addEventListener("click", function () {
  let searchValue = document.getElementById("searchInput").value.trim(); //Trim Removes Extra Spaces

  if (searchValue === "") {
    alert("Search field cannot be empty!");
  } else {
    // Proceed with the search logic
    console.log("Searching for:", searchValue);
    // You can redirect or fetch results based on the input
  }
});

// Disable Right-Click (Context Menu)

// document.addEventListener("contextmenu", function (event) {
//   event.preventDefault();
// });

// // Disable Ctrl + C, Ctrl + V, Ctrl + X, and Ctrl + A
// document.addEventListener("keydown", function (event) {
//   if (
//     event.ctrlKey &&
//     (event.key === "c" ||
//       event.key === "v" ||
//       event.key === "x" ||
//       event.key === "a")
//   )
//     event.preventDefault();
// });

document.addEventListener("DOMContentLoaded", function () {
  // Disable right-click
  // document.addEventListener("contextmenu", function (event) {
  //   event.preventDefault();
  // });

  // Disable common keyboard shortcuts
  document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && ["c", "v", "x", "a"].includes(event.key)) {
      event.preventDefault();
    }
  });

  // Disable copy, paste, cut
  document.addEventListener("copy", function (event) {
    event.preventDefault();
  });
  document.addEventListener("paste", function (event) {
    event.preventDefault();
  });
  document.addEventListener("cut", function (event) {
    event.preventDefault();
  });

  // Disable drag and drop
  document.addEventListener("dragstart", function (event) {
    event.preventDefault();
  });
});

// document.getElementById('Salaar').addEventListener('click', function(){
//   alert(`You have clicked SALAAR Do you want to watch!`)
// })
