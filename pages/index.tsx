import React,{useState} from 'react'
import {PDFViewer} from '@react-pdf/renderer'
import { MDBBtn } from 'mdb-react-ui-kit'
import { Vpdf, DocuPdf } from '../components/vpdf'


export default function HomePage() {
  const [verWeb, setVerWeb] = useState(false);
  const [verPdf, setVerPdf] = useState(false);
  return (
    <>
      <MDBBtn onClick={()=>{
        setVerWeb(!verWeb)
        setVerPdf(false)
      }}
      >Web</MDBBtn>
      <MDBBtn onClick={()=>{
        setVerWeb(false)
        setVerPdf(!verPdf)
      }}
      >PDF</MDBBtn>
      {verWeb ? <Vpdf/> : null}
      {verPdf ? 
      <PDFViewer style={{width:"100%", height:"90vh"}}>
        <DocuPdf/>
      </PDFViewer> 
      : null}
      
    </>
  )
}