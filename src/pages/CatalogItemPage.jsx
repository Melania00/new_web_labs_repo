import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { fridges } from "../constants";

const CatalogItemPage = () => {
  const { id } = useParams();

  const [fridge] = useState(fridges.find(fridge => fridge.id === +id))

  return (
    <div>
      {fridge.name}
    </div>
  );
};

export default CatalogItemPage;
