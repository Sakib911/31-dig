interface SectionTitleProps {
  category: string;
  title: string;
  description: string;
}

export const SectionTitle = ({ category, title, description }: SectionTitleProps) => (
  <div className="text-center max-w-screen-2xl mx-auto ">
    <span className="text-[#2F8EAA] font-family-outfit font-[24px] font-semibold">{category}</span>
    <h2 className="text-[55px] font-bold text-[#310138]">
      {title.split(' ').map((word, i) => (
        <span key={i}>
          {i === 1 ? <span className="text-[#5927E5]">{word}</span> : word}{' '}
        </span>
      ))}
    </h2>
    <p className="text-gray-500 leading-relaxed">{description}</p>
  </div>
);
