"use client";

import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  getKeyValue,
} from "@nextui-org/react";

type TDonation = {
  id: number;
  datetime: string;
  amount: number;
  email: string;
  name: string;
  message: string;
};

const donations: TDonation[] = [
  {
    id: 1,
    datetime: "2022-01-01 10:00:00",
    name: "Danjin",
    email: "danjin@gg.com",
    amount: 10000,
    message: "Kak",
  },
  {
    id: 2,
    datetime: "2022-01-01 10:00:00",
    name: "Josephine",
    email: "josephind@outlook.com",
    amount: 24000,
    message: "Apa kabar?",
  },
];

export default function GiftsTable() {
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 4;

  const pages = Math.ceil(donations.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return donations.slice(start, end);
  }, [page, donations]);

  return (
    <Table
      // removeWrapper
      aria-label="Example table with client side pagination"
      className="overflow-hidden"
      bottomContent={
        <div className="flex w-full justify-center">
          <Pagination
            // isCompact
            // showControls
            // showShadow
            // color=""
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
          />
        </div>
      }
      classNames={{
        wrapper: "min-h-[222px] overflow-hidden",
      }}>
      <TableHeader>
        <TableColumn key="datetime" className="text-md py-4">
          Waktu
        </TableColumn>
        <TableColumn key="name" className="text-md">
          Nama
        </TableColumn>
        <TableColumn key="email" className="text-md">
          Email
        </TableColumn>
        <TableColumn key="amount" className="text-md">
          Jumlah
        </TableColumn>
        <TableColumn key="message" className="text-md">
          Pesan
        </TableColumn>
      </TableHeader>
      <TableBody items={items}>
        {(item) => (
          <TableRow key={item.name}>
            {(columnKey) => (
              <TableCell className="py-4">
                {getKeyValue(item, columnKey)}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
