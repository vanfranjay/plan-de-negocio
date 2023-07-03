import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import html2canvas from 'html2canvas';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor() { }
  generatePdf() {
    const doc = new jsPDF();

    const element = document.getElementById('pdf-content');

    if (element) {
      html2canvas(element).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');

        doc.addImage(imgData, 'PNG', 10, 10, 190, 0);

        doc.save('ejemplo.pdf');
      });
    } else {
      console.error("El elemento 'pdf-content' no se encontró en el DOM.");
    }
  }
}
