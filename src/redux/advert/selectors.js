import { createSelector } from '@reduxjs/toolkit';

export const selectAdverts = state => state.adverts.items;
export const selectFilters = state => state.filters;
export const selectIsError = state => state.adverts.isError;
export const selectIsLoading = state => state.adverts.isLoading;

export const selectVisibleCatalog = createSelector(
  [selectAdverts, selectFilters],
  (adverts, filter) => {
    return adverts.filter(
      advert =>
        advert.location.includes(filter) ||
        advert.transmission.includes(filter) ||
        advert.details.airConditioner.includes(filter) ||
        advert.details.TV.includes(filter) ||
        advert.details.shower.includes(filter) ||
        advert.details.kitchen.includes(filter) ||
        advert.form.toLowerCase().trim().includes(filter)
    );
  }
);
