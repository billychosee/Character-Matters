-- Character Matters E-commerce Database Schema
-- Run this SQL in your Supabase SQL Editor

-- Enable Row Level Security (RLS)
ALTER DATABASE postgres SET row_security = on;

-- Books table to store book information
CREATE TABLE books (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    image_url TEXT,
    isbn VARCHAR(20),
    pages INTEGER,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Orders table to store customer orders
CREATE TABLE orders (
    id VARCHAR(255) PRIMARY KEY,
    customer_email VARCHAR(255) NOT NULL,
    customer_name VARCHAR(255) NOT NULL,
    customer_phone VARCHAR(50),
    customer_address TEXT NOT NULL,
    total_amount DECIMAL(10,2) NOT NULL,
    status VARCHAR(50) DEFAULT 'pending_payment',
    bank_reference VARCHAR(255),
    transfer_amount DECIMAL(10,2),
    payment_verified BOOLEAN DEFAULT FALSE,
    order_items JSONB NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Cart items table (for user sessions)
CREATE TABLE cart_items (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    session_id VARCHAR(255) NOT NULL,
    book_id UUID REFERENCES books(id) ON DELETE CASCADE,
    quantity INTEGER NOT NULL DEFAULT 1,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create indexes for better performance
CREATE INDEX idx_orders_customer_email ON orders(customer_email);
CREATE INDEX idx_orders_created_at ON orders(created_at);
CREATE INDEX idx_cart_items_session_id ON cart_items(session_id);
CREATE INDEX idx_cart_items_book_id ON cart_items(book_id);

-- Row Level Security (RLS) policies
ALTER TABLE books ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE cart_items ENABLE ROW LEVEL SECURITY;

-- Books policies (public read access)
CREATE POLICY "Public books are viewable by everyone" ON books
    FOR SELECT USING (true);

-- Orders policies (restricted access)
CREATE POLICY "Users can view their own orders" ON orders
    FOR SELECT USING (customer_email = current_setting('request.jwt.claims')::json->>'email');

-- Cart items policies (session-based access)
CREATE POLICY "Users can manage their own cart items" ON cart_items
    FOR ALL USING (session_id = current_setting('request.jwt.claims')::json->>'session_id');

-- Insert sample book data
INSERT INTO books (title, description, price, image_url, pages) VALUES
(
    'CHARACTER MATTERS',
    'A powerful and practical guide to understanding the importance of character in the Christian walk. This book helps believers align their daily choices, attitudes, and lifestyle with the heart of Christ.',
    20.99,
    '/character-matters-cover.png',
    200
);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = TIMEZONE('utc'::text, NOW());
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_books_updated_at BEFORE UPDATE ON books
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_orders_updated_at BEFORE UPDATE ON orders
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_cart_items_updated_at BEFORE UPDATE ON cart_items
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();