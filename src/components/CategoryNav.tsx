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
    <nav className="border-b border-border/30 bg-card/20 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-8 h-12 overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <a 
              key={category}
              href="#"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 whitespace-nowrap hover:glow relative group"
            >
              {category}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default CategoryNav;