const api_key = "3990affb84b986c8cd5f6036b289ce06";
const api_url = `https://api.themoviedb.org/3/movie/76341?api_key=${api_key}`;
DataCue();

async (DataCue) => {
  var data = await fetch(api_url);
  console.log(data.json);
};
