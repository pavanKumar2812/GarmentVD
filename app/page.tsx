'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

// Navigation Component
const Navigation = () => {
  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary-800">Venkey Dresses</h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-gray-800 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#about" className="text-gray-800 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="#products" className="text-gray-800 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">Products</a>
              <a href="#manufacturing" className="text-gray-800 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">Manufacturing</a>
              <a href="#contact" className="text-gray-800 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

// Hero Section
const HeroSection = () => {
  return (
    <section id="home" className="bg-gradient-to-r from-primary-800 to-primary-600 hero-pattern">
      <div className="max-w-7xl mx-auto px-4 py-24 sm:py-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Venkey Dresses
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Premium Garment Manufacturing with 30+ Years of Excellence
          </p>
          <p className="text-lg text-blue-200 mb-12 max-w-2xl mx-auto">
            Specializing in Uniform Pants, Half Pants, Cotton & Jeans Manufacturing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors">
              View Products
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-800 px-8 py-3 rounded-lg text-lg font-medium transition-colors">
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// About Section
const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Venkey Dresses</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With over 30 years of experience in the garment manufacturing industry, 
            Venkey Dresses has established itself as a trusted name in quality apparel production.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Legacy</h3>
            <div className="space-y-4 text-gray-600">
              <p>🏭 30+ years of manufacturing excellence</p>
              <p>👔 Specialized in uniform and casual pants</p>
              <p>🧵 High-quality cotton and jeans production</p>
              <p>🎯 Commitment to precision and quality</p>
              <p>📍 Located in Rayadurg, Andhra Pradesh</p>
              <p>📋 GST registered and compliant business</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Company Details</h3>
            <div className="space-y-3 text-gray-600">
              <p><strong>Company:</strong> Venkey Dresses</p>
              <p><strong>Experience:</strong> 30+ Years</p>
              <p><strong>Specialization:</strong> Garment Manufacturing</p>
              <p><strong>Location:</strong> Rayadurg, Andhra Pradesh 515865</p>
              <p><strong>Address:</strong> 15-2-189/3, Obulachari Road</p>
              <p><strong>Status:</strong> GST Registered</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Products Section
const ProductsSection = () => {
  const products = [
    {
      title: "Uniform Pants",
      description: "Professional quality uniform pants for corporate and institutional use",
      image: "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=500",
      features: ["Durable fabric", "Professional fit", "Multiple colors", "Bulk orders"]
    },
    {
      title: "Half Pants",
      description: "Comfortable and stylish half pants for casual and sports wear",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500",
      features: ["Breathable material", "Perfect fit", "Various designs", "All sizes"]
    },
    {
      title: "Cotton Pants",
      description: "Premium cotton pants offering comfort and style for everyday wear",
      image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500",
      features: ["100% cotton", "Soft texture", "Easy care", "Long lasting"]
    },
    {
      title: "Jeans",
      description: "High-quality denim jeans with modern cuts and classic appeal",
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500",
      features: ["Premium denim", "Modern cuts", "Fade resistant", "Comfortable fit"]
    }
  ]

  return (
    <section id="products" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Products</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We manufacture a wide range of high-quality garments to meet diverse customer needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gray-200 relative">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <ul className="space-y-1">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-500">• {feature}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Manufacturing Section
const ManufacturingSection = () => {
  return (
    <section id="manufacturing" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Manufacturing Excellence</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            State-of-the-art manufacturing processes ensuring quality and efficiency
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-lg shadow-lg text-center"
          >
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">🏭</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Production Capacity</h3>
            <p className="text-gray-600">High-volume production capabilities with quality control at every step</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-white p-8 rounded-lg shadow-lg text-center"
          >
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Tracking & Analytics</h3>
            <p className="text-gray-600">Real-time production tracking and comprehensive analytics dashboard</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 rounded-lg shadow-lg text-center"
          >
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">✅</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Assurance</h3>
            <p className="text-gray-600">Stringent quality checks ensuring every product meets our high standards</p>
          </motion.div>
        </div>

        <div className="mt-12 text-center">
          <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors">
            Access Manufacturing Dashboard
          </button>
        </div>
      </div>
    </section>
  )
}

// Contact Section
const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us for your garment manufacturing needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 p-8 rounded-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-primary-600 mt-1">📍</span>
                <div>
                  <p className="font-medium text-gray-900">Address</p>
                  <p className="text-gray-600">15-2-189/3, Obulachari Road</p>
                  <p className="text-gray-600">Rayadurg, Andhra Pradesh 515865</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="text-primary-600 mt-1">🏢</span>
                <div>
                  <p className="font-medium text-gray-900">Company</p>
                  <p className="text-gray-600">Venkey Dresses</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="text-primary-600 mt-1">📋</span>
                <div>
                  <p className="font-medium text-gray-900">GST Registration</p>
                  <p className="text-gray-600">GST Registered & Compliant</p>
                  <p className="text-sm text-gray-500">30+ Years of Trusted Business</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-primary-50 p-8 rounded-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>
              <button className="w-full bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Footer
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Venkey Dresses</h3>
            <p className="text-gray-400 mb-4">
              Premium garment manufacturing with 30+ years of excellence in the industry.
            </p>
            <p className="text-sm text-gray-500">GST Registered & Compliant</p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Products</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Uniform Pants</li>
              <li>Half Pants</li>
              <li>Cotton Pants</li>
              <li>Jeans</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Contact</h4>
            <div className="text-gray-400 space-y-2">
              <p>15-2-189/3, Obulachari Road</p>
              <p>Rayadurg, Andhra Pradesh 515865</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Venkey Dresses. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

// Main Page Component
export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <ManufacturingSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
