# Venkey Dresses - Garment Manufacturing Website

A modern, professional website for Venkey Dresses, a garment manufacturing company with 30+ years of experience in uniform pants, half pants, cotton pants, and jeans manufacturing.

## Company Information

- **Company Name:** Venkey Dresses
- **Experience:** 30+ Years in Garment Manufacturing
- **Location:** 15-2-189/3, Obulachari Road, Rayadurg, Andhra Pradesh 515865
- **Specialization:** Uniform Pants, Half Pants, Cotton Pants, Jeans
- **Status:** GST Registered & Compliant

## Website Features

### Main Website
- **Professional Landing Page** with company branding
- **Product Showcase** featuring all garment categories
- **Company Profile** highlighting 30+ years of experience
- **Contact Information** with complete business details
- **Responsive Design** optimized for all devices
- **Modern UI/UX** with smooth animations

### Manufacturing Dashboard
- **Real-time Production Tracking**
- **Quality Control Analytics**
- **Inventory Management**
- **Order Status Monitoring**
- **Performance Metrics**
- **Interactive Charts & Graphs**

## Technology Stack

- **Framework:** Next.js 14 with App Router
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Charts:** Chart.js with React Chart.js 2
- **Language:** TypeScript
- **Icons:** Heroicons

## Project Structure

```
venkey-dresses-website/
├── app/
│   ├── globals.css          # Global styles with Tailwind
│   ├── layout.tsx           # Root layout component
│   ├── page.tsx             # Main homepage
│   └── dashboard/
│       └── page.tsx         # Manufacturing dashboard
├── public/                  # Static assets
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind configuration
├── next.config.js          # Next.js configuration
└── README.md              # Project documentation
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/pavanKumar2812/GarmentVD.git
   cd GarmentVD
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## Pages & Features

### Homepage (`/`)
- Hero section with company branding
- About section with company history
- Products showcase with detailed descriptions
- Manufacturing capabilities overview
- Contact form and business information
- Professional footer

### Manufacturing Dashboard (`/dashboard`)
- Production statistics and KPIs
- Weekly production charts by product type
- Quality control distribution analysis
- Recent orders tracking table
- Inventory status monitoring
- Real-time data visualization

## Business Information Display

### GST Registration
✅ **Recommended:** Displaying GST number on the website adds credibility and shows:
- Legal compliance and legitimacy
- Professional business status
- Trust factor for B2B customers
- Transparency in business operations

### Contact Details
- Complete business address
- GST registration status
- 30+ years experience highlight
- Product specialization areas

## Customization

### Colors & Branding
The website uses a professional blue color scheme that can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    500: '#0ea5e9',
    800: '#075985',
    // ... more shades
  }
}
```

### Content Updates
- Update company information in `app/page.tsx`
- Modify product details and descriptions
- Add actual product images
- Update dashboard data sources

### Additional Features
- Integration with inventory management systems
- Real-time production data APIs
- Customer portal for order tracking
- Mobile app development
- E-commerce functionality

## Deployment Options

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload dist folder to Netlify
```

### Traditional Hosting
```bash
npm run build
# Upload .next folder to your hosting provider
```

## SEO Optimization

The website includes:
- Proper meta tags and descriptions
- Structured data for business information
- Optimized images and loading
- Mobile-friendly responsive design
- Fast loading times with Next.js optimization

## Future Enhancements

1. **Customer Portal**
   - Order tracking system
   - Customer account management
   - Invoice and payment tracking

2. **E-commerce Integration**
   - Online product catalog
   - Quote request system
   - Bulk order management

3. **Advanced Analytics**
   - Production forecasting
   - Demand analysis
   - Cost optimization tools

4. **Mobile App**
   - React Native mobile application
   - Push notifications for orders
   - Mobile dashboard access

## Support & Maintenance

For technical support and website updates:
- Regular security updates
- Performance optimization
- Content management
- Feature enhancements
- Database maintenance

## License

This project is proprietary software developed for Venkey Dresses.

---

**Venkey Dresses** - *Crafting Quality Garments Since 1990s*
*15-2-189/3, Obulachari Road, Rayadurg, Andhra Pradesh 515865*
