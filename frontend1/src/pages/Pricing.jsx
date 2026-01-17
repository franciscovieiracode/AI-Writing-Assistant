import React from 'react';
import { Check } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: [
        '50 rewrites per month',
        'All 4 writing styles',
        'Basic support',
        'Text up to 1,000 words'
      ],
      cta: 'Get Started',
      highlighted: false
    },
    {
      name: 'Pro',
      price: '$12',
      period: 'per month',
      features: [
        'Unlimited rewrites',
        'All writing styles',
        'Priority support',
        'Text up to 10,000 words',
        'Save history',
        'Export options'
      ],
      cta: 'Start Free Trial',
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact us',
      features: [
        'Everything in Pro',
        'Custom AI models',
        'API access',
        'Dedicated support',
        'Custom integrations',
        'SLA guarantee'
      ],
      cta: 'Contact Sales',
      highlighted: false
    }
  ];

  return (
    <div className="pt-24 pb-12 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Simple, Transparent <span className="text-emerald-400">Pricing</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Choose the plan that works best for you. All plans include access to our AI-powered writing assistant.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 ${
                plan.highlighted
                  ? 'bg-emerald-600 border-2 border-emerald-400 transform scale-105'
                  : 'bg-slate-900 border border-slate-800'
              }`}
            >
              {plan.highlighted && (
                <div className="text-center mb-4">
                  <span className="px-4 py-1 bg-white text-emerald-600 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-white'}`}>
                  {plan.name}
                </h3>
                <div className="mb-2">
                  <span className={`text-5xl font-bold ${plan.highlighted ? 'text-white' : 'text-white'}`}>
                    {plan.price}
                  </span>
                </div>
                <div className={`text-sm ${plan.highlighted ? 'text-emerald-100' : 'text-slate-400'}`}>
                  {plan.period}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 ${plan.highlighted ? 'text-white' : 'text-emerald-500'}`} />
                    <span className={plan.highlighted ? 'text-white' : 'text-slate-300'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-semibold transition transform hover:scale-105 ${
                  plan.highlighted
                    ? 'bg-white text-emerald-600 hover:bg-slate-100'
                    : 'bg-emerald-600 text-white hover:bg-emerald-500'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'Can I change plans later?',
                a: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.'
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards, PayPal, and bank transfers for enterprise plans.'
              },
              {
                q: 'Is there a free trial?',
                a: 'The Pro plan comes with a 14-day free trial. No credit card required to start.'
              }
            ].map((faq, i) => (
              <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-2">{faq.q}</h3>
                <p className="text-slate-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}