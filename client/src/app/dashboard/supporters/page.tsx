"use server";

import Layout from "@/components/dashboard/layout";
import Section from "@/components/dashboard/section";
import React from "react";
import SupportersTable from "./data-table";
import LoveIcon from "@/components/svgs/LoveIcon";
import CalendarIcon from "@/components/svgs/CalendarIcon";
import DollarIcon from "@/components/svgs/Dollar";
import { getSession } from "@/lib/session";
import { getDonationsBySenderUsername } from "@/lib/api/donation";
import { Code } from "@nextui-org/react";

export default async function Page() {
  // parameter of this function (receiver username aka creator)
  const donations = await getDonationsBySenderUsername();

  return (
    <Layout page="supporters">
      <h1 className="text-3xl w-full lg:w-3/3 xl:1/2 mx-auto mb-3">
        My Supporters
      </h1>

      {/* Statistics */}
      <Section>
        <div>
          <div className="w-full flex flex-col gap-3 sm:flex-row mb-4">
            <CardLayout
              name="Supporters"
              num={"345"}
              icon={LoveIcon({ color: "gray", size: 20 })}
            />
            <CardLayout
              name="Last 30 days"
              num={"Rp345.000,-"}
              icon={CalendarIcon({ color: "gray", size: 22 })}
            />
            <CardLayout
              name="All-time"
              num={"Rp412.000,-"}
              icon={DollarIcon({ color: "gray", size: 20 })}
            />
          </div>

          {donations.data && donations.data.length > 0 ? (
            <SupportersTable supporters={donations.data} />
          ) : (
            <Code color="danger" className="h-10 flex items-center">
              Belum ada dukungan yang diterima
            </Code>
          )}
        </div>
      </Section>
    </Layout>
  );
}

function CardLayout({
  num,
  name,
  icon,
}: {
  num: string;
  name: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="sm:w-1/3 flex flex-col gap-1 px-3 py-3 rounded-xl w-full">
      <h2 className="text-2xl font-bold">{num}</h2>
      <span className="flex items-center gap-1">
        {icon && icon} {name}
      </span>
    </div>
  );
}
