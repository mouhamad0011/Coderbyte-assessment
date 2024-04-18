import "./App.css";
import React, { useState } from "react";
function Search() {
  const articles = [
    {
      id: 1,
      title: "First article",
      description: "first first one",
    },
    {
      id: 2,
      title: "Second article",
      description: "second second one",
    },
    {
      id: 3,
      title: "Third article",
      description: "third third one",
    },
  ];

  const [searchWord, setSearchWord] = useState("");
  const handleOnChange = (e) => {
    setSearchWord(e.target.value);
  };

  const handleHighlighting = (target, searchTerm) => {
    const newText = new RegExp(searchTerm, "gi");
    return target.replace(newText, (match) => `<mark>${match}</mark>`);
  };

  return (
    <div>
      <h2>Search</h2>
      <input
        type="text"
        placeholder="type to search..."
        value={searchWord}
        onChange={handleOnChange}
      />
      <div>
        {articles &&
          articles.map((article) => (
            <div key={article.id}>
              <h3
                dangerouslySetInnerHTML={{
                  __html: handleHighlighting(article.title, searchWord),
                }}
              ></h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: handleHighlighting(article.description, searchWord),
                }}
              ></p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Search;
