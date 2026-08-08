'use client';

export default function PrintDocumentButton() {
  return <button type="button" onClick={() => window.print()}>DRUKUJ / ZAPISZ JAKO PDF</button>;
}
