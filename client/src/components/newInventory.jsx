/* eslint-disable no-unused-vars */

// import { useState } from 'react';
// import { ChevronDown, ChevronRight, Check } from 'lucide-react';

// const InventoryDropdown = () => {
//   const [openCategories, setOpenCategories] = useState({});
//   const [selectedItems, setSelectedItems] = useState({});

//   const inventoryData = {
//    "Bed": {
//       "Single": {
//         "with storage": {
//             "Dismantable":{},
//             "Non-Dismantable":{}
//         },
//         "without storage": {
//             "Dismantable":{},
//             "Non-Dismantable":{}
//         },
//       },
//       "Queen":{
//         "with storage": {
//             "Dismantable":{},
//             "Non-Dismantable":{}
//         },
//         "without storage": {
//             "Dismantable":{},
//             "Non-Dismantable":{}
//         },
//       },"Double":{
//         "with storage": {
//             "Dismantable":{},
//             "Non-Dismantable":{}
//         },
//         "without storage": {
//             "Dismantable":{},
//             "Non-Dismantable":{}
//         },
//       },"King Size":{
//         "with storage": {
//             "Dismantable":{},
//             "Non-Dismantable":{}
//         },
//         "without storage": {
//             "Dismantable":{},
//             "Non-Dismantable":{}
//         },
//       }

//     },
//     "Mattress": {
//       "Single/Double": {
//         "Foldable": {},
//         "Non-Foldable": {}
//       },
//       "Double": {
//         "Foldable": {},
//         "Non-Foldable": {}
//       },
//     },
//     "Chair": {
//       "Plastic Chair": {},
//       "Beanbag": {},
//       "Study or Office Chair": {},
//       "Wooden Chair": {}
//     },
//     "Wardrop or Self or Cabinate": {
//       "Wardrobe": 
//       {
        
//           "Small": {
//             "4ft": {},
            
//           },
//           "Medium": {
//             "6ft": {},
//           },
//           "Large": {
//             "9ft": {},
//           },
          
        
//       },
//       "Steel Almirah": 
//       {
        
//         "Small": {
//             "4ft": {},
            
//           },
//           "Medium": {
//             "6ft": {},
//           },
//           "Large": {
//             "9ft": {},
//           },
          
        
//       },
//       "Self": 
//       {
//         "Book Self": {
//             "Small": {
//                 "4ft": {},
                
//               },
//               "Medium": {
//                 "6ft": {},
//               },
//               "Large": {
//                 "9ft": {},
//               },
          
//         },
//         "Shoe Rack": {
//             "Small": {
//                 "4ft": {},
                
//               },
//               "Medium": {
//                 "6ft": {},
//               },
//               "Large": {
//                 "9ft": {},
//               },
            
//           },
//           "TV Cabinate": {
//             "Small": {
//                 "4ft": {},
                
//               },
//               "Medium": {
//                 "6ft": {},
//               },
//               "Large": {
//                 "9ft": {},
//               },
            
//           },
//       },
//     },
//     "Dining": {
//       "4 Seater": {},
//       "6 Seater": {},
//       "8 Seater": {},
//       "Glass Top": {},
//       "Marble Top": {}
//     },
//     "Sofa": {
//       "1 Seater": {},
//       "2 Seater": {},
//       "3 Seater": {},
//       "3+1+1 Seater": {},
//       "2+2 Seater": {},
//       "1+1 Seater": {},
//       "L-Shape": {},
//       "Recliner": {}
//     },
//     "Bar Furniture": {
//       "Width": {
//         "1ft": {},
//         "2ft": {},
//         "3ft": {},
//         "4ft": {},
//         "6ft": {}
//       },
//       "Height": {
//         "1ft": {},
//         "2ft": {},
//         "3ft": {},
//         "4ft": {},
//         "6ft": {}
//       }
//     },
//     "Fridge": {
      
//       "Single Door": {
//         "200L": {},
//       "300L": {},
//       "400L": {},
//       "500L": {},
//       "750L": {},
//       "1000L": {},
//       "1500L": {},
//       "2000L": {},
//       "2000L+": {},
//       },
//       "Double Door": {"200L": {},
//       "300L": {},
//       "400L": {},
//       "500L": {},
//       "750L": {},
//       "1000L": {},
//       "1500L": {},
//       "2000L": {},
//       "2000L+": {},},
//     },
//     "AC": {
//       "Window": {},
//       "Split": {}
//     },
//     "Washing Machine": {
//       "5-7 kg": {},
//       "7-10kg": {},
//       "10-12kg": {},
//       "12+kg": {}
//     },
//     "TV": {
//       "40 inches": {},
//       "42-45 inch": {},
//       "45-50 inches": {},
//       "50-55 inches": {},
//       "60 inches": {},
//       "60inches +": {}
//     },
//     "Table": {
//       "Bedside Table": {},
//       "Computer or Study Table": {},
//       "Dressing Table": {}
//     },
//     "General Appliances": {
//       "Desktop": {},
//       "Inverter with Battery": {},
//       "Vacuum Cleaner": {},
//       "Geyser": {},
//       "Audio System": {},
//       "Fan": {},
//       "Air Purifier": {},
//       "Table Fan": {}
//     },
//     "Kitchen": {
//       "Appliances": {
//         "Mixer Grinder": {},
//         "Air Fryer": {},
//         "Hood Chimney": {},
//         "Microwave": {},
//         "RO Water Purifier": {},
//         "Tandoor": {}
//       },
//       "Other Items": {
//         "Gas Cylinder": {},
//         "Rack": {},
//         "Utensils": {},
//         "Gas Stove": {}
//       }
//     }
//   };

//   const toggleCategory = (path) => {
//     setOpenCategories(prev => ({
//       ...prev,
//       [path]: !prev[path]
//     }));
//   };

//   const toggleSelection = (path) => {
//     setSelectedItems(prev => ({
//       ...prev,
//       [path]: !prev[path]
//     }));
//   };

//   const renderCategory = (items, path = '') => {
//     return Object.entries(items).map(([key, value]) => {
//       const currentPath = path ? `${path}.${key}` : key;
//       const hasChildren = Object.keys(value).length > 0;
//       const isOpen = openCategories[currentPath];
//       const isSelected = selectedItems[currentPath];

//       return (
//         <div key={currentPath} className="ml-4">
//           <div 
//             className="flex items-center gap-2 py-2 cursor-pointer hover:bg-pink-500 rounded px-2"
//             onClick={() => {
//               if (hasChildren) {
//                 toggleCategory(currentPath);
//               }
//               toggleSelection(currentPath);
//             }}
//           >
//             {hasChildren ? (
//               <span className="w-4 h-4">
//                 {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
//               </span>
//             ) : (
//               <span className="w-4" />
//             )}
//             <div className="flex items-center gap-2 flex-1">
//               <div className={`w-4 h-4 border rounded flex items-center justify-center
//                 ${isSelected ? 'bg-blue-500 border-blue-500' : 'border-gray-300'}`}>
//                 {isSelected && <Check size={12} className="text-white" />}
//               </div>
//               <span className="text-sm">{key}</span>
//             </div>
//           </div>
//           {hasChildren && isOpen && (
//             <div className="ml-4">
//               {renderCategory(value, currentPath)}
//             </div>
//           )}
//         </div>
//       );
//     });
//   };

//   return (
//     <div className="w-full max-w-2xl mx-auto p-4 border rounded-lg shadow-sm">
//       <h2 className="text-lg font-semibold mb-4 sticky top-0 bg-white z-10 px-4">
//         Inventory Categories
//       </h2>
//       <div className="border rounded-lg bg-white">
//         <div className="max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
//           {renderCategory(inventoryData)}
//         </div>
//       </div>
//     </div>
// //   );
// // };

// export default InventoryDropdown;


// import { useState } from 'react';

// const inventoryCategories = [
//   'Bed', 'Mattress', 'Chair', 'Wardrobe', 'Dining',
//   'Sofa', 'BarFurniture', 'Fridge', 'AC', 'Washer'
// ];

// const itemConfigs = {
//   'BarFurniture': {
//     fields: {
//       Width: { type: 'select', options: ['1ft', '2ft', '3ft'] },
//       Height: { type: 'select', options: ['1ft', '2ft', '3ft'] }
//     }
//   },
//   'Dining': {
//     fields: {
//       Seater: { type: 'select', options: ['4 Seater', '6 Seater', '8 Seater'] },
//       Top: { type: 'select', options: ['Glass Top', 'Wooden Top'] }
//     }
//   },
//   'Chair': {
//     fields: {
//       'Chair Type': { type: 'select', options: ['Plastic Chair', 'Wooden Chair', 'Metal Chair'] }
//     }
//   },
//   'Mattress': {
//     fields: {
//       Size: { type: 'select', options: ['Single', 'Double', 'Queen', 'King'] },
//       Portability: { type: 'select', options: ['Foldable', 'Non-Foldable'] }
//     }
//   }
// };

// export default function Inventory() {
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [addedItems, setAddedItems] = useState([]);
//   const [formFields, setFormFields] = useState({});

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//     setFormFields({});
//   };

//   const handleFieldChange = (fieldName, value) => {
//     setFormFields(prev => ({
//       ...prev,
//       [fieldName]: value
//     }));
//   };

//   const handleAddItem = () => {
//     const quantity = formFields.Quantity || 1;
//     const itemConfig = itemConfigs[selectedCategory];
//     if (!itemConfig) return;

//     const itemDescription = Object.entries(formFields)
//       .filter(([key]) => key !== 'Quantity')
//       .map(([key, value]) => `${key}: ${value}`)
//       .join(', ');

//     const newItem = {
//       category: selectedCategory,
//       details: itemDescription,
//       quantity
//     };

//     setAddedItems(prev => [...prev, newItem]);
//     setFormFields({});
//   };

//   const handleRemoveItem = (index) => {
//     setAddedItems(prev => prev.filter((_, i) => i !== index));
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow">
//       <h1 className="text-3xl font-bold text-center mb-8">Inventory Selection</h1>
      
//       <div className="bg-white rounded-lg p-6 mb-6">
//         <h2 className="text-xl font-semibold mb-4">Added Items</h2>
//         <div className="space-y-2">
//           {addedItems.map((item, index) => (
//             <div key={index} className="flex justify-between items-center p-3 bg-blue-50 rounded">
//               <span>
//                 [{item.category}] {item.details} | Qty: {item.quantity}
//               </span>
//               <button
//                 onClick={() => handleRemoveItem(index)}
//                 className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
//               >
//                 Remove
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="flex flex-wrap gap-2 mb-6">
//         {inventoryCategories.map((category) => (
//           <button
//             key={category}
//             onClick={() => handleCategoryClick(category)}
//             className={`px-4 py-2 rounded ${
//               selectedCategory === category
//                 ? 'bg-blue-600 text-white'
//                 : 'bg-gray-200 hover:bg-gray-300'
//             }`}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {selectedCategory && itemConfigs[selectedCategory] && (
//         <div className="flex flex-wrap gap-4 items-end">
//           {Object.entries(itemConfigs[selectedCategory].fields).map(([fieldName, field]) => (
//             <div key={fieldName}>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 {fieldName}
//               </label>
//               <select
//                 value={formFields[fieldName] || ''}
//                 onChange={(e) => handleFieldChange(fieldName, e.target.value)}
//                 className="block w-full rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//               >
//                 <option value="">Select {fieldName}</option>
//                 {field.options.map((option) => (
//                   <option key={option} value={option}>
//                     {option}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           ))}
          
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Quantity
//             </label>
//             <input
//               type="number"
//               min="1"
//               value={formFields.Quantity || '1'}
//               onChange={(e) => handleFieldChange('Quantity', e.target.value)}
//               className="block w-32 rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//             />
//           </div>
          
//           <button
//             onClick={handleAddItem}
//             className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//           >
//             Add
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }



import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const inventoryCategories = [
  'Bed', 'Mattress', 'Chair', 'Wardrobe', 'Dining', 'Sofa', 'BarFurniture',
  'Fridge', 'AC', 'WashingMachine', 'TV', 'Table', 'GeneralAppliances', 'Kitchen'
];

const itemConfigs = {
  'Bed': {
    fields: {
      Size: { type: 'select', options: ['Single', 'Double', 'Queen Size'] },
      Storage: { type: 'select', options: ['With Storage', 'Without Storage'] },
      Type: { type: 'select', options: ['Dismantable', 'Non-Dismantable'] }
    }
  },
  'Mattress': {
    fields: {
      Size: { type: 'select', options: ['Single', 'Double'] },
      Portability: { type: 'select', options: ['Foldable', 'Non-Foldable'] }
    }
  },
  'Chair': {
    fields: {
      Type: { 
        type: 'select', 
        options: ['Plastic Chair', 'Beanbag', 'Study Chair', 'Office Chair', 'Wooden Chair'] 
      }
    }
  },
  'Wardrobe': {
    fields: {
      Type: { type: 'select', options: ['Wardrobe', 'Steel Almirah', 'Self'] },
      Usage: { type: 'select', options: ['Book Self', 'Shoe Rack', 'TV Cabinet'] },
      Size: { type: 'select', options: ['Small', 'Medium', 'Large'] },
      Width: { type: 'select', options: ['4ft', '6ft', '9ft'] }
    }
  },
  'Dining': {
    fields: {
      Seater: { type: 'select', options: ['4 Seater', '6 Seater', '8 Seater'] },
      Top: { type: 'select', options: ['Glass Top', 'Marble Top', 'Wooden Top'] }
    }
  },
  'Sofa': {
    fields: {
      Type: { 
        type: 'select', 
        options: [
          '1 Seater', '2 Seater', '3 Seater', '3+1+1 Seater',
          '2+2 Seater', '1+1 Seater', 'L-Shape', 'Recliner'
        ] 
      }
    }
  },
  'BarFurniture': {
    fields: {
      Width: { type: 'select', options: ['1ft', '2ft', '3ft', '4ft', '6ft'] },
      Height: { type: 'select', options: ['1ft', '2ft', '3ft', '4ft', '6ft'] }
    }
  },
  'Fridge': {
    fields: {
      Capacity: { 
        type: 'select', 
        options: ['200L', '300L', '400L', '500L', '750L', '1000L', '1500L', '2000L', '2000L+'] 
      },
      DoorType: { type: 'select', options: ['Single Door', 'Double Door'] }
    }
  },
  'AC': {
    fields: {
      Type: { type: 'select', options: ['Window', 'Split'] }
    }
  },
  'WashingMachine': {
    fields: {
      Capacity: { type: 'select', options: ['5-7 kg', '7-10kg', '10-12kg', '12+kg'] }
    }
  },
  'TV': {
    fields: {
      Size: { 
        type: 'select', 
        options: ['40 inches', '42-45 inch', '45-50 inches', '50-55 inches', '60 inches', '60inches +'] 
      }
    }
  },
  'Table': {
    fields: {
      Type: { 
        type: 'select', 
        options: ['Bedside Table', 'Computer Table', 'Study Table', 'Dressing Table'] 
      }
    }
  },
  'GeneralAppliances': {
    fields: {
      Type: { 
        type: 'select', 
        options: [
          'Desktop', 'Inverter with Battery', 'Vacuum Cleaner', 
          'Geyser', 'Audio System', 'Fan', 'Air Purifier', 'Table Fan'
        ] 
      }
    }
  },
  'Kitchen': {
    fields: {
      Category: { 
        type: 'select', 
        options: ['Appliances', 'Other Items'] 
      },
      Type: { 
        type: 'select', 
        options: [
          'Mixer Grinder', 'Air Fryer', 'Hood Chimney', 'Microwave',
          'RO Water Purifier', 'Tandoor', 'Gas Cylinder', 'Rack',
          'Utensils', 'Gas Stove'
        ] 
      }
    }
  }
};

const InventorySelection = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [addedItems, setAddedItems] = useState([]);
  const [formFields, setFormFields] = useState({});
  const scrollContainerRef = useRef(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setFormFields({});
  };

  const handleFieldChange = (fieldName, value) => {
    setFormFields(prev => ({
      ...prev,
      [fieldName]: value
    }));
  };

  const handleAddItem = () => {
    const quantity = formFields.Quantity || 1;
    const itemConfig = itemConfigs[selectedCategory];
    if (!itemConfig) return;

    const itemDescription = Object.entries(formFields)
      .filter(([key]) => key !== 'Quantity')
      .map(([key, value]) => ` ${value}`)
      .join(' ');

    const newItem = {
      category: selectedCategory,
      details: itemDescription,
      quantity
    };

    setAddedItems(prev => [...prev, newItem]);
    setFormFields({});
  };

  const handleRemoveItem = (index) => {
    setAddedItems(prev => prev.filter((_, i) => i !== index));
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow">
      <h1 className="text-3xl font-bold text-center mb-8">Inventory Selection</h1>
      
      <div className="bg-white rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Added Items</h2>
        <div className="flex flex-wrap gap-2">
          {addedItems.map((item, index) => (
            <div
              key={index}
              className="group flex items-center gap-2 px-3 py-1.5 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors"
            >
              <span>
                {item.category} ({item.details}) × {item.quantity}
              </span>
              <button
                onClick={() => handleRemoveItem(index)}
                className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-blue-200 text-blue-700 hover:bg-blue-300 hover:text-blue-800 transition-colors"
              >
                <X size={12} />
              </button>
            </div>
          ))}
          {addedItems.length === 0 && (
            <div className="text-gray-500 italic">No items added yet</div>
          )}
        </div>
      </div>

      <div className="relative mb-6">
        <button 
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-1 rounded-full shadow hover:bg-gray-100"
        >
          <ChevronLeft size={24} />
        </button>
        
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-2 scroll-smooth no-scrollbar relative px-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {inventoryCategories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`px-4 py-2 rounded whitespace-nowrap transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <button 
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-1 rounded-full shadow hover:bg-gray-100"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {selectedCategory && itemConfigs[selectedCategory] && (
        <div className="flex flex-wrap gap-4 items-end">
          {Object.entries(itemConfigs[selectedCategory].fields).map(([fieldName, field]) => (
            <div key={fieldName}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {fieldName}
              </label>
              <select
                value={formFields[fieldName] || ''}
                onChange={(e) => handleFieldChange(fieldName, e.target.value)}
                className="block w-full rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="">Select {fieldName}</option>
                {field.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          ))}
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Quantity
            </label>
            <input
              type="number"
              min="1"
              value={formFields.Quantity || '1'}
              onChange={(e) => handleFieldChange('Quantity', e.target.value)}
              className="block w-32 rounded border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          
          <button
            onClick={handleAddItem}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Add
          </button>
        </div>
      )}
    </div>
  );
};

export default InventorySelection;
