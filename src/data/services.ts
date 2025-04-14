
export const servicesData = [
  {
    id: "1",
    title: "Professional Painting Services",
    category: "Painting",
    description: "Our team provides high-quality painting services for both interior and exterior surfaces. We use premium paints that are durable and environmentally friendly. Our experienced painters ensure clean lines, even coverage, and meticulous attention to detail for a flawless finish that transforms your space.",
    price: "$25 - $35",
    priceType: "per hour",
    location: "New York, NY",
    rating: 4.8,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    availability: ["Weekdays", "Weekends", "Evenings"],
    features: [
      "Premium quality paints and materials",
      "Protective coverings for furniture and floors",
      "Wall preparation and repairs included",
      "Eco-friendly options available",
      "Detailed clean-up after service completion"
    ],
    contractor: {
      name: "Quality Painters Inc.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      rating: 4.9,
      verified: true,
      projectsCompleted: 256,
      responseRate: "98%",
      responseTime: "Under 2 hours"
    }
  },
  {
    id: "2",
    title: "Expert Plumbing Solutions",
    category: "Plumbing",
    description: "We offer comprehensive plumbing services for residential and commercial properties. Our licensed plumbers can handle everything from routine maintenance to complex installations and emergency repairs. We use the latest tools and techniques to ensure efficient and long-lasting solutions to all your plumbing needs.",
    price: "$80 - $120",
    priceType: "per hour",
    location: "Brooklyn, NY",
    rating: 4.7,
    reviews: 98,
    image: "https://images.unsplash.com/photo-1574359411659-15573a27fd0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    availability: ["24/7 Emergency Service", "Scheduled Appointments"],
    features: [
      "Licensed and insured professionals",
      "24/7 emergency services available",
      "Up-front pricing with no hidden fees",
      "Warranty on parts and labor",
      "Modern tools and equipment",
      "Compliance with all building codes"
    ],
    contractor: {
      name: "Master Plumbers Co.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      rating: 4.8,
      verified: true,
      projectsCompleted: 342,
      responseRate: "99%",
      responseTime: "Within 1 hour"
    }
  },
  {
    id: "3",
    title: "Residential Electrical Services",
    category: "Electrical",
    description: "Our certified electricians provide safe and reliable electrical services for your home. From installing new fixtures to rewiring and panel upgrades, we ensure all work meets the highest safety standards. We specialize in troubleshooting complex electrical issues and implementing energy-efficient solutions.",
    price: "$95 - $150",
    priceType: "per hour",
    location: "Queens, NY",
    rating: 4.9,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1621905251189-08b45249ff78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
    availability: ["Weekdays", "Weekends", "24/7 Emergency"],
    features: [
      "Licensed and certified electricians",
      "Fully insured service",
      "Residential and commercial expertise",
      "Safety-first approach",
      "Energy-efficient recommendations",
      "Transparent pricing structure"
    ],
    contractor: {
      name: "Bright Spark Electrical",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      rating: 4.9,
      verified: true,
      projectsCompleted: 412,
      responseRate: "97%",
      responseTime: "Under 3 hours"
    }
  },
  {
    id: "4",
    title: "Professional Masonry Work",
    category: "Masonry",
    description: "Our skilled masons specialize in brick, stone, and concrete work for both new construction and restoration projects. We provide durable and aesthetically pleasing masonry solutions that enhance the value and appearance of your property. From brick pointing to stone wall construction, our craftsmen deliver superior results.",
    price: "$45 - $75",
    priceType: "per hour",
    location: "Bronx, NY",
    rating: 4.6,
    reviews: 78,
    image: "https://images.unsplash.com/photo-1584284421125-a30568634cd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    availability: ["Weekdays", "Saturdays"],
    features: [
      "High-quality materials sourcing",
      "Historic restoration expertise",
      "Custom masonry designs",
      "Structural repairs and reinforcement",
      "Waterproofing and sealing services",
      "Climate-appropriate techniques"
    ],
    contractor: {
      name: "Cornerstone Masonry",
      image: "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      rating: 4.7,
      verified: false,
      projectsCompleted: 187,
      responseRate: "92%",
      responseTime: "Within 24 hours"
    }
  },
  {
    id: "5",
    title: "Comprehensive HVAC Services",
    category: "HVAC",
    description: "We provide complete heating, ventilation, and air conditioning services including installation, maintenance, and repairs. Our HVAC technicians are trained to work on all major brands and models. We help you maintain optimal indoor comfort while maximizing energy efficiency and extending the life of your systems.",
    price: "$85 - $130",
    priceType: "per hour",
    location: "Manhattan, NY",
    rating: 4.8,
    reviews: 112,
    image: "https://images.unsplash.com/photo-1581092921461-39e14fd83253?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    availability: ["Weekdays", "Weekends", "Emergency Service"],
    features: [
      "All major brands serviced",
      "Preventative maintenance plans",
      "Energy efficiency upgrades",
      "Indoor air quality solutions",
      "New system installation",
      "Smart thermostat integration"
    ],
    contractor: {
      name: "Climate Control Experts",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      rating: 4.8,
      verified: true,
      projectsCompleted: 275,
      responseRate: "95%",
      responseTime: "Same day"
    }
  }
];
