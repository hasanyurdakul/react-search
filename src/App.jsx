import { useEffect, useState } from "react";

function App() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const search_params = Object.keys(Object.assign({}, ...data)); //Getting the search parameters from the data returned from the API.

  console.log(search_params);
  function search(data) {
    return data.filter((data) =>
      search_params.some((param) =>
        data[param].toString().toLowerCase().includes(searchQuery)
      )
    );
  }

  console.log(searchQuery);
  return (
    <div className="flex items-center justify-center flex-col p-9">
      <div className="mb-10">
        <input
          type="search"
          className="bg-transparent border-b-2 border-zinc-50 outline-none"
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search User"
        />
      </div>

      <center className=" grid grid-cols-2 justify-center items-center flex-col gap-2">
        <div>
          <h1>UNFILTERED DATA</h1>{" "}
          {data.map((dataObj, key) => {
            return (
              <div key={key} className=" ">
                <div className=" w-96 bg-zinc-400 border border-zinc-700 rounded-lg">
                  <div className="text-2xl font-semibold text-black">
                    @{dataObj.username}{" "}
                  </div>
                  <div className="text-sm text-black ">
                    {dataObj.name}
                    <div className="text-black">{dataObj.email}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <h1>FILTERED DATA</h1>
          {search(data).map((dataObj, key) => {
            return (
              <div key={key} className=" ">
                <div className=" w-96 bg-blue-400 border border-zinc-700 rounded-lg">
                  <div className="text-2xl font-semibold text-black">
                    @{dataObj.username}{" "}
                  </div>
                  <div className="text-sm text-black ">
                    {dataObj.name}
                    <div className="text-black">{dataObj.email}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </center>
    </div>
  );
}

export default App;
