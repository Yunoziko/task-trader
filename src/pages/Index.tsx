import Header from "@/components/Header";
import CategoryNav from "@/components/CategoryNav";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";

// Import service images
import logoDesignImg from "@/assets/service-logo-design.jpg";
import webDevImg from "@/assets/service-web-dev.jpg";
import writingImg from "@/assets/service-writing.jpg";
import marketingImg from "@/assets/service-marketing.jpg";

const featuredServices = [
  {
    id: 1,
    image: logoDesignImg,
    title: "I will design a professional logo for your business",
    seller: "designpro",
    sellerLevel: "Level 2 Seller",
    rating: 4.9,
    reviewCount: 1847,
    price: 25,
    isFavorite: false
  },
  {
    id: 2,
    image: webDevImg,
    title: "I will develop a responsive website using React and modern technologies",
    seller: "webmaster",
    sellerLevel: "Top Rated Seller",
    rating: 5.0,
    reviewCount: 892,
    price: 150,
    isFavorite: true
  },
  {
    id: 3,
    image: writingImg,
    title: "I will write engaging content for your blog or website",
    seller: "wordsmith",
    sellerLevel: "Level 1 Seller",
    rating: 4.8,
    reviewCount: 623,
    price: 35,
    isFavorite: false
  },
  {
    id: 4,
    image: marketingImg,
    title: "I will create a complete digital marketing strategy for your business",
    seller: "marketingguru",
    sellerLevel: "Top Rated Seller",
    rating: 4.9,
    reviewCount: 1205,
    price: 200,
    isFavorite: false
  },
  {
    id: 5,
    image: logoDesignImg,
    title: "I will create a modern minimalist logo design",
    seller: "creativepro",
    sellerLevel: "Level 2 Seller",
    rating: 4.7,
    reviewCount: 445,
    price: 45,
    isFavorite: true
  },
  {
    id: 6,
    image: webDevImg,
    title: "I will build a custom e-commerce website with payment integration",
    seller: "ecomdev",
    sellerLevel: "Level 2 Seller",
    rating: 4.9,
    reviewCount: 756,
    price: 300,
    isFavorite: false
  },
  {
    id: 7,
    image: writingImg,
    title: "I will write SEO optimized articles and blog posts",
    seller: "contentwriter",
    sellerLevel: "Level 1 Seller",
    rating: 4.6,
    reviewCount: 334,
    price: 20,
    isFavorite: false
  },
  {
    id: 8,
    image: marketingImg,
    title: "I will manage your social media accounts and create engaging content",
    seller: "socialmedia",
    sellerLevel: "Top Rated Seller",
    rating: 4.8,
    reviewCount: 987,
    price: 120,
    isFavorite: false
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CategoryNav />
      <HeroSection />
      
      {/* Featured Services Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-card/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-foreground mb-8 font-display">
            Popular services
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredServices.map((service) => (
              <ServiceCard
                key={service.id}
                image={service.image}
                title={service.title}
                seller={service.seller}
                sellerLevel={service.sellerLevel}
                rating={service.rating}
                reviewCount={service.reviewCount}
                price={service.price}
                isFavorite={service.isFavorite}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-foreground mb-12 font-display text-center">
            Explore our marketplace
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: "Programming & Tech", color: "bg-blue-500" },
              { name: "Graphics & Design", color: "bg-purple-500" },
              { name: "Digital Marketing", color: "bg-green-500" },
              { name: "Writing & Translation", color: "bg-orange-500" },
              { name: "Video & Animation", color: "bg-red-500" },
              { name: "AI Services", color: "bg-cyan-500" },
              { name: "Music & Audio", color: "bg-pink-500" },
              { name: "Business", color: "bg-indigo-500" },
              { name: "Consulting", color: "bg-yellow-500" },
              { name: "Data", color: "bg-gray-500" }
            ].map((category) => (
              <div 
                key={category.name}
                className="group cursor-pointer hover-glow"
              >
                <div className={`${category.color} h-36 rounded-xl mb-4 relative overflow-hidden group-hover:scale-105 transition-all duration-500 shadow-xl`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-black/20 group-hover:from-white/10 group-hover:to-black/10 transition-all duration-500" />
                  <div className="absolute inset-0 backdrop-blur-[1px] group-hover:backdrop-blur-0 transition-all duration-500" />
                </div>
                <h3 className="font-medium text-foreground group-hover:text-primary transition-all duration-300 text-center">
                  {category.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;