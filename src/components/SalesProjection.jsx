import React, {useEffect, useId, useRef, useState} from 'react';
import {ArrowDownRight, ArrowUpRight, ChartNoAxesCombined, Info, Minus} from 'lucide-react';
import {brand} from '@/config/brand';

const number = value => new Intl.NumberFormat('en-IN', {maximumFractionDigits: 0}).format(value);
const money = value => `${brand.currency} ${number(value)}`;
const compact = value => new Intl.NumberFormat('en-IN', {notation: 'compact', maximumFractionDigits: 1}).format(value);

export default function SalesProjection({data}) {
  const [months, setMonths] = useState(3);
  const [active, setActive] = useState(null);
  const chartRef = useRef(null);
  const gradientId = useId();
  const [availableWidth, setAvailableWidth] = useState(620);
  useEffect(() => {
    const observer = new ResizeObserver(([entry]) => setAvailableWidth(entry.contentRect.width));
    if (chartRef.current) observer.observe(chartRef.current);
    return () => observer.disconnect();
  }, []);
  const {history, estimate} = data.projection(months);
  const latest = history.at(-1);
  const growth = latest?.value ? (estimate / latest.value - 1) * 100 : null;
  const Trend = growth === null || growth === 0 ? Minus : growth < 0 ? ArrowDownRight : ArrowUpRight;
  const ceiling = Math.max(1, ...history.map(point => point.value)) * 1.25;
  const chartWidth = Math.max(480, months * 55 + 80, availableWidth);
  const step = (chartWidth - 108) / Math.max(1, months - 1);
  const y = value => 174 - value / ceiling * 136;
  const points = history.map((point, index) => ({x: 64 + step * index, y: y(point.value)}));
  const linePath = points.map((point, index) => `${index ? 'L' : 'M'}${point.x},${point.y}`).join(' ');
  const areaPath = `${linePath} L${points.at(-1).x},174 L64,174 Z`;
  const selected = history[active] || latest;
  const hasRevenue = history.some(point => point.value > 0);

  return <section className="surface-card sales-projection" aria-labelledby="sales-projection-title">
    <header className="projection-header">
      <div className="flex items-center gap-3">
        <span className="projection-icon"><ChartNoAxesCombined size={20}/></span>
        <div><h2 id="sales-projection-title" className="section-title">Sales projection</h2><p className="section-subtitle">Past performance. A clearer view ahead.</p></div>
      </div>
      <label className="projection-period">Projection history<select aria-label="Projection history" value={months} onChange={event => {setMonths(Number(event.target.value)); setActive(null);}}>{[3, 6, 12].map(value => <option key={value} value={value}>{value} months</option>)}</select></label>
    </header>

    <div className="projection-body">
      <aside className="projection-estimate">
        <div className="flex items-center justify-between gap-2"><span className="projection-eyebrow">NEXT-MONTH ESTIMATE</span><span className="projection-badge">Forecast</span></div>
        <p className="projection-amount" aria-live="polite">{money(estimate)}</p>
        <div className="projection-comparison"><span className={`projection-change ${growth === null || growth === 0 ? 'is-neutral' : growth < 0 ? 'is-negative' : 'is-positive'}`}><Trend size={14}/>{growth === null ? 'N/A' : `${growth > 0 ? '+' : ''}${growth.toFixed(2)}%`}</span><span>vs. last completed month</span></div>
        <div className="projection-summary"><span>Last completed month <strong>{latest?.label}</strong></span><b>{money(latest?.value || 0)}</b></div>
        <p className="projection-method">Based on the average of {months} completed months before your selected end month.</p>
      </aside>

      <div className="projection-chart-panel">
        <div className="projection-chart-heading"><div className="projection-legend"><span><i/>Monthly collection</span><span><i className="is-average"/>{months}-month average</span></div><div className="projection-readout" aria-live="polite"><span>{selected?.label}</span><strong>{money(selected?.value || 0)}</strong></div></div>
        <div ref={chartRef} className="projection-chart-scroll" tabIndex="0" role="region" aria-label="Monthly sales chart; scroll horizontally on small screens">
          <svg viewBox={`0 0 ${chartWidth} 210`} style={{width: chartWidth, minWidth: chartWidth}} className="projection-chart" role="img" aria-label="Monthly sales projection history">
            <defs><linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="var(--color-primary)" stopOpacity=".18"/><stop offset="100%" stopColor="var(--color-primary)" stopOpacity=".015"/></linearGradient></defs>
            {[0, 1, 2, 3].map(index => {const value = ceiling * index / 3; return <g key={index}><line x1="52" x2={chartWidth - 28} y1={y(value)} y2={y(value)} className="projection-grid"/><text x="40" y={y(value) + 4} textAnchor="end" className="projection-axis">{compact(value)}</text></g>;})}
            {hasRevenue && <><path d={areaPath} fill={`url(#${gradientId})`}/><line x1="52" x2={chartWidth - 28} y1={y(estimate)} y2={y(estimate)} className="projection-average"/><path d={linePath} fill="none" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round"/></>}
            {history.map((point, index) => {const {x, y: pointY} = points[index]; return <g key={point.label} data-projection-point tabIndex="0" aria-label={`${point.label}: ${money(point.value)}`} className={`projection-point ${active === index ? 'is-active' : ''}`} onMouseEnter={() => setActive(index)} onMouseLeave={() => setActive(null)} onFocus={() => setActive(index)} onBlur={() => setActive(null)} onClick={() => setActive(index)}>
              <circle cx={x} cy={pointY} r="16" fill="transparent"/>
              <circle className="projection-point-halo" cx={x} cy={pointY} r="9" fill="var(--color-primary-soft)"/>
              <circle cx={x} cy={pointY} r="4" fill="white" stroke="var(--color-primary)" strokeWidth="2"/>
              <text x={x} y={pointY - 16} textAnchor="middle" className="projection-value">{compact(point.value)}</text>
              <text x={x} y="202" textAnchor="middle" className="projection-axis">{point.label}</text>
              <title>{point.label}: {money(point.value)}</title>
            </g>;})}
          </svg>
        </div>
        {!hasRevenue && <p className="projection-empty">No collections recorded in this period. Choose a different date range to see a projection.</p>}
      </div>
    </div>
    <footer className="projection-footer"><Info size={14}/><span>Estimates reflect historical collections and are not guaranteed revenue.</span><span className="projection-currency">All amounts in {brand.currencyCode}</span></footer>
  </section>;
}
