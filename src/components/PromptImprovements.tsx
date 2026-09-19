import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Film, 
  ChevronDown, 
  ChevronUp, 
  ArrowDownLeft, 
  Check, 
  Loader2, 
  Camera, 
  SlidersHorizontal,
  Info
} from 'lucide-react';
import { CinematographyProfile, getCinematographyProfile } from '../cinematography';

interface PromptImprovementsProps {
  techniqueId: string | null;
  techniqueHint?: string;
  currentPrompt: string;
  autoEnhance: boolean;
  onToggleAutoEnhance: (enabled: boolean) => void;
  onApplySuggestion: (suggestionText: string) => void;
  disabled?: boolean;
}

export const PromptImprovements: React.FC<PromptImprovementsProps> = ({
  techniqueId,
  techniqueHint,
  currentPrompt,
  autoEnhance,
  onToggleAutoEnhance,
  onApplySuggestion,
  disabled = false,
}) => {
  const [profile, setProfile] = useState<CinematographyProfile>(() => getCinematographyProfile(techniqueId));
  const [showDetails, setShowDetails] = useState(false);
  const [isRefining, setIsRefining] = useState(false);
  const [justApplied, setJustApplied] = useState(false);
  const [aiCustomSuggestion, setAiCustomSuggestion] = useState<string | null>(null);

  // Update profile whenever techniqueId changes
  useEffect(() => {
    const p = getCinematographyProfile(techniqueId);
    setProfile(p);
    setAiCustomSuggestion(null);
  }, [techniqueId]);

  const activeSuggestion = aiCustomSuggestion || profile.shortSuggestion;

  const handleApply = () => {
    onApplySuggestion(activeSuggestion);
    setJustApplied(true);
    setTimeout(() => setJustApplied(false), 2000);
  };

  const handleRefineWithAI = async () => {
    if (isRefining || disabled) return;
    setIsRefining(true);
    try {
      const res = await fetch('/api/enhance-prompt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          techniqueName: profile.techniqueName,
          techniqueHint: techniqueHint || profile.headline,
          note: currentPrompt.trim() || undefined,
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to fetch AI refinement');
      }

      const data = await res.json();
      if (data.enhancedPrompt) {
        setAiCustomSuggestion(data.enhancedPrompt);
      }
    } catch (err) {
      console.error('Error refining prompt with AI:', err);
    } finally {
      setIsRefining(false);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto mb-3 space-y-2.5">
      {/* Checkbox Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-1">
        <label 
          htmlFor="auto-cinematography-checkbox"
          className="flex items-center space-x-2.5 cursor-pointer group select-none"
        >
          <div className="relative flex items-center justify-center">
            <input
              id="auto-cinematography-checkbox"
              type="checkbox"
              checked={autoEnhance}
              onChange={(e) => onToggleAutoEnhance(e.target.checked)}
              disabled={disabled}
              className="peer sr-only"
            />
            <div className={`w-4 h-4 rounded border transition-all flex items-center justify-center ${
              autoEnhance 
                ? 'bg-white border-white text-black' 
                : 'border-neutral-700 bg-[#111111] group-hover:border-neutral-500'
            }`}>
              {autoEnhance && <Check size={11} strokeWidth={3} className="text-black" />}
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-xs font-semibold text-neutral-200 group-hover:text-white transition-colors">
              Auto-suggest prompt improvements based on chosen technique
            </span>
            <span className="text-[10px] uppercase font-mono tracking-wider px-1.5 py-0.5 rounded bg-[#181818] border border-neutral-800 text-neutral-400">
              Cinematography
            </span>
          </div>
        </label>

        {autoEnhance && (
          <div className="flex items-center space-x-2 text-[10px] text-neutral-400">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-mono text-neutral-300">Omni Flash Terminology Injection Active</span>
          </div>
        )}
      </div>

      {/* Suggested Prompt Improvements Panel (Revealed when checkbox is active) */}
      {autoEnhance && (
        <div className="rounded-xl border border-neutral-800 bg-[#0a0a0a] p-3.5 space-y-3 transition-all">
          {/* Top meta row: Active Technique & Optics overview */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-800/80 pb-2.5">
            <div className="flex items-center space-x-2">
              <div className="w-5 h-5 rounded bg-neutral-900 border border-neutral-700 flex items-center justify-center text-neutral-300">
                <Camera size={12} strokeWidth={2} />
              </div>
              <div>
                <span className="text-xs font-bold text-white tracking-wide">
                  {profile.techniqueName}
                </span>
                <span className="text-[11px] text-neutral-400 ml-2 font-normal">
                  — {profile.headline}
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-2 text-[10px] font-mono text-neutral-400">
              <SlidersHorizontal size={11} className="text-neutral-500" />
              <span>{profile.opticsOverview}</span>
            </div>
          </div>

          {/* Specialized Cinematographic Key Terms Chips */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-500 mr-1 flex items-center space-x-1">
              <span>Key Terms:</span>
            </span>
            {profile.keyTerms.map((term, i) => (
              <span
                key={i}
                className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#141414] border border-neutral-800 text-neutral-300 hover:border-neutral-600 transition-colors"
              >
                {term}
              </span>
            ))}
          </div>

          {/* Suggested Prompt Body */}
          <div className="bg-[#050505] border border-neutral-800/90 rounded-lg p-3 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1.5 text-[10px] uppercase tracking-wider font-semibold text-neutral-400">
                <Sparkles size={12} className="text-neutral-300" />
                <span>Suggested Cinematographic Direction</span>
                {aiCustomSuggestion && (
                  <span className="text-[9px] text-neutral-400 bg-neutral-900 border border-neutral-700 px-1 rounded font-mono">
                    AI Custom Refined
                  </span>
                )}
              </div>

              <div className="flex items-center space-x-2">
                {/* Refine with AI button */}
                <button
                  onClick={handleRefineWithAI}
                  disabled={isRefining || disabled}
                  className="text-[10px] text-neutral-400 hover:text-white flex items-center space-x-1 px-2 py-0.5 rounded border border-neutral-800 hover:border-neutral-600 bg-neutral-900/60 disabled:opacity-40 transition-colors"
                  title="Generate a dynamic prompt refinement blending your direction with cinematography terms"
                >
                  {isRefining ? (
                    <>
                      <Loader2 size={10} className="animate-spin text-white" />
                      <span>Refining...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles size={10} className="text-neutral-300" />
                      <span>Refine with AI</span>
                    </>
                  )}
                </button>

                {/* Apply Suggestion to Direction Note input */}
                <button
                  onClick={handleApply}
                  disabled={disabled}
                  className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded transition-all flex items-center space-x-1 ${
                    justApplied
                      ? 'bg-emerald-950 border border-emerald-700 text-emerald-300'
                      : 'bg-white hover:bg-neutral-200 text-black border border-white'
                  }`}
                  title="Copy this suggested cinematography prompt into the Direction Note field"
                >
                  {justApplied ? (
                    <>
                      <Check size={11} strokeWidth={2.5} />
                      <span>Applied to Note</span>
                    </>
                  ) : (
                    <>
                      <ArrowDownLeft size={11} strokeWidth={2.5} />
                      <span>Apply to Direction Note</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <p className="text-xs text-neutral-200 leading-relaxed font-normal">
              {activeSuggestion}
            </p>
          </div>

          {/* Bottom Injection Details Toggle */}
          <div className="flex items-center justify-between pt-0.5 text-[10px] text-neutral-400">
            <div className="flex items-center space-x-1.5">
              <Info size={11} className="text-neutral-500" />
              <span>
                These camera kinematics, shutter angles, and optical specs will be injected automatically before dispatching to Omni Flash.
              </span>
            </div>

            <button
              onClick={() => setShowDetails(!showDetails)}
              className="flex items-center space-x-1 text-neutral-400 hover:text-white transition-colors"
            >
              <span>{showDetails ? 'Hide' : 'Inspect'} Injected Specs</span>
              {showDetails ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
            </button>
          </div>

          {/* Expandable Injected Specs Raw Block */}
          {showDetails && (
            <div className="mt-2 p-3 bg-black rounded-lg border border-neutral-800 text-[11px] font-mono text-neutral-300 whitespace-pre-wrap leading-relaxed">
              {profile.detailedInjection}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
