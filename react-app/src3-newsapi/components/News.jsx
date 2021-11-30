import React, { useState } from "react";
import Categories from "./Categories";
import NewsList from "./NewsList";

const News = () => {
  const [category, setCategory] = useState("business");

  return (
    <div>
      <Categories category={category} onSelect={setCategory} />
      <NewsList category={category} />
    </div>
  );
};

export default News;
