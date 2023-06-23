import React, {useEffect} from 'react';
import {useDispatch} from "react-redux"

import OutlineProductInfo from './OutlineProductInfo'
import ControlledRadioButtonsGroup from './ControlledRadioButtonsGroup'
import {ADD_TO_TEMP_SELECTED, SEED_DATA} from "../../../store/Const"

import "./index.scss"

export default function ProductTopRight({product, sumPrice, setSumPrice}) {
  const dispatch = useDispatch()

  SEED_DATA.productName = product?.name

  useEffect(() => {
    // initialize basic info in redux, one time
    dispatch({
      'type': ADD_TO_TEMP_SELECTED,
      'payload': {
        id: product?.id,
        'name': product?.name,
        'media': product?.media[0],
        'price': product?.price,
        'stock': 999
      }
    })
  }, [])

  useEffect(() => {
    // synchronize sumPrice to Redux when changing
    dispatch({
      'type': ADD_TO_TEMP_SELECTED,
      'payload': {'sumPrice': sumPrice.toFixed(2)}
    })
  }, [dispatch, sumPrice])

  return (
      <div className='product_top_right'>
        <OutlineProductInfo product={SEED_DATA} sumPrice={sumPrice} />
        {product && product.profileCategories.map(ele => {
          return <ControlledRadioButtonsGroup
              key={ele.id}
              profileCategory={ele}
              setSumPrice={setSumPrice}
          />
        })}
      </div>
  );
}
