/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronDown,
  ChevronUp,
  Phone,
  ArrowLeft,
  MapPin,
  Bike,
} from "lucide-react";
import { useEffect } from "react";

const categories = [
  { id: "items", label: "Added Items" },
  { id: "furniture", label: "Furniture" },
  { id: "appliances", label: "Appliances And Electronics" },
  { id: "kitchen", label: "Kitchen Items" },
  { id: "vehicle", label: "Vehicle" },
  { id: "misc", label: "Miscellaneous" },
];

const fetchItems = async (category) => {
  const url = new URL("api/item/items");
  if (category) url.searchParams.append("category", category);

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch items");
    return await response.json();
  } catch (error) {
    console.error("Error fetching items:", error);
    throw error;
  }
};

const createBooking = async (bookingData) => {
  try {
    const response = await fetch("/api/booking/yourBookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });
    if (!response.ok) throw new Error("Failed to create booking");
    return await response.json();
  } catch (error) {
    console.error("Error creating booking:", error);
    throw error;
  }
};

const inventoryItems = {
  furniture: {
    mattress: [
      "Single Bed Mattress - Foldable",
      "Single Bed Mattress - Non Foldable",
      "Double Bed Mattress - Foldable",
      "Double Bed Mattress - Non Foldable",
    ],
    table: [
      "Center Table",
      "Folding Table",
      "Coffee Table Small",
      "Console Table",
      "Coffee Table Large",
      "Study /Computer Table",
      "Bed Side Table",
    ],
    bed: [
      "Baby Wooden Bed",
      "Double Bed - Dismantlable",
      "Cradle - Dismantleable",
      "Bunk Bed - Dismantlable",
      "Single Bed Storage - Dismantlable",
      "Single Bed Non Storage - Dismantlable",
      "Diwan cum Bed",
      "Queen Size Bed - Without Storage",
      "Single Bed - Foldable",
      "King Size Bed - With Storage",
      "Single Bed - With Storage",
      "Single Bed - Without Storage",
    ],
    chair: [
      "Wooden Chair",
      "Plastic Chair",
      "High Chair",
      "Bean Bag/Pouffe",
      "Study Chair",
      "Bench",
      "Rocking Chair",
      "Stool",
      "Settee",
      "Folding Chair",
      "Arm Chair",
      "Office Chair",
    ],
    CabinetStorage: [
      "Chest of Drawers Medium",
      "Prayer Unit/Mandir",
      "Display Cabinet Large",
      "Chest of Drawers Small",
      "Book Shelf Large",
      "Steel Almirah Medium",
      "Book Shelf Small",
      "Steel Almirah Large",
      "Trunk",
      "Chest of Drawers Large",
      "Wall Shelf",
      "Safe Small",
      "Entertainment/TV Unit",
      "Single door wardrobe",
      "Dressing Table",
      "Iron Locker Small",
      "Display Cabinet Small",
      "Book Shelf Medium",
      "TV Table",
      "Plastic Cupboard",
      "Sliding Door Wardrobe",
      "Shoe Rack Wooden",
      "Shoe Rack Metal",
      "Five Door Wardrobe",
      " Door Wardrobe",
      "Triple Door Wardrobe",
      "Double Door Wardrobe",
      "Single Door Wardrobe",
    ],
    Dining: [
      "Marble Top Dining Table Only - 8 Seater",
      "Marble Top Dining Table Only - 6 Seater",
      "Marble Top Dining Table Only - 4 Seater",
      "Dining Chair",
      "Dining Table Only - 8 Seater",
      "Glass Top Dining Table Only - 6 Seater",
      "Glass Top Dining Table Only - 4 Seater",
      "Glass Top Dining Table Only - 8 Seater",
      "Dining Table Only - 6 Seater",
      "Dining Table Only - 4 Seater",
    ],
    sofa: [
      "3 Seater Sofa - L Shape",
      "4 Seater Sofa",
      "3 Seater Sofa",
      "2 Seater Sofa",
      "1 Seater Sofa",
      "Recliner Sofa 1-seater",
      "Recliner Sofa 2-seater",
      "Recliner Sofa 3-seater",
      "5 Seater Sofa - L Shape",
      "1 Seater Sofa - Leather",
      "7 Seater Sofa - L Shape",
      "3 Seater Sofa - Leather",
      "2 Seater Sofa - Leather",
      "Sofa cum Bed",
    ],
    BarFurniture: [
      "Bar Cabinet Large",
      "Bar Cabinet",
      "Bar Unit",
      "Bar Trolley",
      "Bar Chair / Stool",
      "Wine Rack",
    ],
  },
  appliances: {
    Refrigerator: [
      "Fridge 300-399 lts",
      "Fridge 400-499 lts",
      "Fridge Above 500 lts",
      "Fridge Upto 299 lts",
    ],
    "Air Conditioner": [
      "Window Air Conditioner (AC)",
      "Split Air Conditioner (AC)",
    ],
    "General Appliance": [
      "Garment Steame",
      "Vacuum Cleaner",
      "Instant Geyser",
      "Music/Video System",
      "Air Cooler",
      "Air Purifier",
      "Ceiling/Table Fan",
    ],
    "Washing Machine": [
      "Washing Machine 8kg",
      "Washing Machine 7-7.9kg",
      "WashingMachine <6.9kg",
    ],
    Television: [
      "LCD/LED 65 & above",
      "LCD/LED 52 - 65",
      "LCD/LED TV 40 & Below",
      "Regular TV (old model)",
      "LCD/LED TV 52 & above",
      "LCD/LED TV 42 - 50",
    ],
  },
  kitchen: {
    "Kitchen Item": ["Kitchen Metal Rack", "LPG Gas Cylinder", "Gas Stove / Hob"],
    "Kitchen Appliance": [
      "Holds 2-3 pressure cookers (5 litre) or equivalent",
      "Barbeque Grill Large",
      "Barbeque Grill Small",
      "Microwave Oven & OTG",
      "Electric Tandoor",
      "Domestic flour mill/ atta chakki",
      "Hood Chimney",
      "Cooking range",
    ],
    "Kitchen Furniture": ["Side Table", "Serving Trolley", "Kitchen Rack"],
  },
  vehicle: {
    Car: [
      "Premium Hatchback Car",
      "Premium Sedan Car",
      "SUV Car",
      "Hatchback Car",
      "Sedan Car",
      "Luxury Car",
    ],
    Bike: [
      "Bike - upto 350 cc",
      "Bike - upto 200 cc",
      "Luxury Bike",
      "Scooty / Scooter",
    ],
  },
  misc: {
    "Kids Vehicle": ["Kids Three Wheeler", "Kids Four Wheeler"],
    Carton: [
      "Small Carton (Equivalent to a small suitcase (Cabin baggage))",
      "Medium Carton (Equivalent to a medium suitcase (1.5 x Cabin baggage))",
      "Large Carton (Equivalent to a large suitcase (2 x Cabin baggage))",
      "Extra Large Carton (Equivalent to a 3 x Cabin baggage)",
    ],
    "Decorative Item": [
      "Pooja Lamp",
      "Painting /Photo Large",
      "Carpet Rolled",
      "Statue Large",
      "Painting /Photo Medium",
      "Statue Small",
      "Indoor fountain large",
      "Indoor fountain small",
      "Mirror",
      "Statue Medium",
      "Wall Frames Large",
      "Vase Small",
      "Aquarium Large",
      "Wall Frames Medium",
      "Vase Large",
    ],
    "Gym equipment": ["Tread Mill Foldable", "Exercise Cycle"],
    Bicycle: ["Bicycle Adult", "Bicycle Kids"],
    "Musical Instruments": [
      "Guitar",
      "Synthesizer",
      "Drum Set ",
      "Harmonium",
      "Tabla",
      "Electronic Keyboard",
      "Grand Piano",
      "Piano",
    ],
    Swing: [" Swing", "Baby Swing Large", "Baby Swing Small"],
  },
};


const InventoryAdd = () => {
  const [selectedCategory, setSelectedCategory] = useState("furniture","appliances","kitchen","vehicle","misc");
  const [expandedItems, setExpandedItems] = useState({});
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalItems, setTotalItems] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  
  useEffect(() => {
    const loadItems = async (category) => 
      {
      try {
        setLoading(true);
        const data = await fetchItems(category);
        setItems(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (selectedCategory) {
      loadItems(selectedCategory);
    }
  }, [selectedCategory]);

  
  const toggleExpand = (itemType) => {
    setExpandedItems((prev) => ({
      ...prev,
      [itemType]: !prev[itemType],
    }));
  };

  
  const handleAddItem = (item) => {
    setSelectedItems((prev) => {
      const existingItem = prev.find((i) => i.item === item);
      if (existingItem) {
        existingItem.quantity += 1;
        return [...prev];
      }
      return [...prev, { item, quantity: 1 }];
    });
    setTotalItems((prev) => prev + 1);
  };

  const handleRemoveItem = (item) => {
    setSelectedItems((prev) => {
      const updatedItems = prev
        .map((i) =>
          i.item === item ? { ...i, quantity: i.quantity - 1 } : i
        )
        .filter((i) => i.quantity > 0);
      return updatedItems;
    });
    setTotalItems((prev) => prev - 1);
  };

  const getFilteredItems = () => {
    if (!searchQuery.trim()) return inventoryItems[selectedCategory] || {};
  
    const filtered = {};
    const categoryItems = inventoryItems[selectedCategory] || {};
  
    Object.keys(categoryItems).forEach((type) => {
      const items = categoryItems[type].filter((item) => {
        const normalizedItem = item.toLowerCase();
        const normalizedQuery = searchQuery.toLowerCase();
  
      
        return normalizedItem.includes(normalizedQuery) || 
               normalizedItem.split(' ').some(word => word.startsWith(normalizedQuery));
      });
  
      if (items.length) {
        filtered[type] = items;
      }
    });
  
    return filtered;
  };
  

  const renderItems = () => {
    const filteredItems = getFilteredItems();

    if (selectedCategory === "items") {
      return selectedItems.map(({ item, quantity }) => (
        <div key={item} className="flex justify-between items-center py-2">
          <span>{item}</span>
          <span>Quantity: {quantity}</span>
        </div>
      ));
    }

    if (selectedCategory in inventoryItems) {
      return Object.entries(inventoryItems[selectedCategory] || {}).map(
        ([type, items]) => (
          <div key={type} className="border rounded-lg mb-4">
            <button
              className="w-full p-4 flex justify-between items-center"
              onClick={() => toggleExpand(type)}
            >
              <span className="font-medium capitalize">{type}</span>
              {expandedItems[type] ? <ChevronUp /> : <ChevronDown />}
            </button>

            {expandedItems[type] && (
              <div className="p-4 border-t">
                {items.map((item) => 
                {
                  const selectedItem = selectedItems.find((i) => i.item === item);
                  const quantity = selectedItem ? selectedItem.quantity : 0;
  
                  return (
                    <div
                      key={item}
                      className="flex justify-between items-center py-2"
                    >
                      <span>{item}</span>
                      <div className="flex items-center gap-2">
                        {quantity > 0 && (
                          <button
                            className="px-2 py-1 text-red-700 border border-red-700 rounded"
                            onClick={() => handleRemoveItem(item)}
                          >
                            -
                          </button>
                        )}
                        <span>{quantity > 0 ? quantity : ""}</span>
                        <button
                          className="px-2 py-1 text-purple-700 border border-purple-700 rounded"
                          onClick={() => handleAddItem(item)}
                        >
                          {quantity === 0 ? "Add" : "+"}
                        </button>
                      </div>
                    </div>
                  );
                }
                
                )}
              </div>
            )}
          </div>
        )
      );
    }

    return Object.entries(filteredItems).map(([type, items]) => (
      <div key={type} className="border rounded-lg mb-4">
        <button
          className="w-full p-4 flex justify-between items-center"
          onClick={() => toggleExpand(type)}
        >
          <span className="font-medium capitalize">{type}</span>
          {expandedItems[type] ? <ChevronUp /> : <ChevronDown />}
        </button>

        {expandedItems[type] && (
          <div className="p-4 border-t">
            {items.map((item) => (
              <div
                key={item}
                className="flex justify-between items-center py-2"
              >
                <span>{item}</span>
                <button
                  className="px-4 py-1 text-purple-700 border border-purple-700 rounded"
                  onClick={() => handleAddItem(item)}
                >
                  Add
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    ));
  };

  const handleSubmitBooking = async () => {
    try {
      setLoading(true);
      const bookingData = {
        pickupAddress: "Hauz Khas Fort",
        deliveryAddress: "Dwarka, Delhi",
        items: selectedItems.map(({ item, quantity }) => ({
          item: item._id,
          quantity,
        })),
      };

      const response = await createBooking(bookingData);
      alert("Booking created successfully!");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white-700">
      <div className="max-w-4xl mx-auto p-4">
        <div className="bg-white rounded-lg p-6 shadow-lg">
          {/* Header */}
          <div className="flex items-center mb-6">
            <ArrowLeft className="w-6 h-6 mr-3" />
            <h1 className="text-xl font-semibold flex-grow">
              Add your Inventory
            </h1>
            <button className="flex items-center text-purple-700">
              <Phone className="w-4 h-4 mr-1" />
              Get a call
            </button>
          </div>

          {/* Info text */}
          <p className="text-gray-600 mb-6">
            By providing a list of household items, we can provide an accurate
            cost.
          </p>

          {/* Search bar */}
          <input
            type="text"
            value={searchQuery} // Bind the search query to the input
            onChange={(e) => setSearchQuery(e.target.value)} // Update query on input change
            placeholder="Search for a household item to add"
            className="w-full p-3 border rounded-lg mb-6"
          />

          {/* Categories */}
          <div className="flex gap-2 overflow-x-auto mb-6">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-full whitespace-nowrap
                  ${
                    selectedCategory === category.id
                      ? "bg-purple-700 text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Inventory Items */}
          
          {renderItems()}

          {/* Footer */}
          <div className="mt-8">
            <div className="flex justify-between items-center mb-4">
              <span>Have less items?</span>
              <button className="text-teal-600">
                Switch to Movers Only
                <div className="text-sm text-gray-500">Starting from ₹ 399</div>
              </button>
            </div>

            <div className="flex justify-between items-center">
              <div className="text-gray-500">Total Items - {totalItems}</div>
              <button
                className="bg-red-500 text-white px-8 py-3 rounded-lg"
                onClick={handleSubmitBooking}
              >
                Continue
              </button>
            </div>
          </div>
        </div>

        {/* Booking Details */}
        <div className="bg-white rounded-lg p-6 mt-4 shadow-lg">
          <h2 className="text-lg font-semibold mb-4">Booking Details</h2>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Address</h3>
              <button className="text-teal-600">Edit</button>
            </div>
            <div className="flex flex-col items-start gap-4">
              <div>
                <MapPin className="w-5 h-5 mt-1" />
                Hauz Khas ,Delhi,India
              </div>
              <div>
                <MapPin className="w-5 h-5 mt-1" />
                Dwarka, Delhi, India
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryAdd;
