"use client";
import React, { useState, useEffect } from "react";
import AllIngredients from "@/components/AllIngredients";
//import Dinner from '@/components/Dinner';
import MenuGroups from "@/components/MenuGroups";
import MenuGroupsOpen from "@/components/MenuGroupsOpen";
import { MenuProvider } from "@/context/IngredientsContext";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

export default function Home() {
  return (
    <Provider store={store}>
      {/* <Form/> */}
      <AllIngredients />
      {/* <MenuGroupsOpen /> */}
      {/* <MenuGroups /> */}
      {/* <Dinner/> */}
    </Provider>
  );
}
