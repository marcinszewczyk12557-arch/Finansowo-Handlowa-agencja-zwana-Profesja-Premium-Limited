import Link from 'next/link';
import { medicalOffers } from '../data/medicalOffers';
import {
  canPublishCertificationClaim,
  verifyMedicalEvidence,
} from '../lib/medicalEvidenceGate';

export default function MedicalShowcase() {
  return (
    <section className="section featured-offers-section" aria-labelledby="biov-era-medical-title">
      <p className="eyebrow">BIOVERA • aparatura i urządzenia medyczne</p>
      <h2 id="biov-era-medical-title">10 specjalistycznych rodzin produktów do weryfikowanej oferty B2B</h2>
      <p>
        Każda pozycja jest publikowana jako rodzina produktowa do indywidualnego sourcingu.
        Producent, model, cena, CE, ISO i dokumenty zgodności są potwierdzane przed przedstawieniem
        oferty wiążącej. Brak dokumentu oznacza brak publicznego statusu „zweryfikowano”.
      </p>

      <div className="featured-offer-grid">
        {medicalOffers.map((offer, index) => {
          const verification = verifyMedicalEvidence({
            productId: offer.id,
            targetMarket: offer.targetMarket,
            requiresNotifiedBodyCertificate: offer.requiresNotifiedBodyCertificate,
            evidence: offer.evidence,
          });

          const ceVisible = canPublishCertificationClaim(verification, 'CE');
          const isoVisible = canPublishCertificationClaim(verification, 'ISO');
          const manufacturerVisible = canPublishCertificationClaim(verification, 'MANUFACTURER');

          return (
            <article className="featured-offer-card" key={offer.id}>
              <div
                aria-hidden="true"
                style={{
                  minHeight: 210,
                  display: 'grid',
                  placeItems: 'center',
                  borderBottom: '1px solid #303a3f',
                  background: 'linear-gradient(145deg, rgba(17,35,42,.96), rgba(8,15,19,.98))',
                  color: '#f0d778',
                  fontSize: 42,
                  fontWeight: 800,
                  letterSpacing: '.06em',
                }}
              >
                BIOVERA {String(index + 1).padStart(2, '0')}
              </div>
              <div className="featured-offer-copy">
                <span>OFERTA MEDYCZNA {String(index + 1).padStart(2, '0')} • B2B</span>
                <h3>{offer.family}</h3>
                <p><strong>Kategoria:</strong> {offer.category}</p>
                <p>{offer.presentation.headline}</p>
                <p><strong>Zastosowania:</strong> {offer.presentation.useCases.join(' • ')}</p>
                <p><strong>Status:</strong> {verification.publicLabel}</p>
                <p>
                  <small>{offer.presentation.verificationNote}</small>
                </p>
                <p>
                  <small>
                    Producent: {manufacturerVisible ? 'zweryfikowano' : 'weryfikacja wymagana'} • CE:{' '}
                    {ceVisible ? 'zweryfikowano' : 'weryfikacja wymagana'} • ISO:{' '}
                    {isoVisible ? 'zweryfikowano' : 'niepotwierdzone / niewymagane dla statusu produktu'}
                  </small>
                </p>
                <strong className="featured-price">Cena: indywidualna wycena po weryfikacji modelu i dokumentacji</strong>
                <Link href={`/offers/new?product=${encodeURIComponent(`BIOVERA - ${offer.family}`)}`}>
                  POPROŚ O WERYFIKOWANĄ WYCENĘ →
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
