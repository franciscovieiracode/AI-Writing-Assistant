import React, { useState } from 'react';
import { Sparkles, Copy, Check } from 'lucide-react';

export default function Editor() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('professional');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const styles = ['professional', 'casual', 'concise', 'creative'];

  const handleRewrite = async () => {
    if (!inputText.trim()) return;
    
    setLoading(true);

    try {
      // Call Python LLM microservice
      const response = await fetch('http://localhost:5000/api/rewrite', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: inputText,
          style: selectedStyle
        })
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();
      if (data.success) {
        setOutputText(data.rewrittenText);
      } else {
        setOutputText(`[${selectedStyle.toUpperCase()} STYLE]\n\n${inputText}`);
        console.error('LLM error:', data.details);
      }
    } catch (error) {
      console.error('Error rewriting text:', error);
      setOutputText(`[${selectedStyle.toUpperCase()} STYLE]\n\n${inputText}`);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(outputText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pt-24 pb-12 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            AI Writing <span className="text-emerald-400">Editor</span>
          </h1>
          <p className="text-xl text-slate-400">
            Transform your text with AI-powered style presets
          </p>
        </div>

        {/* Style Selector */}
        <div className="mb-8">
          <label className="block text-sm font-semibold mb-3 text-slate-300">
            Select Writing Style
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {styles.map((style) => (
              <button
                key={style}
                onClick={() => setSelectedStyle(style)}
                className={`px-6 py-3 rounded-lg font-semibold capitalize transition ${
                  selectedStyle === style
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {style}
              </button>
            ))}
          </div>
        </div>

        {/* Text Areas */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Input */}
          <div>
            <label className="block text-sm font-semibold mb-3 text-slate-300">
              Your Text
            </label>
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Paste your text here..."
              className="w-full h-96 p-4 bg-slate-900 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 resize-none"
            />
          </div>

          {/* Output */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <label className="block text-sm font-semibold text-slate-300">
                Rewritten Text
              </label>
              {outputText && (
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-2 px-3 py-1 bg-slate-800 hover:bg-slate-700 rounded-lg text-sm transition"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy
                    </>
                  )}
                </button>
              )}
            </div>
            <div className="w-full h-96 p-4 bg-slate-900 border border-slate-800 rounded-xl text-slate-300 overflow-y-auto">
              {outputText || (
                <span className="text-slate-500">
                  Rewritten text will appear here...
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Rewrite Button */}
        <div className="text-center">
          <button
            onClick={handleRewrite}
            disabled={loading || !inputText.trim()}
            className="px-12 py-4 bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-700 disabled:cursor-not-allowed rounded-lg text-lg font-semibold transition transform hover:scale-105 flex items-center gap-3 mx-auto shadow-lg shadow-emerald-900/50"
          >
            <Sparkles className="w-5 h-5" />
            {loading ? 'Rewriting...' : 'Rewrite Text'}
          </button>
        </div>
      </div>
    </div>
  );
}
