import { baseApi } from "../api/baseApi";

export const bikeApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
      getBikes: builder.query({
        query: () => ({
          url: '/api/bikes',
          method: 'GET',
        }),
      }),
      getSingleBike: builder.query({
        query: (id) => ({
          url: `/api/bike/${id}`,
          method: 'GET',
        }),
      }),
      addBike: builder.mutation({
        query: (newBike) => ({
          url: '/api/bikes',
          method: 'POST',
          body: newBike,
        }),
      }),
      updateBike: builder.mutation({
        query: ({ id, data }) => ({
          url: `/api/bikes/${id}`,
          method: 'PUT',
          body: data,
        }),
      }),
      
      deleteBike: builder.mutation({
        query: (id) => ({
          url: `/api/bikes/${id}`,
          method: 'DELETE',
        }),
      }),
      // create rental apis
      getRentals: builder.query({
        query: () => ({
          url: "/api/rentals",
          method: 'GET',
        }),
      }),

      createRental: builder.mutation({
        query: (data) => ({
          url: '/api/rentals',
          method: 'POST',
          body: data,
        }),
      }),

      returnRental: builder.mutation<void, string>({
        query: (rentalId) => ({
          url: `/api/rentals/${rentalId}/return`,
          method: 'PUT',
        }),
      }),
      // sign up apis

      getProfile: builder.query({
        query: () => ({
          url: "/api/users/me",
          method: 'GET',
        }),
      }),

      signUp: builder.mutation({
        query: (data) => ({
          url: '/api/auth/signup',
          method: 'POST',
          body: data,
        }),
      }),
      login: builder.mutation({
        query: (data) => ({
          url: '/api/auth/login',
          method: 'POST',
          body: data,
        }),
      }),



      // payment 
      createPaymentIntent: builder.mutation({
        query: (amount: number) => ({
          url: 'payments/create-payment-intent',
          method: 'POST',
          body: { amount },
        }),
      }),
    })
})

export const {useGetBikesQuery, useGetSingleBikeQuery, useAddBikeMutation, useDeleteBikeMutation, useUpdateBikeMutation,   useCreateRentalMutation, useGetRentalsQuery, useReturnRentalMutation,   useSignUpMutation, useLoginMutation , useCreatePaymentIntentMutation , useGetProfileQuery} = bikeApi;