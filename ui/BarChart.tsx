
import { ResponsiveBar } from "@nivo/bar";

const data = [
    {
      tipo: "Mercado",
      "0-1 estrellas": 107,
      "1-2 estrellas": 96,
      "2-3 estrellas": 72,
      "3-4 estrellas": 140,
      "4-5 estrellas": 140,
    },
    {
      tipo: "Vivero",
      "0-1 estrellas": 17,
      "1-2 estrellas": 76,
      "2-3 estrellas": 92,
      "3-4 estrellas": 40,
      "4-5 estrellas": 10,
    },
    {
      tipo: "Comida",
      "0-1 estrellas": 66,
      "1-2 estrellas": 94,
      "2-3 estrellas": 22,
      "3-4 estrellas": 10,
      "4-5 estrellas": 120,
    },
    {
      tipo: "Comida rápida",
      "0-1 estrellas": 147,
      "1-2 estrellas": 96,
      "2-3 estrellas": 71,
      "3-4 estrellas": 100,
      "4-5 estrellas": 10,
    },
    {
      tipo: "Ropa",
      "0-1 estrellas": 107,
      "1-2 estrellas": 96,
      "2-3 estrellas": 72,
      "3-4 estrellas": 140,
      "4-5 estrellas": 140,
    },
    {
      tipo: "Bisuteria",
      "0-1 estrellas": 37,
      "1-2 estrellas": 98,
      "2-3 estrellas": 89,
      "3-4 estrellas": 10,
      "4-5 estrellas": 40,
    },
    {
      tipo: "Papeleria",
      "0-1 estrellas": 37,
      "1-2 estrellas": 36,
      "2-3 estrellas": 62,
      "3-4 estrellas": 10,
      "4-5 estrellas": 70,
    },
    {
      tipo: "Otros",
      "0-1 estrellas": 17,
      "1-2 estrellas": 16,
      "2-3 estrellas": 52,
      "3-4 estrellas": 50,
      "4-5 estrellas": 40,
    },
  ];

const BarChart = ({ isDashboard = false }) => {
  

  return (
    <ResponsiveBar
      data={data}
      keys={["0-1 estrellas", "1-2 estrellas", "2-3 estrellas", "3-4 estrellas", "4-5 estrellas"]}
      indexBy="tipo"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "nivo" }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      borderColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "Categoría chaza", // changed
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "Estrellas", // changed
        legendPosition: "middle",
        legendOffset: -40,
      }}
      enableLabel={false}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role="application"
      barAriaLabel={function (e) {
        return e.id + ": " + e.formattedValue + " in tipo: " + e.indexValue;
      }}
    />
  );
};

export default BarChart;