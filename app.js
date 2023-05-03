async function getGif() {
  try {
    const searchTerm = $("#search").val();
    if (!searchTerm) {
      alert("Please enter a search term");
    }

    const response = await axios.get(`https://api.giphy.com/v1/gifs/search`, {
      params: {
        q: searchTerm,
        api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym",
      },
    });

    const randomIndex = Math.floor(Math.random() * 50);
    $("#gifGrid").append(
      createGif(response.data.data[randomIndex].images.original.url)
    );
    $("#search").val("");
  } catch (error) {
    alert("Please try a different search term");
    $("#search").val("");
  }
}

const createGif = (url) => {
  const newGif = `<image src="${url}" width="150" height="200" class="gif">`;
  return newGif;
};

$("#searchBtn").on("click", (e) => {
  e.preventDefault();
  getGif();
});

$("#removeBtn").on("click", () => $("#gifGrid").html(""));
