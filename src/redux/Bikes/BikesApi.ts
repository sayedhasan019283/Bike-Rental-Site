import { baseApi } from "../api/baseApi";

export interface PaymentIntentResponse {
  clientSecret: string;
  paymentIntentId: string;
}

export const bikeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBikes: builder.query({
      query: () => ({
        url: "/api/bikes",
        method: "GET",
      }),
    }),
    getSingleBike: builder.query({
      query: (id) => ({
        url: `/api/bike/${id}`,
        method: "GET",
      }),
    }),
    addBike: builder.mutation({
      query: (newBike) => ({
        url: "/api/bikes",
        method: "POST",
        body: newBike,
      }),
    }),
    updateBike: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/bikes/${id}`,
        method: "PUT",
        body: data,
      }),
    }),

    deleteBike: builder.mutation({
      query: (id) => ({
        url: `/api/bikes/${id}`,
        method: "DELETE",
      }),
    }),
    // create rental apis
    getRentals: builder.query({
      query: () => ({
        url: "/api/rentals",
        method: "GET",
      }),
    }),
    getAllRentals: builder.query({
      query: () => ({
        url: "/api/rental",
        method: "GET",
      }),
    }),

    createRental: builder.mutation({
      query: (data) => ({
        url: "/api/rentals",
        method: "POST",
        body: data,
      }),
    }),

    getSingleBooking: builder.query({
      query: (id) => ({
        url: `/api/single/rentals/${id}`,
        method: "GET",
      }),
    }),

    returnRental: builder.mutation<void, string>({
      query: (rentalId) => ({
        url: `/api/rentals/${rentalId}/return`,
        method: "PUT",
      }),
    }),
    // sign up apis

    getProfile: builder.query({
      query: () => ({
        url: "/api/users/me",
        method: "GET",
      }),
    }),

    getAllUsers: builder.query({
      query: () => ({
        url: "/api/users",
        method: "GET",
      }),
    }),

    promoteToAdmin: builder.mutation({
      query: (userId: unknown) => ({
        url: `/api/users/${userId}/promote`,
        method: "PATCH",
      }),
    }),

    signUp: builder.mutation({
      query: (data) => ({
        url: "/api/auth/signup",
        method: "POST",
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/api/auth/login",
        method: "POST",
        body: data,
      }),
    }),

    // payment
    paymentbookingBike: builder.mutation({
      query: (data) => ({
        url: 'api/pay',
        method: 'POST',
        body: data,
      }),
    }),

    searchItems: builder.query({
      query: (searchQuery) => `/api/search?q=${searchQuery}`,
    }),

    getFilteredProducts: builder.query({
      query: (filters) => {
        const query = new URLSearchParams(filters).toString();
        return `/api/products?${query}`;
      },
    }),
  }),
});




export const {
  useGetFilteredProductsQuery,
  useSearchItemsQuery,
  useGetBikesQuery,
  useGetSingleBookingQuery,
  useGetSingleBikeQuery,
  useAddBikeMutation,
  useDeleteBikeMutation,
  useUpdateBikeMutation,
  useCreateRentalMutation,
  useGetRentalsQuery,
  useReturnRentalMutation,
  useSignUpMutation,
  useLoginMutation,
  useGetAllRentalsQuery,
  usePaymentbookingBikeMutation,
  useGetProfileQuery,
  useGetAllUsersQuery,
  usePromoteToAdminMutation,
} = bikeApi;
