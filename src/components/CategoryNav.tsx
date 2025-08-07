const categories = [
  "Graphics & Design",
  "Programming & Tech", 
  "Digital Marketing",
  "Writing & Translation",
  "Video & Animation",
  "AI Services",
  "Music & Audio",
  "Business",
  "Consulting"
];

const CategoryNav = () => {
  return (
    <nav className="border-b border-border bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-8 h-12 overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <a 
              key={category}
              href="#"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
            >
              {category}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default CategoryNav;