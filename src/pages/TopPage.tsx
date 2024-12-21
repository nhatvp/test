import React from "react";
import Graph from "../components/Graph";
import ButtonGroup from "../components/ButtonGroup";
import ProductList from "../components/ProductList";

const TopPage: React.FC = () => {
  return (
    <div>
      <Graph />
      <ButtonGroup />
      <ProductList />
    </div>
  );
};

export default TopPage;
