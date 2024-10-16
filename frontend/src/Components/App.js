import { useState , useEffect} from "react";
import Logo from "./Header";
import Form from "./Form";
import Stats from "./Footer";
import PackingList from "./Packing-list";
import {fetchData, createItem, deleteItem, updateItem, deleteAll, sortItems} from "../Service/item-service";
import { SortStatus } from "../Enum/SortStatus";
import LoginPage from "./Login";
import RegistrationForm from "./Register";
import { Routes,Route, Navigate } from "react-router-dom";

export default function App() {
  const [sortStatus, setSortStatus] = useState(SortStatus.INPUT_ORDER);
  const [Items, setItems] = useState([]);
    async function fetchItems() {
      try{
        const result = await fetchData();
        setItems(result);
      }
      catch(err){
        console.log(err);
      }
    }

    useEffect(() => {
      fetchItems();
    }, []);

  async function handleAddItems(item) {
      createItem(item)
      .then((res)=>{
         if(res){
          fetchItems();
         }
      })
      .catch((err)=>console.log(err));


  }

  function handleDeleteItem(id) {
      deleteItem(String(id))
      .then((res)=>{
         if(res){
          fetchItems(); 
        }
      })
      .catch((err)=>console.log(err))
  }

  function togglePacked(id,item) {
    const updatedItem = {...item, packed:!item.packed};
    // console.log(updateItem);
    updateItem(id, updatedItem)
    .then((res)=>{
          if(res) fetchItems();
    })
    .catch((err)=>console.log(err))

  }
  function clearItems() {
    const isClear = window.confirm(
      "Are you sure you want to clear all the items?"
    );
    if (isClear) {
      deleteAll().then((res)=>{
        if(res) fetchItems();
      })
      .catch((err)=>console.log(err));
    }
  }

 async function handleSortChange(status){
    setSortStatus(status);
    console.log(status);
    try{
    const response = await sortItems(status);
    console.log(response);
    setItems(response);
    }
    catch(err){
      console.log(err);
    }
  }

  return (
    // <div className="app">
    //   <Logo />
    //   <Form onAddItems={handleAddItems} />
    //   <PackingList
    //     Items={Items}
    //    onDeleteItem={handleDeleteItem}
    //    onToggleItem={togglePacked}
    //    onClearItem={clearItems}
    //    onSortChange={handleSortChange}
    //    Status = {sortStatus}
    //   />
    //   <Stats Items={Items} />
        
    // </div>
  
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<LoginPage />} />
      </Routes>

  );
}
