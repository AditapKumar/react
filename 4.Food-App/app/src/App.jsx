import styled from "styled-components";
import { useState, useEffect } from "react";
import SearchResult from "./components/SearchResults/SearchResult";

export const BASE_URL = "http://localhost:9000";

const App = () => {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedButton, setSelectedButton] = useState("all");

  // Network call
  const fetchFoodData = async () => {
    setLoading(true);
    try {
      const response = await fetch(BASE_URL);
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      setError("Something Went Wrong");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFoodData();
  }, []);

  const searchFood = (e) => {
    const searchValue = e.target.value;
    console.log("Search value:", searchValue);
    console.log("Available data:", data);

    if (!searchValue) {
      setFilteredData(null);
      return;
    }

    const filter = data?.filter((food) => {
      const matches = food.name
        .toLowerCase()
        .includes(searchValue.toLowerCase());
      console.log(
        `Food: ${food.name}, Search: ${searchValue}, Matches: ${matches}`
      );
      return matches;
    });
    console.log("Filtered results:", filter);
    setFilteredData(filter);
  };

  const filterFood = (type) => {
    if (type === "all") {
      setFilteredData(data);
      setSelectedButton("all");
      return;
    }
    const filter = data?.filter((food) => {
      return food.type.toLowerCase().includes(type.toLowerCase());
    });
    setFilteredData(filter);
    setSelectedButton(type);
  };

  if (error) {
    return <div> {error} </div>;
  }
  if (loading) {
    return <div> Loading... </div>;
  }

  const filterButtons = [
    { type: "all", label: "All" },
    { type: "breakfast", label: "Breakfast" },
    { type: "lunch", label: "Lunch" },
    { type: "dinner", label: "Dinner" }
  ];

  return (
    <>
      <Container>
        <TopContainer>
          <div className="logo">
            <img src="/logo.png" alt="logo" />
          </div>
          <div className="search">
            <input onChange={searchFood} placeholder="Search Food" />
          </div>
        </TopContainer>
        <FilterContainer>
          {filterButtons.map((button) => (
            <Button 
              key={button.type}
              onClick={() => filterFood(button.type)}
              isSelected={selectedButton === button.type}
            >
              {button.label}
            </Button>
          ))}
        </FilterContainer>
      </Container>
      <SearchResult data={filteredData !== null ? filteredData : data} />
    </>
  );
};

export default App;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px; /* optional for spacing */
`;

const TopContainer = styled.section`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;

  .search {
    input {
      background-color: transparent;
      border: 1px solid red;
      color: white;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
    }
  }

  @media (0 < width < 600px){
    flex-direction: column;
    height: 120px;
  }
`;

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding-bottom: 40px;
`;

export const Button = styled.button`
  background-color: ${({isSelected}) => (isSelected ? "#7e1f1f": "#ff4343")};
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #7e1f1f;
    color: white;
  }
`;
