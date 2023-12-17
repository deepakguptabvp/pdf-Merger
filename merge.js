const PDFMerger = require('pdf-merger-js');

var merger = new PDFMerger();

const mergePdfs = async (pdf1,pdf2) => {
  await merger.add(pdf1);  //merge all pages. parameter is the path to file and filename.
  await merger.add(pdf2); // merge only page 2
  // await merger.add(pdf3);
  // await merger.add(pdf4);
  // await merger.add(pdf5);   
//   await merger.add('pdf2.pdf', [1, 3]); // merge the pages 1 and 3
//   await merger.add('pdf2.pdf', '4, 7, 8'); // merge the pages 4, 7 and 8
//   await merger.add('pdf3.pdf', '3 to 5'); //merge pages 3 to 5 (3,4,5)
//   await merger.add('pdf3.pdf', '3-5'); //merge pages 3 to 5 (3,4,5)

  await merger.save('public/merged.pdf'); //save under given name and reset the internal document
  
  // Export the merged PDF as a nodejs Buffer
  // const mergedPdfBuffer = await merger.saveAsBuffer();
  // fs.writeSync('merged.pdf', mergedPdfBuffer);
}

module.exports = {mergePdfs}