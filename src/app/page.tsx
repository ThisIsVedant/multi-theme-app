"use client"

import { useEffect, useState } from "react"

export interface Product {
    id: number
    title: string
    price: number
    description: string
    image: string
}

export default function HomePage() {
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch("https://fakestoreapi.com/products?limit=8")
                if (!res.ok) throw new Error("Failed to fetch products")
                const data = await res.json()
                setProducts(data)
            } catch (err) {
                setError(err instanceof Error ? err.message : "An unknown error occurred")
            } finally {
                setLoading(false)
            }
        }

        fetchProducts()
    }, [])

    const stats = [
        { label: "Products", value: "1000+", color: "bg-blue-600" },
        { label: "Customers", value: "50K+", color: "bg-purple-600" },
        { label: "Growth", value: "25%", color: "bg-green-600" },
        { label: "Rating", value: "4.9", color: "bg-yellow-500" },
    ]

    return (
        <main className="bg-white text-gray-900 min-h-screen px-6 py-12">
            <div className="max-w-7xl mx-auto">
                {/* Hero Section */}
                <section className="text-center space-y-6 mb-20">
                    <h1 className="text-4xl md:text-6xl font-bold">
                        Welcome to <span className="text-blue-600">MultiTheme</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Experience the power of dynamic theming with our innovative multi-theme switcher. Transform your entire
                        application&apos;s look and feel with just one click.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                        <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition">
                            Explore Products
                        </button>
                        <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition">
                            Learn More
                        </button>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="bg-gray-50 border border-gray-200 rounded-2xl p-8 mb-20">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center space-y-3">
                                <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-opacity-20" style={{ backgroundColor: stat.color }}>
                                    <div className={`w-6 h-6 rounded-full ${stat.color}`}></div>
                                </div>
                                <div className="text-2xl font-bold">{stat.value}</div>
                                <div className="text-sm text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Product Section */}
                <section>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Discover our curated collection of premium products, each one carefully selected for quality and style.
                        </p>
                    </div>

                    {loading && (
                        <div className="flex justify-center items-center py-20">
                            <div className="w-8 h-8 border-4 border-blue-200 border-t-transparent rounded-full animate-spin"></div>
                        </div>
                    )}

                    {error && (
                        <div className="text-center text-red-600 py-12">
                            <p className="text-lg font-semibold">Error loading products</p>
                            <p className="text-sm mt-1">{error}</p>
                        </div>
                    )}

                    {!loading && !error && (
                        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            {products.map((product) => (
                                <div
                                    key={product.id}
                                    className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition"
                                >
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-52 object-contain mb-4"
                                    />
                                    <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                                    <p className="text-gray-700 font-bold mb-1">${product.price}</p>
                                    <p className="text-sm text-gray-500 line-clamp-3">{product.description}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </section>
            </div>
        </main>
    )
}
