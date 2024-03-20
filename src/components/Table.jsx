import React, { useEffect, useState } from "react";
import trash from "./images/trash-icon-462x512-njvey5nf.png";
import { isError, useMutation, useQuery } from "react-query";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import axios from "axios";
import { Button } from "./ui/button";

const fetchData = () => {
  return axios.get("https://65e83bc64bb72f0a9c4eac3a.mockapi.io/userContacts");
};

const TableList = () => {
  const [isLoadingF, setLoadingF] = useState(true);
  const [dataF, setDataF] = useState();

  const { isLoading, isFetching, data, isError, error, refetch } = useQuery(
    "user-data",
    fetchData
  );

  // useEffect(() => {
  //   axios
  //     .get("https://65e83bc64bb72f0a9c4eac3a.mockapi.io/userContacts")
  //     .then((d) => {
  //       setData(d.data);
  //       setLoading(false);
  //     });
  // }, []);

  const getData = async () => {
    await axios
      .get("https://65e83bc64bb72f0a9c4eac3a.mockapi.io/userContacts")
      .then((d) => {
        setDataF(d.data);
        setLoadingF(false);
      });
  };

  const deleteById = useMutation((id) => {
    return axios.delete(
      `https://65e83bc64bb72f0a9c4eac3a.mockapi.io/userContacts/${id}`
    );
    // window.location.reload();
  });

  const deleteAll = async () => {
    await axios
      .delete(`https://65e83bc64bb72f0a9c4eac3a.mockapi.io/userContacts`)
      .catch((e) => console.error(e));
    // window.location.reload();
  };

  if (isError) {
    return <p>Error!!! {error}</p>;
  }

  if (isLoading) {
    return <p>Loading</p>;
  }

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Number</TableHead>
            <TableHead className={"text-center"}>
              <Button variant="destructive" onClick={deleteAll}>
                Delete All
              </Button>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data.map((e) => (
            <TableRow key={e.id}>
              <TableCell className="font-medium text-left">{e?.id}</TableCell>
              <TableCell className="text-left">{e?.email}</TableCell>
              <TableCell className="text-left">{e?.number}</TableCell>
              <TableCell>
                <Button
                  variant="destructive"
                  onClick={() => {
                    deleteById.mutate(e.id);
                  }}
                >
                  <img src={trash} alt="" className="w-5 h-auto" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableList;
