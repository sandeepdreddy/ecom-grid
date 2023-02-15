const ROW_POSITION = "row";

// Extract rows and cells from the content list data 
export const extractRowsAndCells = (contentData) => {
    let contentRows = [];
    let contentCells = [];
    for (let i = 0; i < contentData.length; i++) {
      const [type, position] = contentData[i].position.split("-");
      if (type.includes(ROW_POSITION)) {
        contentRows.push({
          ...contentData[i],
          positionNumber: Number(position),
          positionType: "row",
          isContent: true
        });
      } else {
        contentCells.push({
          ...contentData[i],
          positionNumber: Number(position),
          positionType: "cell",
          isContent: true
        });
      }
    }
    contentRows = contentRows.sort((a, b) => a.positionNumber - b.positionNumber);
    contentCells = contentCells.sort(
      (a, b) => a.positionNumber - b.positionNumber
    );
    return {
      contentRows,
      contentCells
    }
  }