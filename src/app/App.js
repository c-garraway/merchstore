import React from 'react';

import { Inventory } from '../features/inventory/Inventory.js';
import { CurrencyFilter } from '../features/currencyFilter/CurrencyFilter.js';
import { SearchTerm } from '../features/searchTerm/SearchTerm.js';
// Import the Cart component here.
import {Cart} from '../features/cart/Cart.js'
// Render the Cart component below <Inventory />
export const App = (props) => {

  const { state, dispatch } = props;

  const visibleInventory = getFilteredInventory(state.inventory, state.searchTerm);

  return (
    <div>
      <CurrencyFilter
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />
      
      <SearchTerm 
        searchTerm={state.searchTerm}
        dispatch={dispatch}
      />
    
      <Inventory
        inventory={visibleInventory}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />

      <Cart
        cart={state.cart}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}

      />
    </div>
  );
};

function getFilteredInventory(inventory, searchTerm) {
    return inventory.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
