import { useState } from 'react';
import { submitEsgData } from '../api/esg';
import Button from '../components/Button';
import PageHeader from '../components/PageHeader';

export default function ESGCalc() {
  const [formData, setFormData] = useState({
    energyConsumption: 5000,
    logisticsTrips: 200,
    supplierDiversity: 50,
    recyclingRate: 60,
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: parseFloat(value),
    }));
  };

  const calculateESGScore = () => {
    const weights = {
      energyConsumption: 0.3, // Lower is better
      logisticsTrips: 0.2,     // Lower is better
      supplierDiversity: 0.25, // Higher is better
      recyclingRate: 0.25,     // Higher is better
    };

    // Normalize values to 0-100 scale
    const energyScore = Math.max(0, 100 - (formData.energyConsumption / 100)); // 5000 kWh = 50 score
    const logisticsScore = Math.max(0, 100 - (formData.logisticsTrips / 3)); // 300 trips = 0 score
    const supplierScore = formData.supplierDiversity; // Already 0-100
    const recyclingScore = formData.recyclingRate; // Already 0-100

    const totalScore = Math.round(
      energyScore * weights.energyConsumption +
      logisticsScore * weights.logisticsTrips +
      supplierScore * weights.supplierDiversity +
      recyclingScore * weights.recyclingRate
    );

    // Determine rating
    let rating = 'Poor';
    let ratingColor = 'theme-danger-text';
    if (totalScore >= 40 && totalScore < 70) {
      rating = 'Fair';
      ratingColor = 'theme-warning-text';
    } else if (totalScore >= 70) {
      rating = 'Good';
      ratingColor = 'theme-success-text';
    }

    // Identify lowest scoring areas for recommendations
    const scores = {
      energy: energyScore,
      logistics: logisticsScore,
      supplier: supplierScore,
      recycling: recyclingScore,
    };

    const sortedAreas = Object.entries(scores).sort((a, b) => a[1] - b[1]);
    const recommendations = [];

    if (sortedAreas[0][0] === 'energy' && sortedAreas[0][1] < 70) {
      recommendations.push('Switch to renewable energy sources and implement energy efficiency programs');
    }
    if (sortedAreas[0][0] === 'logistics' && sortedAreas[0][1] < 70) {
      recommendations.push('Optimize delivery routes and consolidate shipments to reduce logistics trips');
    }
    if (sortedAreas[0][0] === 'supplier' && sortedAreas[0][1] < 70) {
      recommendations.push('Expand supplier diversity program and partner with underrepresented suppliers');
    }
    if (sortedAreas[0][0] === 'recycling' && sortedAreas[0][1] < 70) {
      recommendations.push('Establish waste reduction and recycling initiatives across supply chain');
    }

    setResult({
      score: totalScore,
      rating,
      ratingColor,
      recommendations: recommendations.slice(0, 3),
    });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setSubmitError(null);

    try {
      await submitEsgData(formData);
      // Score already calculated, just continue
    } catch (err) {
      setSubmitError('Failed to submit. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <PageHeader
        title="ESG Performance Estimator"
        subtitle="Get a baseline diagnostic of your environmental and social governance maturity."
        breadcrumb="ESG Calculator"
      />

      <section className="py-16 theme-surface-muted">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="theme-card rounded-lg p-8">
            <div className="space-y-8">
              {/* Energy Input */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label htmlFor="energy" className="font-display text-lg font-bold theme-text-strong">
                    Current Energy Consumption
                  </label>
                  <span className="font-body text-accent-600 font-semibold">
                    {formData.energyConsumption} kWh/month
                  </span>
                </div>
                <input
                  type="range"
                  id="energy"
                  name="energyConsumption"
                  min="0"
                  max="20000"
                  step="500"
                  value={formData.energyConsumption}
                  onChange={handleChange}
                  className="theme-range w-full h-2 rounded-lg appearance-none cursor-pointer"
                />
                <p className="font-body theme-text-soft text-sm mt-2">
                  Estimate your monthly energy usage
                </p>
              </div>

              {/* Logistics Trips */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label htmlFor="logistics" className="font-display text-lg font-bold theme-text-strong">
                    Logistics Trips per Month
                  </label>
                  <span className="font-body text-accent-600 font-semibold">
                    {formData.logisticsTrips}
                  </span>
                </div>
                <input
                  type="range"
                  id="logistics"
                  name="logisticsTrips"
                  min="0"
                  max="1000"
                  step="10"
                  value={formData.logisticsTrips}
                  onChange={handleChange}
                  className="theme-range w-full h-2 rounded-lg appearance-none cursor-pointer"
                />
                <p className="font-body theme-text-soft text-sm mt-2">
                  Total logistics trips including inbound and outbound
                </p>
              </div>

              {/* Supplier Diversity */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label htmlFor="supplier" className="font-display text-lg font-bold theme-text-strong">
                    Supplier Diversity Score
                  </label>
                  <span className="font-body text-accent-600 font-semibold">
                    {formData.supplierDiversity}/100
                  </span>
                </div>
                <input
                  type="range"
                  id="supplier"
                  name="supplierDiversity"
                  min="0"
                  max="100"
                  step="5"
                  value={formData.supplierDiversity}
                  onChange={handleChange}
                  className="theme-range w-full h-2 rounded-lg appearance-none cursor-pointer"
                />
                <p className="font-body theme-text-soft text-sm mt-2">
                  % of spend with diverse/minority-owned suppliers
                </p>
              </div>

              {/* Recycling Rate */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label htmlFor="recycling" className="font-display text-lg font-bold theme-text-strong">
                    Waste Recycling Rate
                  </label>
                  <span className="font-body text-accent-600 font-semibold">
                    {formData.recyclingRate}%
                  </span>
                </div>
                <input
                  type="range"
                  id="recycling"
                  name="recyclingRate"
                  min="0"
                  max="100"
                  step="5"
                  value={formData.recyclingRate}
                  onChange={handleChange}
                  className="theme-range w-full h-2 rounded-lg appearance-none cursor-pointer"
                />
                <p className="font-body theme-text-soft text-sm mt-2">
                  % of waste diverted from landfill
                </p>
              </div>

              {/* Calculate Button */}
              <div className="pt-6 border-t theme-border">
                <Button
                  label="Calculate ESG Score"
                  onClick={calculateESGScore}
                  variant="primary"
                  className="w-full"
                />
              </div>

              {submitError && (
                <div className="theme-alert theme-alert-danger rounded-lg p-4">
                  <p className="font-body theme-danger-text">{submitError}</p>
                </div>
              )}

              {/* Results */}
              {result && (
                <div className="border-t theme-border pt-8">
                  <h2 className="font-display text-2xl font-bold theme-text-strong mb-6">
                    Your ESG Score
                  </h2>

                  <div className="theme-result-panel rounded-lg p-8 mb-8 text-center">
                    <div className={`font-display text-6xl font-bold mb-2 ${result.ratingColor}`}>
                      {result.score}
                    </div>
                    <p className={'font-display text-2xl font-semibold mb-4 ' + result.ratingColor}>
                      {result.rating}
                    </p>
                    <p className="font-body theme-text-muted">
                      Out of 100 possible points
                    </p>
                  </div>

                  <h3 className="font-display text-lg font-bold theme-text-strong mb-4">
                    Key Recommendations
                  </h3>
                  <ul className="space-y-3">
                    {result.recommendations.map((rec, idx) => (
                      <li key={idx} className="flex gap-3 font-body theme-text-muted">
                        <span className="text-accent-500 font-bold">→</span>
                        {rec}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-8 border-t theme-border">
                    <Button
                      label={loading ? 'Submitting...' : 'Submit Assessment'}
                      onClick={handleSubmit}
                      variant="outline"
                      disabled={loading}
                      className="border-accent-500 text-accent-600 w-full"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
