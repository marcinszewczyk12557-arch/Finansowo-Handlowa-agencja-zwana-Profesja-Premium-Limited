'use client';

import { useMemo, useState } from 'react';

function money(value: number) {
  return new Intl.NumberFormat('pl-PL', {
    style: 'currency',
    currency: 'PLN',
    maximumFractionDigits: 2,
  }).format(Number.isFinite(value) ? value : 0);
}

export default function InstallmentCalculator() {
  const [price, setPrice] = useState(10000);
  const [downPayment, setDownPayment] = useState(1000);
  const [months, setMonths] = useState(24);
  const [annualRate, setAnnualRate] = useState(9.9);
  const [commissionRate, setCommissionRate] = useState(0);

  const result = useMemo(() => {
    const safePrice = Math.max(0, price || 0);
    const safeDownPayment = Math.min(Math.max(0, downPayment || 0), safePrice);
    const baseFinanced = Math.max(0, safePrice - safeDownPayment);
    const commission = baseFinanced * Math.max(0, commissionRate || 0) / 100;
    const financed = baseFinanced + commission;
    const safeMonths = Math.max(1, Math.round(months || 1));
    const monthlyRate = Math.max(0, annualRate || 0) / 100 / 12;

    const installment = monthlyRate === 0
      ? financed / safeMonths
      : financed * monthlyRate / (1 - Math.pow(1 + monthlyRate, -safeMonths));

    const installmentsTotal = installment * safeMonths;
    const totalPayment = safeDownPayment + installmentsTotal;
    const financingCost = Math.max(0, totalPayment - safePrice);

    return {
      financed,
      commission,
      installment,
      installmentsTotal,
      totalPayment,
      financingCost,
      safeMonths,
    };
  }, [price, downPayment, months, annualRate, commissionRate]);

  return (
    <section className="calculator-card" aria-labelledby="installment-calculator-title">
      <p className="eyebrow">Kalkulator sprzedaży ratalnej</p>
      <h2 id="installment-calculator-title">Orientacyjna symulacja miesięcznej raty</h2>
      <p className="calculator-note">
        To wyłącznie narzędzie matematyczne do samodzielnej symulacji. Wartości początkowe, w tym 9,9% oprocentowania,
        są przykładowymi założeniami demonstracyjnymi i nie stanowią aktualnej stawki, promocji ani oferty PROFESJA PREMIUM LIMITED
        lub jakiegokolwiek finansującego. Kalkulator nie jest ofertą kredytu, decyzją finansową, oceną zdolności ani wyliczeniem RRSO.
        Wstępna kwalifikacja handlowa PROFESJA nie oznacza przyznania finansowania. Dostępność i ostateczne warunki finansowania
        określa wyłącznie właściwy finansujący po przeprowadzeniu własnej oceny. Przed zawarciem umowy należy opierać się na jego
        aktualnej, indywidualnej ofercie i wymaganych informacjach prawnych.
      </p>

      <div className="calculator-grid">
        <label>
          Cena sprzedaży (PLN)
          <input type="number" min="0" step="100" value={price} onChange={(e) => setPrice(Number(e.target.value))} />
        </label>

        <label>
          Wpłata własna (PLN)
          <input type="number" min="0" step="100" value={downPayment} onChange={(e) => setDownPayment(Number(e.target.value))} />
        </label>

        <label>
          Liczba rat — założenie symulacji
          <input type="number" min="1" max="120" step="1" value={months} onChange={(e) => setMonths(Number(e.target.value))} />
        </label>

        <label>
          Oprocentowanie nominalne roczne (%) — własne założenie
          <input type="number" min="0" max="100" step="0.1" value={annualRate} onChange={(e) => setAnnualRate(Number(e.target.value))} />
        </label>

        <label>
          Prowizja finansującego (%) — własne założenie
          <input type="number" min="0" max="100" step="0.1" value={commissionRate} onChange={(e) => setCommissionRate(Number(e.target.value))} />
        </label>
      </div>

      <div className="calculator-results" aria-live="polite">
        <div><span>Kwota finansowana w symulacji</span><strong>{money(result.financed)}</strong></div>
        <div><span>Orientacyjna rata miesięczna</span><strong>{money(result.installment)}</strong></div>
        <div><span>Liczba rat w symulacji</span><strong>{result.safeMonths}</strong></div>
        <div><span>Orientacyjna suma rat</span><strong>{money(result.installmentsTotal)}</strong></div>
        <div><span>Orientacyjny koszt finansowania</span><strong>{money(result.financingCost)}</strong></div>
        <div><span>Orientacyjna łączna kwota do zapłaty</span><strong>{money(result.totalPayment)}</strong></div>
      </div>
    </section>
  );
}
