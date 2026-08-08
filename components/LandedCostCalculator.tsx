'use client';

import { useMemo, useState } from 'react';

function money(value:number){
  return new Intl.NumberFormat('pl-PL',{style:'currency',currency:'PLN',maximumFractionDigits:2}).format(Number.isFinite(value)?value:0);
}

export default function LandedCostCalculator(){
  const [goods,setGoods]=useState(10000);
  const [freight,setFreight]=useState(1500);
  const [insuranceRate,setInsuranceRate]=useState(0.4);
  const [dutyRate,setDutyRate]=useState(0);
  const [vatRate,setVatRate]=useState(23);
  const [certCost,setCertCost]=useState(500);
  const [marginRate,setMarginRate]=useState(8);

  const result=useMemo(()=>{
    const g=Math.max(0,goods||0);
    const f=Math.max(0,freight||0);
    const insurance=g*Math.max(0,insuranceRate||0)/100;
    const customsBase=g+f+insurance;
    const duty=customsBase*Math.max(0,dutyRate||0)/100;
    const preVat=customsBase+duty+Math.max(0,certCost||0);
    const vat=preVat*Math.max(0,vatRate||0)/100;
    const marginBase=preVat+vat;
    const margin=marginBase*Math.max(0,marginRate||0)/100;
    const total=marginBase+margin;
    return {insurance,duty,vat,margin,total};
  },[goods,freight,insuranceRate,dutyRate,vatRate,certCost,marginRate]);

  return <section className='calculator-card landed-cost-card' aria-labelledby='landed-cost-title'>
    <p className='eyebrow'>Kalkulator importu</p>
    <h2 id='landed-cost-title'>Orientacyjny Landed Cost</h2>
    <p className='calculator-note'>Symulacja służy do planowania. Faktyczne stawki cła, VAT, transportu, ubezpieczenia, badań i obsługi zależą od kodu CN/HS, kraju pochodzenia, Incoterms, kursów walut i konkretnej transakcji.</p>
    <div className='calculator-grid'>
      <label>Wartość towaru (PLN)<input type='number' min='0' step='100' value={goods} onChange={e=>setGoods(Number(e.target.value))}/></label>
      <label>Transport / fracht (PLN)<input type='number' min='0' step='100' value={freight} onChange={e=>setFreight(Number(e.target.value))}/></label>
      <label>Ubezpieczenie cargo (%)<input type='number' min='0' step='0.1' value={insuranceRate} onChange={e=>setInsuranceRate(Number(e.target.value))}/></label>
      <label>Cło (%)<input type='number' min='0' step='0.1' value={dutyRate} onChange={e=>setDutyRate(Number(e.target.value))}/></label>
      <label>VAT (%)<input type='number' min='0' step='1' value={vatRate} onChange={e=>setVatRate(Number(e.target.value))}/></label>
      <label>Badania / certyfikacja / odprawa (PLN)<input type='number' min='0' step='100' value={certCost} onChange={e=>setCertCost(Number(e.target.value))}/></label>
      <label>Marża / obsługa PROFESJA (%)<input type='number' min='0' step='0.1' value={marginRate} onChange={e=>setMarginRate(Number(e.target.value))}/></label>
    </div>
    <div className='calculator-results' aria-live='polite'>
      <div><span>Ubezpieczenie cargo</span><strong>{money(result.insurance)}</strong></div>
      <div><span>Cło</span><strong>{money(result.duty)}</strong></div>
      <div><span>VAT</span><strong>{money(result.vat)}</strong></div>
      <div><span>Marża / obsługa</span><strong>{money(result.margin)}</strong></div>
      <div><span>Szacowany Landed Cost</span><strong>{money(result.total)}</strong></div>
    </div>
  </section>;
}
