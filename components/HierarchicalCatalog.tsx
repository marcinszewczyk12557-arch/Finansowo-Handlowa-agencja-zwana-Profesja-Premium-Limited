'use client';

import { useMemo, useState } from 'react';
import catalogTaxonomy, { type TaxonomyBranch } from '../data/catalogTaxonomy';

// Poprzednia cena katalogowa była liczona jako wartość bazowa × 1,82.
// Zgodnie z aktualną dyspozycją każda oferta jest o 19% tańsza: 1,82 × 0,81 = 1,4742.
const PRICE_MULTIPLIER = 1.4742;
const productSeries = ['SELECT', 'PRO', 'EXECUTIVE', 'INDUSTRIAL', 'SIGNATURE'];

const smartphoneImages = [
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDACQZGyAbFyQgHiApJyQrNls7NjIyNm9PVEJbhHSKiIF0f32Ro9GxkZrFnX1/tve4xdje6uzqja////7j/9Hl6uH/2wBDAScpKTYwNms7O2vhln+W4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eH/wAARCABgAGADASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAAMEAQIF/8QAMRAAAgECBAUCBAUFAAAAAAAAAAECAxEEITEyEjNxgbFBYQUTUXIUQlOSwRUiUmKh/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFhEBAQEAAAAAAAAAAAAAAAAAABEB/9oADAMBAAIRAxEAPwD3ABaABknZXtc25zU29yHEYeu/iNKtTu45Ju+i9QPQAzNt3WXoJrVHCUIqzUmk0wGxqwm7RnFv2Z0JpRjKnaUU1xPVe7N+W1snKPs80A0BfHUjugpe8X/DOoTU72vlqmrAdAAAC0AAA5qNKObtmQ4ijiP6lSq07uGSdnkl63LK6bgrf5LyRYhYlfE6UqfE6TsstLetwL05OUk42S0d9SbFc2n9OJFRJjtI9QHUOX3fljBWG5Ee/kaEBkOZPov5NMhzJ9EB2AAFAAAHFXZ3OvU5q7NbZnQAS4vdT+5FRLi91P7kAyi0qaXu/Iy5NF2pxdr5tdMzaFW1R0noleL9iopMhzJdEI+dxyajovUbR3Sv9EQNAACgAADiqk4Z6XNOa8eKml/smdAaSYzWH3IqJcb+TqgCm7UXlfN+SStUlOoowUIVEm8voVUlenZ/V+TFh4wqubzurFQuh8uaUbST/wCMtpb59ESU6Eqcm75XyKqG6fYBwABFAAAHNTaBlXb3ADSTG/l6lZHjtI9QClyl1fk6uzmjyV38mmmWqTHUN0+whaj6G6fYmrhwABFAAAC6+xdQafEn6Hc4qUbO/Yzh92BhJj9q6lnD7sXVoQqL+6+QE9DkR7+To2OFnGNlWdvtRv4af6z/AGItSOVqOobp9haw0/13+xDqNJ073m5N+trAhgABFf/Z',
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDACQZGyAbFyQgHiApJyQrNls7NjIyNm9PVEJbhHSKiIF0f32Ro9GxkZrFnX1/tve4xdje6uzqja////7j/9Hl6uH/2wBDAScpKTYwNms7O2vhln+W4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eH/wAARCABeAGADASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAAAwQAAgUBBv/EADcQAAEDAgMEBgkDBQAAAAAAAAEAAgMEERIhMQU0UXETFUFhksEUIjJCU3KRsdEkM6EjUmJjgv/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAwDAQACEQMRAD8A3ECsndT05ewAuvYXR0rtEXprf5BAgNp1ZF2xMI0GWv8AKEdt1At6jM+4oMj2wuZiAJBxNvfJLSMDSLutdUP9dVH9kf0KdoKuprGOdeNmE29knzWGWrY2H+xL8yIetUfFj8B/KmGp+LH4D+V0zxg2xX5KvpcN7Yv4Qdw1PxY/AfyphqPix+A/lFBBFxouoBwveXvZIWkttmBbVFQYt5m5N+yMoqJeu/YHzBMJavyg/wCggyZ6aN8jSZsGMAFp95UnpA59w4gaEcQrz0rppGuDhhOoPZyTDm9nBUZ72WyAXGVD4Y3RsJAcbmyZkZqk5WEuyNkFo55JJmsutZ9S6NojdES23tOFmrJgjdBK1x1K0enkb7xtwKzrUjQpJWywhzcu7gjrNdWBsI6Msa7SxbpyWg03aDe9xqrGbFIt5m5N+yMgxbzNyb9kZBEntM2pm/OPNOJPau534OCBNj/VC7izSzH5Bdx5lVBXC4SMhwVIvYi2YKcDrtSM8ZlqQAbWFyinomteQSMuyyKYwe1KRf049UxTyufK1qzjWrNp7uu1wPcVqsFmNFrZLgjaABbRWVkZt0GLe5+TfNMIEO9Tnts3zR0ESO1x+iJ4OCeSO2NxPzBBiteu48yggqXzVQ01+Ssx8TY5C/2jkOSWDskKa5tYoDmpzy07inNnua+TXPVY5aUejqHQTgm9tCor1Q0Gd1EKCTpYWuHaiLSKQj9VOe5vmjpeHepz3N80wsqiS2xuDuYTqS2vuDuYQecvqu3VeK6qi11VxzF1FR+rUUctGG6jYydLXV4YOkbnI1vcSrlvRCxsctQUQxC94bbEWkcCmItqYXYJmG47QkGy8SLqszXEdI3Vuao3qSRsssr2G7SG/ZMrK2A4uhlub+sFqrKoktr7g7mE6h1EDKiIxyXwngg8kTmVBovQdS03F/1U6lpuMn1VGAqP91ei6lpuMn1XDsSlOpk+qg85jN7q8T7OzOS9B1HSf7PEoNh0g+J4kGO+RgOQBXPSGjLDkdbLaOxaU9sniXOpKXjJ4ldFNghohlwnLEFqoFJSRUbCyK9ibm5R1B//2Q==',
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDACQZGyAbFyQgHiApJyQrNls7NjIyNm9PVEJbhHSKiIF0f32Ro9GxkZrFnX1/tve4xdje6uzqja////7j/9Hl6uH/2wBDAScpKTYwNms7O2vhln+W4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eH/wAARCABfAGADASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAAAAYDBAUBAv/EADIQAAEEAQEFBgQGAwAAAAAAAAEAAgMRBCEFEjEycTM0UXKBkRMVImEUI0FSobE1wdH/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQID/8QAGBEBAQEBAQAAAAAAAAAAAAAAAAERAhL/2gAMAwEAAhEDEQA/ANxCEIPMjxFG57uDRZVFm1oi4tkY5uvEaq1m64kvlS8805wrW+KBjiyIph+XI132vVcyJhBGXkX4BLd0bCmbkSvHw3yOc0AkA9EG4MkNH5sb4/vVj3ClZIyQWxzXDxBtdbyjoon48TzvFlO/c3Q+4QTIUHw5mcku+PCQf7CljcXMtwo8CLtB6QhCAQhCCHL7rJ0S3O4h7t0a7yZMzusvlS1M6nGuO8g6vUXP6FeF2LtPQoGWSeOCMOleGj7qn82a+xBjyyEeig2tHc8Dn26MiqtRy5m5HuRQBjKouCNeLZsXMfNyHF3xoGgDhuuVvFkEsIeODiT/AClvLsPpjrYQDYvVb2yv8dD0P9qsraEIUAhCEEOb3SXypbfzu6lMeb3OXypbfzu6oOL1F2noV4XYu09CgY8uET4tfq36gszKkbDjgUCXGja2hq0X4LOmhjcHMlY3daTSOnHdkxVxsrHdjObIADWv3WnsyvwEdcNa90uyRsbLJuatHBMezm7mFG0m6v8AtGerqyhCEZCEIQQZ3c5fKlp/O7qmXO7lN5Usv53dUHF6j7T0Xheo+09EDW3lHRQZOLHO19lwcRxBU7eUdFWynkNDA76i7+FRgMDY2hhN2bNJjwXB+KxwNgpfmiP4h8hI0Ogbra3dmjdwYwavXh1Si0hCFAIQhBXz+5TeVLL+d3VM2f3KbypZcCXOoIOLsfaLyux9ogbW8o6LG2jK58ji01Wgpa7TTR0WRP8ATGXEak2qjmLCxsTjK/6G6uo6krU2e3dxGCqq9PDVUMZgO/kvAZEDYYOBNK/gyGXFbI6rcSTXVKqwhCFAIQhBX2h3GbylLO+QXfdNksbZonRv5XCjSofJcb90nugX7XY+db3yTG/dJ7o+SYwNh0nuP+ILMsnw4C7wCzMnIADIwACeKvnZkbm06ecjwL14Ox8cmy+UnzK6IJnOLGR7pDA39RVq7s0AYUYBsa6+q8O2ZG8U+adwqtXqzBCzHhbFHe63haCRCEKD/9k=',
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDACQZGyAbFyQgHiApJyQrNls7NjIyNm9PVEJbhHSKiIF0f32Ro9GxkZrFnX1/tve4xdje6uzqja////7j/9Hl6uH/2wBDAScpKTYwNms7O2vhln+W4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eH/wAARCABfAGADASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAAAwUCBAYAAf/EADoQAAEDAgIFBwsDBQAAAAAAAAEAAgMEESExBTFBUXITFTI1cZLBIiMzQlNhY4KRodE0UoEUJGKx4f/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAaEQEBAQADAQAAAAAAAAAAAAAAARECEiEx/9oADAMBAAIRAxEAPwB5YblU0jUmjpTKxgc64ABVsaku091f84QUhpirIuKeO38qJ05UjXDF91WbKGYLtBIvYm+V0N4AeLm2LYUF4aZqiLiCP7q/Q1FRVwmQ8kyxtbCT4pXCQGJposjkH2/f4BBYw1HtIu4fyuw1HtIu4fyi5nUvcJ3qoDhqPaRdw/ldhqP3xdw/lFvnYr1BCBzn4w8NxMda4GtFsNyBT9Ofj8AjqK4aku091f8AOExS7TvV/wA4QKRTElrTKwY7HATrU30EgN8TbHWF5yIe5hMjSw67mxCuumiw2xj6qhe6N8e0K1SVzaWmdjPlF2QAQZntOpwVQmPlml7iBvtdBc5zmmkN3YG7A3JMoZ5jAJuVFj6rwkLwHTtcyxbcaloYZGRsa3CCQFKsiyx/KMBIsVIIbyJISA4s7F5TvBbgzBZlmbmyaliVP6Sfj8AjINP6Sfj8AjIOSzT/AOhHGEzS3TwH9B84QKW9AL0syyNz7tX1UGeVYbEUnJa+IA9pGsH+DdCw3eHHNrRco7ygSvIbhGo5qaIOJc4vGu6bUc7pGZjyhkUmRY53xHyDZTNalw+Mxb0rDtKNBJJJKLWwjXlsSGl5Spq2RucTiK08bGxsDWjIJ1w7IU3pqjjH+grCBTAcrOduPwCOiOS3T4vQX3PCZJZp8f2HzhAoFmtjdfpAj7/9XFyE70dwLnYvC4jJwsVaiTnK1T6PNZTY2usWkjtVI5ptoyqipqUtlcQ8uJDbZlFKqmndTPwP6SjBGJHFp14SW9qPXSvqKkyvbYamjcEFj8ErXAWLTey1xnvqVb0LYVzbkDI2WjWeomsj0o0E2be7fBaBXlMqSh0w87Od7/AKwq9MPOTn/PwCsLm05LdPdXnjCZJbp7q88YQIx0QvCTa2zcu9Udi8v7lYj1sjmdGwO8AI0crBF5zNxO1AxCxGEdu5Dk2diosCQPuDn4hQMezZsKCx1nBWMa1KlGbG6R8crM3MABaNeSuDScsEpZKBI3WDqNkrcXNzFxuUA65N9e9b5WVmStRQStmbLIzoufl9ArSXaD/RHjKYrhXRyW6e6uPGEyQqmmjqoTFKDhJvkUGTxCwzXmILQcx0fxO8u5io/id5BnrhRf6p9y0fMdH8TvL3mSktbzluJBmVNrti0fMlHuf3l3MlHuf3lZUxny+7bFDWk5lpNz+8u5ko9z+8rpjzQOdCeMpkhU1NHSxcnECG3vmUVZV//9k=',
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDACQZGyAbFyQgHiApJyQrNls7NjIyNm9PVEJbhHSKiIF0f32Ro9GxkZrFnX1/tve4xdje6uzqja////7j/9Hl6uH/2wBDAScpKTYwNms7O2vhln+W4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eH/wAARCABfAGADASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAAAwQAAgUBBv/EADoQAAEDAgMEBQkHBQAAAAAAAAEAAgMEERIhMQVBUXITFCJh0SMyQ1JicZGSoRUkM1OBscFCVGNz4f/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAYEQEBAQEBAAAAAAAAAAAAAAAAARExAv/aAAwDAQACEQMRAD8A3FWRxaMlZUk3IAOq2sfgJz5clSTaMUcwie+zz7OQScwpxXAOkGPMWIO/dwQaqCn6/Z8+HGbuYR/KDWdVYTb+FIppZgXMLA0G2YN0C9nO9yNRkdG4+2UBPL+tH8p8VPvHrRfKfFXzOi7Y9yqB/ePWj+U+Knl/Wj+U+KvfiuoKwvc9rsVrtcQbIiFT+l5yiqKiHMbNuiIU/mIMmSijkrbGoaA92Mxk53Vp9lmSpMnSdhxu5p1VJNnzSVeIkFhN8V7ELUc4EIEZmvDiQ6wtopDVtp4CHnO99NUSZJ9VZK7GXkEHMEXCsHTtOWVxwnA3dbVOwVE7oOnD2Yc+y8W+qyaqncJGuaOzcZjRbUDo44mMsDhCUg7H9IwG1irBVcQ+IhrsGWoGiHTPBaY88TOJzI4oYJT+l5yioVP6XnKKoIhy6j9URDm/pQLzTMhbiefcBqUJ0ssgBiYADvcVR7Gz1pLhdsQtbiUwrxCr+sAXc2N49k2P1VIQXkmxtfQpqQ5LNqK0U7ZGNze7TLRAvtCoM0mGPzGHUbzxTdDO+RliLuGqxtyLDUPhN2G3vSzVlx6EzObbEAB3myJFLJJK22EN32G73rAgklqqtjHOviNl6eOMRMDW7t/FMNcpvOm/2H9gjINPrLzlGUEQajINPejJesuGtPegWiGF8uebn3V3OS9TeGTpmguBFntGtuK70jXi7XBWokj0rLs91ZH0jSAQSiyHLMgJzZ5Bgy3uKKw27OcHFryQQdwRnbMa2JxDnEgXC2Jon9J0mRyshOkabgtLHDUELUiMjY9uvsvYa6r0i89SxBu1ms3B1x+69CnqYitMM5TxeUZBptZecoyw0iXrPMbzJhLVuUbOYIF7DEXbygSQMcbi7T7JsiE6obsV8nWHuVlQIxhoPace87lo7NsKW3tHVZ7r21/WyYopiInx7wbhBog3Jac+HehyQ4mkfBDjlxPF+Ka1Tg89URPg2iyS1m5G/uW4x2MXXJomyNIcAUvQPe5j2yOBex5bkNOC3bLEM0/pOcoyDT+k5yjLm0iVr/wm8wTSHPC2dmFxIzvkgzL6qhKf+z4/zJPiufZ0f5knxQZrii0wcCHW7JuL96cOzYvXk+Ks2gDGlrJpADmRl4KgLMpbpuN+LJC6j/nk+ngrCkINxPJ9PBNQS3aJ3FKjyW0CN0rfqP8AiY6u/wDuJPgPBUdRY3te6eTE03Byy+iaYJT6Sc5RlSKMRMwglxJuSd6uor//2Q=='
];

const categoryBasePrice: Record<string, number> = {
  'Smartfony Premium': 4200,
  'Laptopy Premium': 6900,
  'Energia i Fotowoltaika': 28000,
  HVAC: 8200,
  'Meble Premium': 7200,
  'Drzwi i Bramy Premium': 6400,
  'Maszyny i Sprzęt Ciężki': 52000,
  'Wyposażenie Przedsiębiorstw': 1800,
  'Wellness Premium': 8500,
  'Smart Home Premium': 2400,
  'Luxury Interior': 6200,
  'Outdoor Luxury': 7800,
  'Premium Lighting': 1600,
  'Executive Office': 5400,
  'Hospitality Premium': 7600,
  'Audio Video Premium': 4300,
  'E-Mobility': 5200,
  'Leisure Premium': 3600,
};

type LeafPath = { category: string; path: string[]; leaf: string };

function collectLeaves(branch: TaxonomyBranch, parents: string[] = []): string[][] {
  const next = [...parents, branch.name];
  if (!branch.children?.length) return [next];
  return branch.children.flatMap((child) => collectLeaves(child, next));
}

function allLeafPaths(): LeafPath[] {
  return catalogTaxonomy.flatMap((category) => collectLeaves(category).map((path) => ({ category: category.name, path, leaf: path[path.length - 1] })));
}

function hashText(text: string) {
  let hash = 0;
  for (let i = 0; i < text.length; i += 1) hash = (hash * 31 + text.charCodeAt(i)) >>> 0;
  return hash;
}

function priceFor(category: string, fullPath: string, index: number) {
  const base = categoryBasePrice[category] ?? 3000;
  const variance = 0.82 + ((hashText(fullPath) % 37) / 100);
  const levelFactor = 1 + index * 0.18;
  return Math.round((base * variance * levelFactor * PRICE_MULTIPLIER) / 10) * 10;
}

function formatPln(value: number) {
  return new Intl.NumberFormat('pl-PL', { style: 'currency', currency: 'PLN', maximumFractionDigits: 0 }).format(value);
}

function Tree({ branches, depth = 0 }: { branches: TaxonomyBranch[]; depth?: number }) {
  return <div className={`taxonomy-tree taxonomy-depth-${depth}`}>{branches.map((branch) => <details key={`${depth}-${branch.name}`} open={depth === 0}><summary>{branch.name}{branch.children?.length ? <span>{branch.children.length} elementy</span> : <span>5 produktów</span>}</summary>{branch.children?.length ? <Tree branches={branch.children} depth={depth + 1} /> : null}</details>)}</div>;
}

export default function HierarchicalCatalog() {
  const leaves = useMemo(() => allLeafPaths(), []);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('Wszystkie');
  const filteredLeaves = useMemo(() => {
    const q = query.trim().toLowerCase();
    return leaves.filter((item) => (category === 'Wszystkie' || item.category === category) && (!q || item.path.join(' ').toLowerCase().includes(q)));
  }, [leaves, query, category]);

  return <>
    <section className="section catalog-taxonomy-summary"><div className="catalog-meta"><div><strong>{catalogTaxonomy.length}</strong><span>kategorii głównych</span></div><div><strong>{leaves.length}</strong><span>najniższych elementów katalogu</span></div><div><strong>{leaves.length * 5}</strong><span>pozycji produktowych — po 5 na każdy element</span></div></div></section>
    <section className="section taxonomy-browser">
      <div className="catalog-toolbar"><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Szukaj kategorii, podkategorii lub produktu..."/><select value={category} onChange={(e) => setCategory(e.target.value)}><option>Wszystkie</option>{catalogTaxonomy.map((item) => <option key={item.name}>{item.name}</option>)}</select></div>
      <div className="taxonomy-layout"><aside className="taxonomy-sidebar"><h3>Struktura katalogu</h3><Tree branches={catalogTaxonomy}/></aside><div className="taxonomy-products">
        {filteredLeaves.map((item, leafIndex) => { const pathLabel = item.path.join(' / '); return <section className="taxonomy-leaf" key={pathLabel}><div className="taxonomy-leaf-heading"><div><p className="eyebrow">{item.category}</p><h2>{item.leaf}</h2><p>{pathLabel}</p></div><span>5 różnych produktów</span></div><div className="taxonomy-product-grid">{productSeries.map((series, index) => { const price = priceFor(item.category, pathLabel, index); const isPhone = item.category === 'Smartfony Premium'; return <article className="taxonomy-product-card" key={`${pathLabel}-${series}`}>
          <div className="taxonomy-product-number">{String(leafIndex + 1).padStart(3, '0')}.{index + 1}</div>
          {isPhone ? <img className="taxonomy-product-photo" src={smartphoneImages[index]} alt={`${item.leaf} ${series}`} /> : <div className="taxonomy-product-visual">{series.slice(0, 2)}</div>}
          <p className="eyebrow">{item.leaf}</p><h3>{item.leaf} {series}</h3>
          <p><strong>Pełny opis:</strong> konfiguracja {index + 1}/5 klasy {series.toLowerCase()}, dobierana do wymagań technicznych i zastosowania przedsiębiorstwa.</p>
          <p><strong>Zastosowanie:</strong> profesjonalne wykorzystanie B2B, wyposażenie stanowiska pracy lub infrastruktury zgodnie z kategorią.</p>
          <p><strong>Prezentacja:</strong> karta multimedialna PL/EN z opisem funkcji i sposobu użytkowania.</p>
          <p><strong>Instrukcja obsługi:</strong> dokumentacja użytkowa i bezpieczeństwa przygotowywana dla zatwierdzonego modelu.</p>
          <div className="taxonomy-price"><small>Skorygowana cena katalogowa</small><strong>{formatPln(price)}</strong><em>19% mniej niż poprzednia cena katalogowa</em></div>
          <a className="taxonomy-offer-link" href={`/offers/new?product=${encodeURIComponent(`${item.leaf} ${series}`)}`}>Poproś o ofertę →</a>
        </article>; })}</div></section>; })}
      </div></div>
    </section>
  </>;
}
