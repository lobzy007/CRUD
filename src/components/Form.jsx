import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// import TutorialDataService from "../Services/TableService";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Form = () => {
  const [item, setItem] = useState({ email: "", number: "", id: "" });
  const navigate = useNavigate();

  const addItemToAPI = (item) => {
    axios
      .post("https://65e83bc64bb72f0a9c4eac3a.mockapi.io/userContacts", item)
      .then((d) => console.log(d.data));
  };
  console.log(item);

  return (
    <div>
      <form action="" className="flex flex-col gap-2 w-auto m-auto mt-32">
        <input
          type="email"
          placeholder="Email"
          className={"border-yellow-900 border-2 w-auto m-auto p-2 rounded-md"}
          onChange={(e) =>
            setItem((item) => ({ ...item, email: e.target.value }))
          }
        />
        <input
          type="number"
          placeholder="Number"
          className={"border-yellow-900 border-2 w-auto m-auto p-2 rounded-md"}
          onChange={(e) =>
            setItem((item) => ({ ...item, number: e.target.value }))
          }
        />
        <Button
          variant="outline"
          className="w-auto m-auto p-6 bg-yellow-600 hover:bg-yellow-700"
          onClick={(e) => {
            addItemToAPI(item);
            e.preventDefault();
            // navigate("/");
            toast("User added successfully", {
              description: `Email:${item.email} Number:${item.number}`,
              cancel: {
                label: "Hide",
                onClick: () => console.log("Hide"),
              },
            });
          }}
        >
          Click me
        </Button>
      </form>
    </div>
  );
};
export default Form;
