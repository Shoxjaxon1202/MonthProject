import { useEffect } from "react";
import "./App.css";
import { loaded, loading } from "./redux/features/loaderSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchedNews } from "./redux/features/newsSlice";
import NewsList from "./components/NewsList";
import Form from "./components/Form";

function App() {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.loader);
  useEffect(() => {
    dispatch(loading());
    axios.get("http://localhost:5000/news").then((res) => {
      dispatch(fetchedNews(res.data));
    });
  }, []);

  console.log(store);

  return (
    <>
      <NewsList />
      <Form/>
    </>
  );
}

export default App;
