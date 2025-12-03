# Character Matters E-commerce Setup Guide

## Overview

This is a complete bank-transfer checkout system with shopping cart functionality for the Character Matters book website. The system includes:

- Shopping cart with add/remove/quantity controls
- Bank transfer payment processing
- Order management with Supabase
- Responsive design with mobile support

## Quick Start

### 1. Supabase Setup

1. **Create a Supabase Project**

   - Go to [supabase.com](https://supabase.com)
   - Create a new project
   - Note down your project URL and anon key

2. **Database Setup**

   - Copy the contents of `supabase-schema.sql`
   - Go to your Supabase project → SQL Editor
   - Run the SQL script to create tables and sample data

3. **Environment Variables**
   - Copy `.env.local.example` to `.env.local`
   - Replace the placeholder values with your actual Supabase credentials:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-actual-anon-key
   ```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Features

### Shopping Cart

- **Add to Cart**: Click "Add to cart" button on any book
- **Cart Icon**: Shows item count in the navbar
- **Cart Sidebar**: Click cart icon to view/edit cart items
- **Quantity Controls**: Increase/decrease quantities or remove items
- **Persistent Storage**: Cart contents saved in localStorage

### Checkout Process

1. **Cart Review**: View items and totals in the cart sidebar
2. **Proceed to Checkout**: Click "Proceed to Checkout" button
3. **Customer Information**: Fill in contact and shipping details
4. **Bank Transfer Details**: View payment instructions and enter transfer reference
5. **Order Confirmation**: Complete order and receive confirmation

### Bank Transfer Payment

The checkout includes placeholders for bank transfer details:

- **Bank Name**: Character Matters Ministry Bank
- **Account Name**: Character Matters Publishing
- **Account Number**: 1234567890 (placeholder)
- **Routing Number**: 021000021 (placeholder)

**⚠️ IMPORTANT**: Replace these placeholders with your actual bank details in `src/app/checkout/page.tsx`

## File Structure

```
src/
├── app/
│   ├── checkout/page.tsx          # Checkout form and payment processing
│   ├── thank-you/page.tsx         # Order confirmation page
│   ├── navbar.tsx                 # Navigation with cart integration
│   └── layout.tsx                 # Root layout with CartProvider
├── components/
│   ├── Cart.tsx                   # Shopping cart sidebar component
│   ├── BooksSection.tsx           # Book display with add to cart
│   └── ...
├── context/
│   └── CartContext.tsx            # Cart state management
├── lib/
│   └── supabase.ts                # Supabase client configuration
└── ...

supabase-schema.sql                 # Database schema and sample data
.env.local.example                  # Environment variables template
```

## Customization

### 1. Update Bank Details

In `src/app/checkout/page.tsx`, replace the placeholder bank details:

```jsx
<div className="space-y-1 text-sm text-gray-700">
  <p>
    <strong>Bank Name:</strong> YOUR ACTUAL BANK NAME
  </p>
  <p>
    <strong>Account Name:</strong> YOUR ACTUAL ACCOUNT NAME
  </p>
  <p>
    <strong>Account Number:</strong> YOUR ACTUAL ACCOUNT NUMBER
  </p>
  <p>
    <strong>Routing Number:</strong> YOUR ACTUAL ROUTING NUMBER
  </p>
</div>
```

### 2. Add More Books

Books are currently hardcoded in `BooksSection.tsx`. For a dynamic system:

- Add books to the Supabase `books` table
- Create a books API to fetch from database
- Update the display component

### 3. Email Notifications

Currently, the system shows alerts. To add email functionality:

- Integrate with an email service (SendGrid, Mailgun, etc.)
- Add email templates for order confirmations
- Set up email sending in the checkout process

### 4. Order Management

Access order data through:

- Supabase Dashboard → Table Editor → orders
- Orders are stored with status tracking
- Payment verification workflow can be implemented

## Testing the System

1. **Add Items to Cart**

   - Navigate to the Books section
   - Click "Add to cart" on the Character Matters book
   - Cart icon should show item count

2. **Test Cart Functions**

   - Click cart icon to open sidebar
   - Test quantity increase/decrease
   - Test item removal
   - Verify total calculation

3. **Test Checkout Flow**
   - Proceed to checkout
   - Fill out customer form
   - Test bank transfer form
   - Verify order creation

## Production Deployment

1. **Set Production Environment Variables**

   - Configure Supabase production project
   - Update environment variables for production

2. **Security Considerations**

   - Enable Row Level Security (RLS) in Supabase
   - Set up proper authentication if needed
   - Validate all form inputs
   - Add CSRF protection

3. **Performance Optimization**
   - Add image optimization
   - Implement caching strategies
   - Optimize bundle size

## Troubleshooting

### Cart Not Working

- Ensure CartProvider is wrapped around the app
- Check browser console for errors
- Verify localStorage is enabled

### Database Connection Issues

- Verify Supabase credentials in `.env.local`
- Check Supabase project is active
- Ensure database schema is properly set up

### Checkout Fails

- Check network connectivity
- Verify form validation passes
- Check Supabase table permissions

## Support

For questions or issues:

- Check the browser console for errors
- Verify Supabase configuration
- Test with sample data from the schema

## Next Steps

1. Replace placeholder bank details with real information
2. Set up email notifications for order confirmations
3. Implement admin panel for order management
4. Add payment verification workflow
5. Set up shipping calculation and tracking
