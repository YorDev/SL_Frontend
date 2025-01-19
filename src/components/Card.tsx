import React from 'react'
import { StarIcon, ShoppingCartIcon, HeartIcon } from 'lucide-react'

interface ProductCardProps {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  rating: number
  reviewCount: number
  isNew?: boolean
  isSale?: boolean
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  originalPrice,
  image,
  rating,
  reviewCount,
  isNew,
  isSale
}) => {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
      <div className="relative">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="h-64 w-full object-cover"
        />
        {isNew && (
          <span className="absolute left-2 top-2 rounded-full bg-green-500 px-2 py-1 text-xs font-semibold text-white">
            New
          </span>
        )}
        {isSale && (
          <span className="absolute right-2 top-2 rounded-full bg-red-500 px-2 py-1 text-xs font-semibold text-white">
            Sale
          </span>
        )}
        <button
          className="absolute right-2 top-2 rounded-full bg-white p-2 text-gray-700 transition-colors hover:bg-gray-100"
          aria-label="Add to favorites"
        >
          <HeartIcon className="h-4 w-4" />
        </button>
      </div>
      <div className="p-4">
        <h2 className="mb-2 line-clamp-2 text-lg font-semibold">{name}</h2>
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'
                }`}
              />
            ))}
            <span className="text-sm text-gray-600">({reviewCount})</span>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold">${price.toFixed(2)}</div>
            {originalPrice && (
              <div className="text-sm text-gray-500 line-through">
                ${originalPrice.toFixed(2)}
              </div>
            )}
          </div>
        </div>
        <button
          className="flex w-full items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
        >
          <ShoppingCartIcon className="mr-2 h-4 w-4" />
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard

