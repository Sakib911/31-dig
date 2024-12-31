interface SectionTitleProps {
  category: string;
  title: string;
  description: string;
}

export const SectionTitle = ({ category, title, description }: SectionTitleProps) => (
  <div className="text-center max-w-3xl mx-auto space-y-4">
    <span className="text-purple-600 font-medium">{category}</span>
    <h2 className="text-3xl font-bold text-gray-900">
      {title.split(' ').map((word, i) => (
        <span key={i}>
          {i === 1 ? <span className="text-purple-600">{word}</span> : word}{' '}
        </span>
      ))}
    </h2>
    <p className="text-gray-500 leading-relaxed">{description}</p>
  </div>
);