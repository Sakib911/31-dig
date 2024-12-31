interface FeaturePillProps {
  text: string;
}

export const FeaturePill = ({ text }: FeaturePillProps) => (
  <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-white flex items-center gap-2">
    <span className="text-white">✓</span>
    {text}
  </div>
);