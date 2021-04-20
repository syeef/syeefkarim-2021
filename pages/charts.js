import AboutLayout from "@layouts/about";
import Link from "next/link";
import Work from "@includes/work";
import { getConfig, getAllPosts } from "@api";

import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { format, parseISO, subDays } from "date-fns";

import styles from "@layouts/about.module.scss";

// const endpoint = "https://api.coindesk.com/v1/bpi/historical/close.json";
// const endpoint = "https://jsonplaceholder.typicode.com/todos";

export async function getServerSideProps() {
  const res = await fetch(
    "https://api.coindesk.com/v1/bpi/historical/close.json"
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

const data1 = [];
for (let num = 30; num >= 0; num--) {
  data1.push({
    date: subDays(new Date(), num).toISOString().substr(0, 10),
    value: 1 + Math.random(),
  });
}

function CustomTooltip({ active, payload, label }) {
  if (active) {
    return (
      <div className="tooltip">
        <h4>{format(parseISO(label), "eeee, d MMM, yyyy")}</h4>
        <p>${payload[0].value.toFixed(2)} USD</p>
      </div>
    );
  }
  return null;
}

export default function Charts({ data }, props) {
  console.log(data);
  return (
    <>
      <AboutLayout title={props.title} description={props.description}>
        <section>
          <h5>Test</h5>
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={data1}>
              <defs>
                <linearGradient id="strokeColor" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#B4AFF5" stopOpacity={1} />
                  <stop offset="14%" stopColor="#C1BAEF" stopOpacity={1} />
                  <stop offset="28%" stopColor="#D8CBE6" stopOpacity={1} />
                  <stop offset="42%" stopColor="#DECAD7" stopOpacity={1} />
                  <stop offset="56%" stopColor="#E6C6C4" stopOpacity={1} />
                  <stop offset="70%" stopColor="#EBC0B1" stopOpacity={1} />
                  <stop offset="100%" stopColor="#EBBDA9" stopOpacity={1} />
                </linearGradient>
                <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4} />
                  <stop offset="75%" stopColor="#2451B7" stopOpacity={0.05} />
                </linearGradient>
              </defs>

              <Area
                dataKey="value"
                stroke="url(#strokeColor)"
                fill="url(#color)"
              />

              <XAxis
                dataKey="date"
                axisLine={false}
                tickLine={false}
                tickFormatter={(str) => {
                  const date = parseISO(str);
                  if (date.getDate()) {
                    return format(date, "MMM, d");
                  }
                  return "";
                }}
              />

              <YAxis
                datakey="value"
                axisLine={false}
                tickLine={false}
                tickCount={8}
                tickFormatter={(number) => `$${number.toFixed(2)}`}
              />

              <Tooltip content={<CustomTooltip />} />

              <CartesianGrid opacity={0.1} vertical={false} />
            </AreaChart>
          </ResponsiveContainer>
          <p>
            This isn't using a proper API yet, that's the next step. I also want
            the tooltip to stay in one place on the yAxis.
          </p>
        </section>
      </AboutLayout>
    </>
  );
}
