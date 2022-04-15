import React from 'react'
import Box from './Box'
import Bookmark from '../../features/bookmark/Bookmark'
import './CatalogueItem.css'

/**
 * ITEM SCHEMA
 * {
 *      title: string,
 *      thumbnail: {
 *          trending: {
 *              small: string,
 *              large: string
 *          },
 *          regular: {
 *              small: string,
 *              medium: string,
 *              large: string
 *          }
 *      },
 *      year: number,
 *      category: string | "Movie" | "TV Series",
 *      rating: string,
 *      isTrending: boolean
 * }
 */
function CatalogueItem({ item }) {
  return (
    <Box className='CatalogueItem'>
      <CatalogueItemImage {...item} />
      <CatalogueItemInfo {...item} />
    </Box>
  )
}

function CatalogueItemImage(props) {
  const { thumbnail, title } = props

  return (
    <div className='CatalogueItemImage-container'>
      <img
        className='CatalogueItemImage-main'
        src={thumbnail.regular.large}
        alt={title}
      />
      <Bookmark className='CatalogueItemImage-bookmark' item={props} />
    </div>
  )
}

function CatalogueItemInfo({ title, year, category, rating }) {
  return (
    <div className='CatalogueItemInfo-container'>
      <div className='CatalogueItemInfo-sub'>
        <span className='CatalogueItemInfo-year'>{year}</span>{' '}
        <span className='CatalogueItemInfo-category'>{category}</span>{' '}
        <span className='CatalogueItemInfo-rating'>{rating}</span>
      </div>
      <h2 className='CatalogueItemInfo-title'>{title}</h2>
    </div>
  )
}

export default CatalogueItem
