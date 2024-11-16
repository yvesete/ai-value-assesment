import React, { useState } from 'react';
import { Bot, Phone, Calendar, Workflow, Zap, TrendingUp, FileText, BrainCircuit, MessageSquare, Info } from 'lucide-react';

const sections = [
  {
    id: 'customerService',
    title: 'Kundenservice',
    icon: Phone,
    question: 'Wie viele Kundenanfragen bearbeiten Sie monatlich?',
    calculation: (value: number) => ({
      time: value * 10,
      savings: value * 10 * 35 / 60
    }),
    source: 'Basierend auf durchschnittlicher Bearbeitungszeit von 10 Minuten pro Anfrage',
    info: 'Die Berechnung basiert auf Branchendurchschnittswerten und realen Kundendaten aus über 100 Implementierungen.'
  },
  {
    id: 'meetings',
    title: 'Meeting-Effizienz',
    icon: Calendar,
    question: 'Wie viele Meetings haben Sie monatlich?',
    calculation: (value: number) => ({
      time: value * 15,
      savings: value * 15 * 35 / 60
    }),
    source: 'Basierend auf 15 Minuten Zeitersparnis pro Meeting',
    info: 'KI-gestützte Meeting-Tools können Vor- und Nachbereitung sowie die Dokumentation deutlich beschleunigen.'
  },
  {
    id: 'automation',
    title: 'Prozessautomatisierung',
    icon: Workflow,
    question: 'Wie viele manuelle Prozesse führen Sie monatlich aus?',
    calculation: (value: number) => ({
      time: value * 20,
      savings: value * 20 * 35 / 60
    }),
    source: 'Basierend auf 20 Minuten Zeitersparnis pro Prozess',
    info: 'Durch KI-Automatisierung können repetitive Aufgaben schneller und fehlerfreier ausgeführt werden.'
  },
  {
    id: 'documentation',
    title: 'Dokumentation',
    icon: FileText,
    question: 'Wie viele Dokumente erstellen Sie monatlich?',
    calculation: (value: number) => ({
      time: value * 25,
      savings: value * 25 * 35 / 60
    }),
    source: 'Basierend auf 25 Minuten Zeitersparnis pro Dokument',
    info: 'KI unterstützt bei der Erstellung und Optimierung von Dokumenten aller Art.'
  },
  {
    id: 'analysis',
    title: 'Datenanalyse',
    icon: BrainCircuit,
    question: 'Wie viele Analysen führen Sie monatlich durch?',
    calculation: (value: number) => ({
      time: value * 30,
      savings: value * 30 * 35 / 60
    }),
    source: 'Basierend auf 30 Minuten Zeitersparnis pro Analyse',
    info: 'KI-Tools können komplexe Datenanalysen in Bruchteilen der Zeit durchführen.'
  },
  {
    id: 'communication',
    title: 'Kommunikation',
    icon: MessageSquare,
    question: 'Wie viele interne Kommunikationen haben Sie monatlich?',
    calculation: (value: number) => ({
      time: value * 8,
      savings: value * 8 * 35 / 60
    }),
    source: 'Basierend auf 8 Minuten Zeitersparnis pro Kommunikation',
    info: 'KI optimiert die interne Kommunikation durch automatische Zusammenfassungen und Übersetzungen.'
  }
];

export default function AssessmentTool() {
  const [values, setValues] = useState<Record<string, number>>({});
  const [showInfo, setShowInfo] = useState<string | null>(null);

  const handleInputChange = (sectionId: string, value: string) => {
    setValues(prev => ({
      ...prev,
      [sectionId]: parseInt(value) || 0
    }));
  };

  const calculateTotalSavings = () => {
    return sections.reduce((total, section) => {
      const sectionValue = values[section.id] || 0;
      const calculation = section.calculation(sectionValue);
      return total + (calculation.savings || 0);
    }, 0);
  };

  const formatCurrency = (value: number) => {
    return value.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  const totalMonthlySavings = calculateTotalSavings();
  const totalYearlySavings = totalMonthlySavings * 12;

  return (
    <div className="min-h-screen pt-20 pb-12 px-4 bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
      {totalYearlySavings > 0 && (
        <div className="fixed top-20 left-0 right-0 z-10 px-4 py-3">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl p-8 text-white shadow-xl border border-white/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white/20 rounded-lg">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Jährliche Einsparung</h3>
                  <div className="text-4xl font-bold text-white">
                    {formatCurrency(totalYearlySavings)} €
                  </div>
                  <p className="mt-2 text-lg text-white/90">
                    Monatliche Einsparung: {formatCurrency(totalMonthlySavings)} €
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto space-y-12 pt-24">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent text-glow">
            Ihr KI-Potenzial entdecken
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Berechnen Sie den Mehrwert von KI für Ihr Unternehmen
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map(section => (
            <div 
              key={section.id} 
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 space-y-6 border border-purple-100 dark:border-purple-900 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl">
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                  {section.title}
                </h3>
                <button
                  className="ml-auto p-2 hover:bg-purple-50 dark:hover:bg-purple-900/50 rounded-lg transition-colors"
                  onClick={() => setShowInfo(showInfo === section.id ? null : section.id)}
                  aria-label="Info"
                >
                  <Info className="w-5 h-5 text-purple-500" />
                </button>
              </div>

              {showInfo === section.id && (
                <div className="bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4 text-sm text-gray-700 dark:text-gray-300">
                  {section.info}
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <label className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
                    {section.question}
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={values[section.id] || ''}
                    onChange={(e) => handleInputChange(section.id, e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border-2 border-purple-200 dark:border-purple-900 focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white transition-colors text-lg"
                  />
                </div>

                {values[section.id] ? (
                  <div className="space-y-4">
                    <div className="p-4 bg-purple-50 dark:bg-purple-900/50 rounded-xl border border-purple-200 dark:border-purple-800">
                      {Object.entries(section.calculation(values[section.id])).map(([key, value]) => (
                        <p key={key} className="text-lg text-gray-700 dark:text-gray-300 mb-2 last:mb-0">
                          <span className="font-medium">
                            {key === 'savings' ? 'Monatliche Ersparnis: ' : 'Zeitersparnis (Min/Monat): '}
                          </span>
                          <span className="font-bold">
                            {typeof value === 'number' 
                              ? key === 'savings' 
                                ? `${formatCurrency(value)} €`
                                : value.toLocaleString('de-DE')
                              : value}
                          </span>
                        </p>
                      ))}
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                      {section.source}
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="p-6 border-2 border-dashed border-purple-200 dark:border-purple-800 rounded-xl">
                      <p className="text-base text-gray-400 dark:text-gray-500 text-center">
                        Geben Sie einen Wert ein, um Ihre potenzielle Ersparnis zu sehen
                      </p>
                    </div>
                    <div className="space-y-2 text-sm">
                      <p className="text-gray-500 dark:text-gray-400">Mehr über unsere Berechnungen:</p>
                      <div className="flex flex-wrap gap-3 justify-center text-sm">
                        <a
                          href="https://www.digitalto.de/ki-fallstudien"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 underline"
                        >
                          Fallstudien
                        </a>
                        <a
                          href="https://www.digitalto.de/ki-roi-berechnung"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 underline"
                        >
                          ROI-Berechnung
                        </a>
                        <a
                          href="https://www.digitalto.de/ki-benchmarks"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 underline"
                        >
                          Branchenbenchmarks
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-12">
          <a
            href="https://www.digitalto.de/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full hover:opacity-90 transition-all duration-300 hover:scale-105 font-medium text-xl shadow-lg hover:shadow-purple-500/25"
          >
            <Bot className="w-6 h-6" />
            Kostenlose Beratung buchen (30 min)
          </a>
        </div>
      </div>
    </div>
  );
}