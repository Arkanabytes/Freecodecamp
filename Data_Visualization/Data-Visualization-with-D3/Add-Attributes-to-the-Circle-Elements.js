<body>
  <script>
    const dataset = [
      [ 34,    78 ],
      [ 109,   280 ],
      [ 310,   120 ],
      [ 79,    411 ],
      [ 420,   220 ],
      [ 233,   145 ],
      [ 333,   96 ],
      [ 222,   333 ],
      [ 78,    320 ],
      [ 21,    123 ]
    ];

    const w = 500;
    const h = 500;
    const svg = d3.select("body")
       .append("svg")
       .attr("width", w)
       .attr("height", h);
    
    svg.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")
       .attr("cx", (d) => d[0])
       .attr("cy", (d) => h - d[1])
       .attr("r", 5)
  </script>
</body>
