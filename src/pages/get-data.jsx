import axios from "axios";

function GetData() {
  const getDataFetch = async () => {
    const url = "https://jsonplaceholder.typicode.com/todos";
    const res = await fetch(url, {
      method: "get",
      headers: {
        "Content-Type": "appplication/json",
      },
    });
    // const res = await fetch(url, {
    //     method: "post",
    //     headers: {
    //       "Content-Type": "appplication/json",
    //     },
    //     body: JSON.stringify({

    //     })
    //   });
    const data = await res.json();
    console.log(data);
  };

  const getDataAxios = async () => {
    try {
      const url = "https://jsonplaceholder.typicode.com/todos";
      const res = await axios.get(url);
      //   const res = await axios.post(url, {
      //     hello: "hi",
      //   });
      console.log(res.data);
    } catch (e) {
      console.log("Error: ", e?.response?.data ?? e);
    }
  };

  return (
    <div>
      GetData
      <div>
        <button onClick={getDataFetch}>Fetch data</button>
        <button onClick={getDataAxios}>Fetch data - Axios</button>
      </div>
    </div>
  );
}

export default GetData;
