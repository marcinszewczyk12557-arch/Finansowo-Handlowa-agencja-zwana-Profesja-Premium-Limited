'use client';

import { FormEvent, useState } from 'react';

type FormalitiesResult = {
  sourceDocumentVersion: string;
  negotiationStatus: string;
  productSnapshot: string | null;
  quantitySnapshot: string | null;
  marketSnapshot: string | null;
  valueSnapshot: string | null;
  financingRequested: boolean;
  financingAmount: string | null;
  shippingMethodSnapshot: string | null;
  estimatedDeliverySnapshot: string | null;
  clientDeclarationStatus: string;
  insuranceConsentStatus: string;
  shippingConsentStatus: string;
  businessUseConsentStatus: string;
  interestConsentStatus: string;
  intermediationConsentStatus: string;
  monthlySettlementStatus: string;
  earlyTerminationStatus: string;
  finalSignatureStatus: string;
  signatureMethod: string | null;
  signedAt: string | null;
  autoFilledAt: string | null;
  updatedAt: string;
};

type OrderResult = {
  number: string;
  product: string;
  quantity: string | null;
  amount: string | null;
  status: string;
  dispatcherStatus: string;
  shippingMethod: string | null;
  carrier: string | null;
  trackingNumber: string | null;
  trackingUrl: string | null;
  pickupAt: string | null;
  estimatedDelivery: string | null;
  transportDocument: string | null;
  confirmedAt: string | null;
  shippedAt: string | null;
  deliveredAt: string | null;
  orderConfirmation: string | null;
  commercialOffer: string | null;
  fulfillmentDocument: string | null;
  createdAt: string;
  updatedAt: string;
  offer: { number: string; formalities: FormalitiesResult | null };
};

type OfferResult = {
  number: string;
  product: string;
  status: string;
  createdAt: string;
  formalities: FormalitiesResult | null;
};

const formalitiesLabels: Array<[keyof FormalitiesResult, string]> = [
  ['clientDeclarationStatus', 'Oświadczenie klienta'],
  ['insuranceConsentStatus', 'Ubezpieczenie / warunek ubezpieczeniowy'],
  ['shippingConsentStatus', 'Warunki wysyłki'],
  ['businessUseConsentStatus', 'Przeznaczenie biznesowe / udostępnienie'],
  ['interestConsentStatus', 'Warunki oprocentowania'],
  ['intermediationConsentStatus', 'Pośrednictwo i dokumentacja wierzytelności'],
  ['monthlySettlementStatus', 'Rozliczenia miesięczne'],
  ['earlyTerminationStatus', 'Warunki wcześniejszego zakończenia'],
  ['finalSignatureStatus', 'Podpis końcowy'],
];

function statusLabel(status: unknown) {
  if (status === 'ACCEPTED') return 'zaakceptowano';
  if (status === 'NOT_APPLICABLE') return 'nie dotyczy';
  if (status === 'REJECTED') return 'odrzucono';
  return 'oczekuje';
}

function dispatcherLabel(status: string) {
  const labels: Record<string, string> = {
    RECEIVED: 'Przyjęte',
    CARRIER_SELECTED: 'Przewoźnik wybrany',
    PICKUP_SCHEDULED: 'Odbiór zaplanowany',
    PICKED_UP: 'Odebrano',
    IN_TRANSIT: 'W transporcie',
    DELIVERED: 'Doręczono',
    CANCELLED: 'Anulowano',
  };
  return labels[status] || status;
}

function FormalitiesPanel({ formalities }: { formalities: FormalitiesResult | null }) {
  if (!formalities) {
    return <section className="admin-note" style={{ marginTop: 16 }}><h3>Formalności transakcyjne</h3><p>Pakiet formalności nie został jeszcze utworzony dla tej sprawy.</p></section>;
  }

  const accepted = formalitiesLabels.filter(([key]) => ['ACCEPTED', 'NOT_APPLICABLE'].includes(String(formalities[key]))).length;

  return (
    <section className="admin-note" style={{ marginTop: 16 }}>
      <p className="eyebrow">Procedura zarządczo-wykonawcza</p>
      <h3>Formalności transakcyjne: {accepted}/{formalitiesLabels.length}</h3>
      <p><strong>Status negocjacyjny:</strong> {formalities.negotiationStatus}</p>
      <p>Dane produktu, ilości, wartości, rynku, finansowania i dostawy są synchronizowane z przebiegu sprawy. Żadna zgoda ani podpis nie są akceptowane automatycznie.</p>
      <details>
        <summary>Pokaż status poszczególnych formalności</summary>
        {formalitiesLabels.map(([key, label]) => <p key={key}><strong>{label}:</strong> {statusLabel(formalities[key])}</p>)}
      </details>
      <details>
        <summary>Pokaż dane uzupełnione z transakcji</summary>
        <p><strong>Produkt:</strong> {formalities.productSnapshot || '—'}</p>
        <p><strong>Ilość:</strong> {formalities.quantitySnapshot || '—'}</p>
        <p><strong>Rynek:</strong> {formalities.marketSnapshot || '—'}</p>
        <p><strong>Wartość:</strong> {formalities.valueSnapshot || '—'}</p>
        <p><strong>Finansowanie:</strong> {formalities.financingRequested ? (formalities.financingAmount || 'tak — kwota do ustalenia') : 'nie'}</p>
        <p><strong>Dostawa:</strong> {formalities.shippingMethodSnapshot || '—'}</p>
        {formalities.estimatedDeliverySnapshot ? <p><strong>Planowana dostawa:</strong> {new Date(formalities.estimatedDeliverySnapshot).toLocaleString('pl-PL')}</p> : null}
      </details>
      {formalities.signedAt ? <p><strong>Podpis zarejestrowano:</strong> {new Date(formalities.signedAt).toLocaleString('pl-PL')} {formalities.signatureMethod ? `• ${formalities.signatureMethod}` : ''}</p> : <p><strong>Podpis:</strong> oczekuje na odrębną czynność klienta.</p>}
    </section>
  );
}

export default function OrderLookup() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [order, setOrder] = useState<OrderResult | null>(null);
  const [offer, setOffer] = useState<OfferResult | null>(null);
  const [message, setMessage] = useState('');

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError('');
    setOrder(null);
    setOffer(null);
    setMessage('');

    const form = new FormData(event.currentTarget);
    const reference = String(form.get('reference') || '').trim();
    const email = String(form.get('email') || '').trim();

    try {
      const response = await fetch(`/api/orders/lookup?reference=${encodeURIComponent(reference)}&email=${encodeURIComponent(email)}`, { cache: 'no-store' });
      const data = await response.json();
      if (!response.ok || !data.ok) throw new Error(data.error || 'Nie udało się sprawdzić sprawy.');
      if (data.kind === 'offer') {
        setOffer(data.offer);
        setMessage(data.message || 'Zapytanie jest w obsłudze.');
      } else {
        setOrder(data.order);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Nie udało się sprawdzić sprawy.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="section admin-note">
      <p className="eyebrow">Status sprawy</p>
      <h2>Sprawdź zapytanie lub realizację B2B</h2>
      <p>Wpisz numer sprawy PPL lub numer zamówienia ORD oraz ten sam adres e-mail, który został podany w zapytaniu.</p>
      <form className="premium-form" onSubmit={submit}>
        <div className="form-grid">
          <label>Numer sprawy / zamówienia<input name="reference" placeholder="PPL-... lub ORD-..." required /></label>
          <label>Adres e-mail<input name="email" type="email" placeholder="kontakt@firma.pl" required /></label>
        </div>
        <button type="submit" disabled={loading}>{loading ? 'SPRAWDZAM...' : 'SPRAWDŹ STATUS'}</button>
      </form>
      {error ? <p className="form-status" role="alert">{error}</p> : null}
      {offer ? (
        <article className="card" style={{ marginTop: 20 }}>
          <p className="eyebrow">Zapytanie {offer.status}</p>
          <h3>{offer.number}</h3>
          <p><strong>Produkt / usługa:</strong> {offer.product}</p>
          <p><strong>Aktualny etap:</strong> {offer.status}</p>
          <p><strong>Data zgłoszenia:</strong> {new Date(offer.createdAt).toLocaleString('pl-PL')}</p>
          <p>{message}</p>
          <FormalitiesPanel formalities={offer.formalities} />
        </article>
      ) : null}
      {order ? (
        <article className="card" style={{ marginTop: 20 }}>
          <p className="eyebrow">Zamówienie {order.status}</p>
          <h3>{order.number}</h3>
          <p><strong>Powiązana sprawa:</strong> {order.offer.number}</p>
          <p><strong>Produkt / usługa:</strong> {order.product}</p>
          <p><strong>Ilość:</strong> {order.quantity || '—'}</p>
          <p><strong>Wartość:</strong> {order.amount || 'Wycena / kwota potwierdzana indywidualnie'}</p>
          {order.product.toUpperCase().includes('VELOX') ? <p><strong>Status VELOX:</strong> {dispatcherLabel(order.dispatcherStatus)}</p> : null}
          {order.shippingMethod ? <p><strong>Sposób dostawy:</strong> {order.shippingMethod}</p> : null}
          {order.carrier ? <p><strong>Przewoźnik:</strong> {order.carrier}</p> : null}
          {order.pickupAt ? <p><strong>Planowany odbiór:</strong> {new Date(order.pickupAt).toLocaleString('pl-PL')}</p> : null}
          {order.trackingNumber ? <p><strong>Numer przesyłki:</strong> {order.trackingNumber}</p> : null}
          {order.trackingUrl ? <p><a href={order.trackingUrl} target="_blank" rel="noreferrer">Śledź przesyłkę ↗</a></p> : null}
          {order.estimatedDelivery ? <p><strong>Planowany termin dostawy:</strong> {new Date(order.estimatedDelivery).toLocaleString('pl-PL')}</p> : null}
          {order.transportDocument ? <p><strong>Dokument transportowy:</strong> {order.transportDocument}</p> : null}
          {order.orderConfirmation ? <p><strong>Potwierdzenie zamówienia:</strong> {order.orderConfirmation}</p> : null}
          {order.commercialOffer ? <p><strong>Oferta / wycena:</strong> {order.commercialOffer}</p> : null}
          {order.fulfillmentDocument ? <p><strong>Dokument realizacji:</strong> {order.fulfillmentDocument}</p> : null}
          {order.confirmedAt ? <p><strong>Potwierdzono:</strong> {new Date(order.confirmedAt).toLocaleString('pl-PL')}</p> : null}
          {order.shippedAt ? <p><strong>Wysłano / odebrano do transportu:</strong> {new Date(order.shippedAt).toLocaleString('pl-PL')}</p> : null}
          {order.deliveredAt ? <p><strong>Dostarczono:</strong> {new Date(order.deliveredAt).toLocaleString('pl-PL')}</p> : null}
          <p><strong>Utworzono:</strong> {new Date(order.createdAt).toLocaleString('pl-PL')}</p>
          <p><strong>Ostatnia aktualizacja:</strong> {new Date(order.updatedAt).toLocaleString('pl-PL')}</p>
          <FormalitiesPanel formalities={order.offer.formalities} />
        </article>
      ) : null}
    </section>
  );
}
