interface SectionProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}
const Section: React.FC<SectionProps> = ({ children, title, className }) => {
  return (
    <section className="bg-black/10 rounded-2xl p-6 shadow-md">
      {title && (
        <h2 className="uppercase tracking-wider font-bold mb-4 text-xl select-none">
          {title}
        </h2>
      )}
      <div className={className}>{children}</div>
    </section>
  );
};

export default Section;
