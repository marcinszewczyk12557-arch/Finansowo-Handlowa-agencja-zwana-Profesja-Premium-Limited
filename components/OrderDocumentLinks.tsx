import Link from 'next/link';

export default function OrderDocumentLinks({ orderId }: { orderId: number }) {
  return (
    <div className="cta-row" style={{ marginTop: 16, flexWrap: 'wrap' }}>
      <Link href={`/admin/orders/${orderId}/document/confirmation`}><button type="button" className="cta-secondary">POTWIERDZENIE ZAMÓWIENIA</button></Link>
      <Link href={`/admin/orders/${orderId}/document/offer`}><button type="button" className="cta-secondary">OFERTA HANDLOWA</button></Link>
      <Link href={`/admin/orders/${orderId}/document/fulfillment`}><button type="button" className="cta-secondary">DOKUMENT REALIZACJI</button></Link>
    </div>
  );
}
