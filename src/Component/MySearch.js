import { useState, useEffect } from "react";

function MySearch({ products, onFilter }) {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const filteredProducts = products.filter((product) => {
      return product.title && product.title.toLowerCase().includes(search.toLowerCase());
    });
    onFilter(filteredProducts);
  }, [search, products, onFilter]);

  return (
    <>
    
      <div style={{position:'relative',zIndex:'100'}} className="form-floating fixed-top">
        <input
          type="text"
          name="search"
          value={search}
          onChange={handleSearch}
          className="form-control"
          id="nameInput"
          placeholder="Search for Product"
        />

        <label htmlFor="nameInput">Search For Product</label>
      </div>
    </>
  );
}

export default MySearch;
