import React, { useState, useEffect } from "react";
import Item from "../components/Item";
import { fridges } from "../constants";
import { useParams } from "react-router-dom";
import { Link, useNavigate  } from "react-router-dom";
import { useRecoilState} from "recoil"; 
import {selectedItemAtom} from "../atom"
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/fridgesCarts";


const CatalogItemPage = () => {
  const { id } = useParams();
  const [fridge] = useState(fridges.find(fridge => fridge.id === +id));
  const [selectedItem, setSelectedItem] = useRecoilState(selectedItemAtom);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(`http://localhost:5000/fridges?${id}`);
        if (response.ok) {
          const item = await response.json();
          setSelectedItem(item);
        } else {
          console.error("Failed to fetch item");
          // Handle error cases here
        }
      } catch (error) {
        console.error("Error fetching item:", error);
        // Handle error cases here
      }
    };

    fetchItem();
  }, [id, setSelectedItem]);

  const handleAddToCart = () => {
    dispatch(addToCart(fridge)); // Dispatch action to add fridge to cart
    navigate("/cart"); // Navigate to cart page after adding item
  };

  return (
    <div>
      <Item />
      <div className="product-price-and-actions flex justify-between items-center">
        <span className="product-price text-gray-700 font-bold">Price: {fridge.price}$</span>
        <div className="flex">
          <Link
            className="inline-block text-gray font-bold rounded-md px-4 py-2 mt-4 border mr-10 mb-6"
            to={`/catalog`}>
            Go Back
          </Link>
          <button
        onClick={handleAddToCart}
        className="inline-block bg-gray-800 text-white font-bold rounded-md px-4 py-2 mt-4 border mr-10 mb-6"
      >
        Add to Cart
      </button>
        </div>
      </div>
    </div>
  );
};

export default CatalogItemPage;
