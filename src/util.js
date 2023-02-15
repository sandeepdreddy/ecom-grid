const ROW_POSITION = "row";
const NUM_GRID_COLUMNS = 3

// util to create chunks of arrays given an array
const createChunks = (array, size) => {
    return array.reduce((chunkedArray, currenItem, index) => {
      const indexOfChunkForItem = Math.floor(index / size)
      if (!chunkedArray[indexOfChunkForItem]) {
        chunkedArray[indexOfChunkForItem] = []
      }
      chunkedArray[indexOfChunkForItem].push(currenItem)
      return chunkedArray
    }, [])
  }

// Extract rows and cells from the content list data 
const extractRowsAndCells = (contentData) => {
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

  // Util to transform the datasets to a combined list similar to the 'mockCombinedData'
  // in the mockData.js file
  export const combineDatasets = (products, contents) => {
    const { contentRows, contentCells } = extractRowsAndCells(contents)
    const cellsInGrid = products.slice()
    // Inject cells
    contentCells.forEach(contentCell => {
      cellsInGrid.splice(contentCell.positionNumber - 1, 0, contentCell)
    })
    // Chunk the array
    const chunkedArray = createChunks(cellsInGrid, NUM_GRID_COLUMNS)
    // Inject rows
    contentRows.forEach(contentRow => {
      chunkedArray.splice(contentRow.positionNumber - 1, 0, [contentRow])
    })
    console.log(chunkedArray)
    return chunkedArray.flat()
  }