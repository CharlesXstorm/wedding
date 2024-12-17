export const formatparagraph = () => {
  const paraGraph = document.querySelectorAll(".paragraph");

  paraGraph.forEach(function (paragraph) {
    const title = paragraph.textContent?.replace(/\\n/g, "\n") as string;
    paragraph.textContent = title;
    // console.log("paragraph",title)
  });
};
