document.getElementById("searchButton").addEventListener("click", function () {
  let searchValue = document.getElementById("searchInput").value.trim(); //trim removes Extra Spaces

  if (searchValue === "") {
    alert("Search field cannot be empty!");
  } else {
    // Proceed with the search logic
    console.log("Searching for:", searchValue);
    // You can redirect or fetch results based on the input
  }
});
