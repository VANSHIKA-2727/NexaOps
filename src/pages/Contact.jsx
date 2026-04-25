import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import Button from '../components/Button';
import PageHeader from '../components/PageHeader';

const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

const services = [
  'Supply Chain Management',
  'Vendor Development',
  'Procurement & Purchase Strategy',
  'Six Sigma & Process Excellence',
  'Logistics & Distribution',
  'Inventory Management',
  'ESG & Sustainable Procurement',
];

export default function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    service: services[0],
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.fullName,
          from_email: formData.email,
          company: formData.company,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY,
      );

      setSuccess(true);
      setFormData({
        fullName: '',
        company: '',
        email: '',
        phone: '',
        service: services[0],
        message: '',
      });

      window.setTimeout(() => navigate('/dashboard'), 1800);
    } catch (submissionError) {
      setError('Failed to send. Please try again or email us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <PageHeader
        title="Book a Consultation"
        subtitle="Let's discuss how ProcureEdge can transform your operations."
        breadcrumb="Contact"
      />

      <section className="theme-surface py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <p className="mb-3 font-body text-sm font-semibold uppercase tracking-[0.24em] text-accent-600 dark:text-accent-300">
                Get in Touch
              </p>
              <h2 className="mb-8 font-display text-3xl font-bold theme-text-strong">
                Let’s design a cleaner, stronger operating model.
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="mb-2 font-display text-lg font-bold theme-text-strong">Address</h3>
                  <p className="font-body theme-text-secondary">
                    123 Business Park
                    <br />
                    New Delhi, 110001
                    <br />
                    India
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-display text-lg font-bold theme-text-strong">Email</h3>
                  <a href="mailto:hello@procureedge.com" className="font-body text-accent-600 transition-colors hover:text-[var(--text-primary)]">
                    hello@procureedge.com
                  </a>
                </div>

                <div>
                  <h3 className="mb-2 font-display text-lg font-bold theme-text-strong">Phone</h3>
                  <a href="tel:+919876543210" className="font-body text-accent-600 transition-colors hover:text-[var(--text-primary)]">
                    +91 98765 43210
                  </a>
                </div>

                <div className="rounded-[1.75rem] border theme-border bg-[var(--bg-muted)] p-6">
                  <h3 className="mb-3 font-display text-lg font-bold theme-text-strong">What to expect</h3>
                  <ul className="space-y-3 font-body theme-text-secondary">
                    <li>• A focused discovery conversation around cost, flow, and supplier pain points</li>
                    <li>• A practical shortlist of opportunities we would prioritise first</li>
                    <li>• A fast route into the client dashboard after your request is submitted</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="theme-card-subtle rounded-[2rem] p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {success && (
                  <div className="theme-alert theme-alert-success rounded-2xl p-4">
                    <p className="font-body theme-success-text">
                      Consultation request sent. Redirecting you to the dashboard...
                    </p>
                  </div>
                )}

                {error && (
                  <div className="theme-alert theme-alert-danger rounded-2xl p-4">
                    <p className="font-body theme-danger-text">{error}</p>
                  </div>
                )}

                <div>
                  <label htmlFor="fullName" className="mb-2 block font-body font-medium theme-text-secondary">
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="theme-input w-full rounded-xl px-4 py-3 font-body"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="mb-2 block font-body font-medium theme-text-secondary">
                    Company Name
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="theme-input w-full rounded-xl px-4 py-3 font-body"
                    placeholder="Your company"
                  />
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="mb-2 block font-body font-medium theme-text-secondary">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="theme-input w-full rounded-xl px-4 py-3 font-body"
                      placeholder="you@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-2 block font-body font-medium theme-text-secondary">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="theme-input w-full rounded-xl px-4 py-3 font-body"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="mb-2 block font-body font-medium theme-text-secondary">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="theme-input w-full rounded-xl px-4 py-3 font-body"
                  >
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block font-body font-medium theme-text-secondary">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="theme-input w-full rounded-xl px-4 py-3 font-body"
                    placeholder="Share your current procurement or supply chain challenge..."
                  />
                </div>

                <Button
                  label={loading ? 'Sending...' : 'Send Request'}
                  type="submit"
                  variant="primary"
                  disabled={loading}
                  className="w-full"
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
