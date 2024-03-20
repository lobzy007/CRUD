import { useState } from "react";
import "./App.css";
import { Button } from "@/components/ui/button";
import { AlertDemo } from "./components/Alert";
import { AlertDialogDemo } from "./components/Dialog";
import { QueryClientProvider, QueryClient } from "react-query";
import Form from "./components/Form";
import TableList from "./components/Table";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col gap-3">
        {/* <AlertDemo /> */}
        {/* <AlertDialogDemo /> */}
        {/* <Form />
      <Table /> */}
        {/* <Button variant="outline">Click me</Button> */}
        {/* className={"bg-slate-400"} */}
        <Navbar />
        <Routes>
          <Route path="/" element={<TableList />} />
          <Route path="/add" element={<Form />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
