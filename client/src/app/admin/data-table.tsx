"use client";

import React, { useMemo, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  getKeyValue,
  Avatar,
} from "@nextui-org/react";
import { format } from "date-fns";

type TDonation = {
  order_id: number;
  transaction_time: string;
  gross_amount: number;
  senderUsername?: string;
  senderEmail?: string;
  senderName?: string;
  message?: string;
  receiverUsername: string;
  transaction_status: string;
  pfp: string;
};

export default function DonationsTable({
  donations,
}: {
  donations: TDonation[];
}) {
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;

  const pages = Math.ceil(donations.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return donations.slice(start, end);
  }, [page, donations]);

  if (!donations) {
    return <p>No Data</p>;
  }

  return (
    <Table
      // removeWrapper
      aria-label="Example table with client side pagination"
      className="overflow-hidden"
      bottomContent={
        <div
          className={`flex w-full justify-center ${
            pages <= 1 ? "hidden" : ""
          }`}>
          <Pagination
            color="secondary"
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
        wrapper:
          "min-h-[222px] overflow-auto overflow-y-hidden p-0 rounded-none",
      }}>
      <TableHeader>
        <TableColumn
          key="transaction_time"
          className="text-md py-4 bg-white border-b-2 border-b-zinc-200">
          Waktu
        </TableColumn>
        <TableColumn
          key="senderUsername"
          className="text-md bg-white border-b-2 border-b-zinc-200">
          Username
        </TableColumn>
        <TableColumn
          key="senderName"
          className="text-md bg-white border-b-2 border-b-zinc-200">
          Nama
        </TableColumn>
        <TableColumn
          key="senderEmail"
          className="text-md bg-white border-b-2 border-b-zinc-200">
          Email
        </TableColumn>
        <TableColumn
          key="gross_amount"
          className="text-md bg-white border-b-2 border-b-zinc-200">
          Jumlah (IDR)
        </TableColumn>
        <TableColumn
          key="message"
          className="text-md bg-white border-b-2 border-b-zinc-200">
          Pesan
        </TableColumn>
      </TableHeader>
      <TableBody items={items}>
        {(item) => (
          <TableRow key={item.order_id}>
            {(columnKey) => (
              <TableCell className="py-3 border-b-1 border-b-gray-200">
                {columnKey === "username" && (
                  <div className="flex items-center gap-2">
                    {item.pfp && item.senderUsername !== "anonymous" ? (
                      <Avatar src={item.pfp} size="sm" />
                    ) : (
                      <Avatar size="sm" />
                    )}
                    {getKeyValue(item, columnKey)}
                  </div>
                )}

                {columnKey === "transaction_time" && (
                  <>
                    {format(getKeyValue(item, columnKey), "dd MMM yyyy HH:mm")}
                  </>
                )}

                {/* Render for other columns that are not "username" or "transaction_time" */}
                {columnKey !== "username" &&
                  columnKey !== "transaction_time" && (
                    <>{getKeyValue(item, columnKey)}</>
                  )}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
