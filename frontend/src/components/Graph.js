import React from "react";
import "../App.css";
import ReactApexChart from "react-apexcharts";

function Graph() {    // fonction qui sort le graph
  
    const values = [    // valeurs rentrer à la main
    {
      name: "Money",
      data: [400,300,525,700,32,80,1200,463,500,],
    },];

  const options = {   // options voulues
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: ["1/22/20","2/1/20","2/15/20","3/1/20","3/15/20","4/1/20","4/15/20","5/1/20","5/7/20",],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy",
      },
    },
  };

  return (      // quelques lignes de style au lieu du css
    <div
      style={{
        color: "white",
        backgroundColor: "rgba(22, 24, 66, 1)",
        textAlign: "center",
      }}
    >
      <br />
      <h2>My Money</h2>
      <br />
      <ReactApexChart     // appel de la balise qui nous sort le graph type area
        options={options}
        series={values}
        type="area"
        height={200}
      />
      <br />
    </div>
  );
}

export default Graph;