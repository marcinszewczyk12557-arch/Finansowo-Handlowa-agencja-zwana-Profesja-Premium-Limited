import Link from 'next/link';
import { globalBrandsBranch } from '../data/globalBrands';

export default function GlobalBrandsShowcase() {
  const brands = globalBrandsBranch.children ?? [];
  return (
    <section className="section global-brands-showcase" id="globalne-marki">
      <div className="global-brands-heading">
        <div>
          <p className="eyebrow">Nowa gałąź katalogu</p>
          <h2>Globalne produkty czołowych producentów</h2>
          <p>
            Profesjonalne rodziny produktów światowych marek dla klientów B2B. Dokładny model, autentyczność,
            dostępność, gwarancja i kanał dystrybucji są każdorazowo potwierdzane przed złożeniem finalnej oferty.
          </p>
        </div>
        <div className="global-brands-count"><strong>{brands.length}</strong><span>marek i grup wielomarkowych</span></div>
      </div>
      <div className="global-brands-grid">
        {brands.map((brand) => {
          const groups = brand.children ?? [];
          const leafCount = groups.reduce((sum, group) => sum + (group.children?.length ?? 0), 0);
          return (
            <article className="global-brand-card" key={brand.name}>
              <div className="global-brand-mark" aria-hidden="true">{brand.name.split(' ').slice(0, 2).map(part => part[0]).join('').toUpperCase()}</div>
              <div className="global-brand-copy">
                <p className="eyebrow">Marka / producent</p>
                <h3>{brand.name}</h3>
                <p>{groups.map(group => group.name).join(' • ')}</p>
                <div className="global-brand-meta"><span>{groups.length} grup</span><span>{leafCount} rodzin produktów</span><span>{leafCount * 5} wariantów ofert</span></div>
                <details>
                  <summary>Rozwiń ofertę</summary>
                  <div className="global-brand-groups">
                    {groups.map(group => (
                      <div key={group.name}>
                        <strong>{group.name}</strong>
                        <span>{(group.children ?? []).map(item => item.name).join(' • ')}</span>
                      </div>
                    ))}
                  </div>
                </details>
                <Link className="taxonomy-offer-link" href={`/offers/new?product=${encodeURIComponent(brand.name)}`}>Zapytaj o ofertę {brand.name} →</Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
