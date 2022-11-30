
import { ResponsiveBar } from "@nivo/bar";
import { log } from "console";
import { useEffect, useState } from "react";

const BarChart = ({data}:{data: any[]},{ isDashboard = false }) => {
  
  
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


export const getServerSideProps = async (context: { query: any; }) => {
	const query = context.query
	console.log(query)
	const mercado = await fetch(`http://127.0.0.1:5000/chaza/getRatingByCategory/Mercado`)
	.then(res => res.json())
	.catch(err => console.log(err));
    const vivero = await fetch(`http://127.0.0.1:5000/chaza/getRatingByCategory/Vivero`)
	.then(res => res.json())
	.catch(err => console.log(err));
    const comida = await fetch(`http://127.0.0.1:5000/chaza/getRatingByCategory/Comida`)
	.then(res => res.json())
	.catch(err => console.log(err));
    const comidaRapida = await fetch(`http://127.0.0.1:5000/chaza/getRatingByCategory/ComidaRapida`)
	.then(res => res.json())
	.catch(err => console.log(err));
	const ropa = await fetch(`http://127.0.0.1:5000/chaza/getRatingByCategory/Ropa`)
	.then(res => res.json())
	.catch(err => console.log(err));
  const bisuteria = await fetch(`http://127.0.0.1:5000/chaza/getRatingByCategory/Bisuteria`)
	.then(res => res.json())
	.catch(err => console.log(err));
  const papeleria = await fetch(`http://127.0.0.1:5000/chaza/getRatingByCategory/Papeleria`)
	.then(res => res.json())
	.catch(err => console.log(err));
  const otros = await fetch(`http://127.0.0.1:5000/chaza/getRatingByCategory/Otros`)
	.then(res => res.json())
	.catch(err => console.log(err));
  console.log(comida)
  console.log(vivero)
	return {
		props: {
			comida,
			mercado,
      vivero,
      comidaRapida,
      ropa,
      bisuteria,
      papeleria,
      otros,
		}
	}	
}


export default BarChart;