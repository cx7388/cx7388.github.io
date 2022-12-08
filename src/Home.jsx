import React, { useState, Component } from 'react';
import intl from 'react-intl-universal';
import './App.css';
import kuleuven from './image/kuleuven.svg';
import swjtu from './image/swjtu.jpg';
import vub from './image/vub.svg';
import { Row, Col, Button } from 'reactstrap';
import cv from './image/cv.png';
import { Document, Page } from 'react-pdf';
import cvPdf from './image/CV_academic.pdf';
// const headStyle = {
//   textAlign: 'left'
// };
// const textStyle = {
//   textAlign: 'justify'
// }

// const [numPages, setNumPages] = useState(null);
// const [pageNumber, setPageNumber] = useState(1);

// function onDocumentLoadSuccess({ numPages }) {
//   setNumPages(numPages);
// }

//   class Home extends Component {

//     render() {
//       return (
//         <div>
//           <Document file={cvPdf} onLoadSuccess={onDocumentLoadSuccess}>
//             <Page pageNumber={pageNumber} />
//           </Document>
//           <p>
//             Page {pageNumber} of {numPages}
//           </p>
//         </div>
//       );
//     }
//   }

//   export default Home;


export default function Home() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <div>
      <Row style={{ marginLeft: "auto", marginRight: "auto" }}>
        <Col
          // className="bg-light border"
          sm={{ size: 12, offset: 3 }}>
          <Document
            file={cvPdf}
            width="100"
            onLoadSuccess={onDocumentLoadSuccess}
          // width="1000"

          >
            <Page pageNumber={pageNumber} />
          </Document>
        </Col>
      </Row>
      {/* <Row>
        <Col
                className="bg-light border"
                sm={{
                  offset: 5,
                  order: 2,
                  size: 6
                }}>
          <p>
            Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
          </p>
        </Col>
      </Row> */}
      <Row>
        <Col
          // className="bg-light border"
          sm={{
            offset: 5,
            size: 6
          }}
          >

          <Button color="primary"
            disabled={pageNumber <= 1}
            onClick={previousPage}
            size="lg"
          >
            Previous
          </Button>
          <Button color="primary"
            disabled={pageNumber >= numPages}
            onClick={nextPage}
            size="lg"
          >
            Next
          </Button>
        </Col>
      </Row>
    </div>
  );
}