import "./App.css";
import React, { useState } from "react";
function Search() {
  const articles = [
    {
      id: 1,
      title: "How do you write an article review in APA format?",
      description: "To write an article review in APA format, start by formatting the citation of the article. Read through the article and identify the standard APA sections, such as the abstract, in...",
    },
    {
      id: 2,
      title: "Where can I read the national enquirer online?",
      description: "The National Enquirer has an online version, found at NationalEnquirer.com, that features articles from the publication. The site also has a subscription option for the digital edi...",
    },
    {
      id: 3,
      title: "What is the reading level of the New York Times?",
      description: "The New York Times in School program states that the newspaper’s reading level varies by article. It urges teachers using the Times as an educational tool to choose articles for st...",
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
    <div className="container">
      <h1>Search</h1>
      <input
        className="search-input"
        type="text"
        placeholder="Type to search..."
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
